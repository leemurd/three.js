<template>
  <div ref="container" class="container-scene"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import type { OrbitControls as OC } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
import woodTextureUrl from '@/assets/img/textures/wood.jpg'
import bgUrl from '@/assets/img/textures/bg.jpg'
import floorTextureUrl from '@/assets/img/textures/floor.jpg'

const container = ref<HTMLDivElement>()

// Door parameters
const doorWidth = ref(1)
const doorHeight = ref(1.7)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: InstanceType<typeof OC>
let doorGroup: THREE.Group

function onWindowResize() {
  const w = container.value!.clientWidth
  const h = container.value!.clientHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
}

onMounted(() => {
  // Scene and background
  scene = new THREE.Scene()
  new THREE.TextureLoader().load(bgUrl, texture => {
    texture.mapping = THREE.EquirectangularReflectionMapping
    scene.background = texture
    scene.environment = texture
  })

  // Camera at floor level
  camera = new THREE.PerspectiveCamera(
    75,
    container.value!.clientWidth / container.value!.clientHeight,
    0.51,
    200
  )
  camera.position.set(0, 1.6, doorWidth.value * 4)

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(container.value!.clientWidth, container.value!.clientHeight)
  renderer.shadowMap.enabled = true
  container.value!.appendChild(renderer.domElement)

  // OrbitControls, look at door handle height
  controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, doorHeight.value / 2, 0)

  // GUI for door dimensions
  const gui = new GUI()
  gui.add(doorWidth, 'value', 0.5, 5, 0.1).name('Ширина двери')
  gui.add(doorHeight, 'value', 1, 5, 0.1).name('Высота двери')

  // Primitives with reflections
  const boxMat = new THREE.MeshStandardMaterial({
    color: 0x0077ff,
    metalness: 0.6,
    roughness: 0.2
  })
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    boxMat
  )
  box.castShadow = true
  box.position.set(-2, 0.5, 0)
  scene.add(box)

  const sphereMat = new THREE.MeshStandardMaterial({
    color: 0xff7700,
    metalness: 0.6,
    roughness: 0.2
  })
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    sphereMat
  )
  sphere.castShadow = true
  sphere.position.set(2, 0.5, 0)
  scene.add(sphere)

  // Door group
  doorGroup = new THREE.Group()
  scene.add(doorGroup)

  function rebuildDoor() {
    doorGroup.clear()

    // Door
    const doorMesh = new THREE.Mesh(
      new THREE.BoxGeometry(doorWidth.value, doorHeight.value, 0.1),
      new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load(woodTextureUrl),
        metalness: 0.1,
        roughness: 0.8
      })
    )
    doorMesh.castShadow = true
    doorMesh.position.set(0, doorHeight.value / 2, -3)
    doorGroup.add(doorMesh)

    // Handle
    const handle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 0.2, 16),
      new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 0.8, roughness: 0.2 })
    )
    handle.castShadow = true
    handle.rotation.z = Math.PI / 2
    handle.position.set(
      doorWidth.value / 2 - 0.1,
      doorHeight.value / 2,
      -3 + 0.06
    )
    doorGroup.add(handle)
  }

  rebuildDoor()
  watch([doorWidth, doorHeight], rebuildDoor)

  // Lighting
  const dirLight = new THREE.DirectionalLight(0xffffff, 1)
  dirLight.position.set(5, 10, 5)
  dirLight.castShadow = true
  scene.add(dirLight)
  scene.add(new THREE.AmbientLight(0xffffff, 0.3))

  // Floor with texture
  const floorTexture = new THREE.TextureLoader().load(floorTextureUrl)
  floorTexture.wrapS = THREE.RepeatWrapping
  floorTexture.wrapT = THREE.RepeatWrapping
  floorTexture.repeat.set(20, 20)

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 40),
    new THREE.MeshStandardMaterial({ map: floorTexture, side: THREE.DoubleSide })
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  // Resize handler
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

<style>

</style>
