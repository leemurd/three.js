<template>
  <div ref="container" class="container-scene"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import type { OrbitControls as OC } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import woodTextureUrl from '@/assets/img/textures/wood.jpg'
import bgUrl from '@/assets/img/textures/bg.jpg'
import floorTextureUrl from '@/assets/img/textures/floor.jpg'
import doorModelUrl from '@/assets/models/Door.glb?url'

const container = ref<HTMLDivElement>()

const doorWidth = ref(1)
const doorHeight = ref(1.7)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: InstanceType<typeof OC>
let doorGroup: THREE.Group

// Handle window resize
function onWindowResize() {
  const w = container.value!.clientWidth
  const h = container.value!.clientHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
}

onMounted(() => {
  // Initialize scene and environment
  scene = new THREE.Scene()
  new THREE.TextureLoader().load(bgUrl, tex => {
    tex.mapping = THREE.EquirectangularReflectionMapping
    scene.background = tex
    scene.environment = tex
  })

  // Set up camera
  camera = new THREE.PerspectiveCamera(
    75,
    container.value!.clientWidth / container.value!.clientHeight,
    0.51,
    200
  )
  camera.position.set(0, 1.6, doorWidth.value * 4)

  // Create renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(container.value!.clientWidth, container.value!.clientHeight)
  renderer.shadowMap.enabled = true
  container.value!.appendChild(renderer.domElement)

  // Set up orbit controls
  controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, doorHeight.value / 2, 0)

  // GUI for adjusting door dimensions
  const gui = new GUI()
  gui.add(doorWidth, 'value', 0.5, 5, 0.1).name('Door Width')
  gui.add(doorHeight, 'value', 1, 5, 0.1).name('Door Height')

  // Demo primitives for scene context
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0x0077ff, metalness: 0.6, roughness: 0.2 })
  )
  box.castShadow = true
  box.position.set(-2, 0.5, 0)
  scene.add(box)

  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshStandardMaterial({ color: 0xff7700, metalness: 0.6, roughness: 0.2 })
  )
  sphere.castShadow = true
  sphere.position.set(2, 0.5, 0)
  scene.add(sphere)

  // Group to hold both doors
  doorGroup = new THREE.Group()
  scene.add(doorGroup)

  // Function to rebuild doors when dimensions change
  function rebuildDoor() {
    doorGroup.clear()

    const gap = 0.2 // distance between the two doors

    // 1) Primitive door
    const primX = -(doorWidth.value + gap) / 2
    const doorMesh = new THREE.Mesh(
      new THREE.BoxGeometry(doorWidth.value, doorHeight.value, 0.1),
      new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load(woodTextureUrl),
        metalness: 0.1,
        roughness: 0.8
      })
    )
    doorMesh.castShadow = true
    doorMesh.position.set(primX, doorHeight.value / 2, -3)
    doorGroup.add(doorMesh)

    const handle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 0.2, 16),
      new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 0.8, roughness: 0.2 })
    )
    handle.castShadow = true
    handle.rotation.z = Math.PI / 2
    handle.position.set(
      primX + doorWidth.value / 2 - 0.1,
      doorHeight.value / 2,
      -2.94
    )
    doorGroup.add(handle)

    // 2) GLTF door model
    const loader = new GLTFLoader()
    loader.load(
      doorModelUrl,
      gltf => {
        const model = gltf.scene

        // Compute bounding box of the model
        const bbox = new THREE.Box3().setFromObject(model)
        const size = bbox.getSize(new THREE.Vector3())
        const center = bbox.getCenter(new THREE.Vector3())

        // Scale model to match door dimensions
        const scaleX = doorWidth.value / size.x
        const scaleY = doorHeight.value / size.y
        model.scale.set(scaleX, scaleY, scaleX)

        // Position model so its bottom rests on the floor
        const modelX = (doorWidth.value + gap) / 2
        const modelY = -center.y * scaleY + doorHeight.value / 2
        model.position.set(modelX, modelY, -3)

        // Enable shadows for all meshes in the model
        model.traverse(node => {
          if ((node as THREE.Mesh).isMesh) node.castShadow = true
        })

        doorGroup.add(model)
      },
      undefined,
      err => console.error('Error loading door model:', err)
    )
  }

  rebuildDoor()
  watch([doorWidth, doorHeight], rebuildDoor)

  // Lighting setup
  const dirLight = new THREE.DirectionalLight(0xffffff, 1)
  dirLight.position.set(5, 10, 5)
  dirLight.castShadow = true
  scene.add(dirLight)
  scene.add(new THREE.AmbientLight(0xffffff, 0.3))

  // Floor setup
  const floorTex = new THREE.TextureLoader().load(floorTextureUrl)
  floorTex.wrapS = THREE.RepeatWrapping
  floorTex.wrapT = THREE.RepeatWrapping
  floorTex.repeat.set(20, 20)

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 40),
    new THREE.MeshStandardMaterial({ map: floorTex, side: THREE.DoubleSide })
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  window.addEventListener('resize', onWindowResize)

  // Animation loop
  ;(function animate() {
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  })()
})

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize)
  controls.dispose()
  renderer.dispose()
})
</script>
