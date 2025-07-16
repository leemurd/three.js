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

// initial dimensions and aspect ratio for primitive door
const initialPrimWidth = 1
const initialPrimHeight = 1.7
const primAspect = initialPrimWidth / initialPrimHeight

// separate heights for primitive and model doors
const primDoorHeight = ref(initialPrimHeight)
const modelDoorHeight = ref(initialPrimHeight)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: InstanceType<typeof OC>
let doorGroup: THREE.Group

// mesh references for updates
let primDoorMesh: THREE.Mesh
let handleMesh: THREE.Mesh
let gltfModel: THREE.Object3D | null = null
const originalSize = new THREE.Vector3()
const originalCenter = new THREE.Vector3()
let modelAspect = 1

// update scales and positions without recreating meshes
function updateDoorMeshes() {
  const gap = 0.2

  // primitive door: compute width from height
  const primWidth = primDoorHeight.value * primAspect
  primDoorMesh.scale.set(primWidth, primDoorHeight.value, 1)
  primDoorMesh.position.set(-(primWidth + gap) / 2, primDoorHeight.value / 2, -3)

  // handle follows primitive door
  handleMesh.position.set(
    primDoorMesh.position.x + primWidth / 2 - 0.1,
    primDoorHeight.value / 2,
    -2.94
  )

  // model door: scale uniformly based on its original aspect
  if (gltfModel) {
    const scaleY = modelDoorHeight.value / originalSize.y
    gltfModel.scale.set(scaleY, scaleY, scaleY)
    // reposition so bottom rests on floor
    const modelWidth = modelAspect * modelDoorHeight.value
    gltfModel.position.set(
      (modelWidth + gap) / 2,
      -originalCenter.y * scaleY + modelDoorHeight.value / 2,
      -3
    )
  }
}

onMounted(() => {
  // basic scene setup
  scene = new THREE.Scene()
  new THREE.TextureLoader().load(bgUrl, tex => {
    tex.mapping = THREE.EquirectangularReflectionMapping
    scene.background = tex
    scene.environment = tex
  })

  camera = new THREE.PerspectiveCamera(
    75,
    container.value!.clientWidth / container.value!.clientHeight,
    0.51,
    200
  )
  camera.position.set(0, 1.6, initialPrimWidth * 4)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(container.value!.clientWidth, container.value!.clientHeight)
  renderer.shadowMap.enabled = true
  container.value!.appendChild(renderer.domElement)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, initialPrimHeight / 2, 0)

  // GUI with only height controls for each door
  const gui = new GUI()
  gui.add(primDoorHeight, 'value', 0.5, 5, 0.1).name('Primitive Door Height')
  gui.add(modelDoorHeight, 'value', 0.5, 5, 0.1).name('Model Door Height')

  // primitives for context
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

  // group to hold both doors
  doorGroup = new THREE.Group()
  scene.add(doorGroup)

  // build primitive door unit geometry for scaling
  primDoorMesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 0.1),
    new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(woodTextureUrl), metalness: 0.1, roughness: 0.8 })
  )
  primDoorMesh.castShadow = true
  doorGroup.add(primDoorMesh)

  // build handle
  handleMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.03, 0.2, 16),
    new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 0.8, roughness: 0.2 })
  )
  handleMesh.castShadow = true
  handleMesh.rotation.z = Math.PI / 2
  doorGroup.add(handleMesh)

  // load GLTF model once and store original size
  const loader = new GLTFLoader()
  loader.load(
    doorModelUrl,
    gltf => {
      gltfModel = gltf.scene
      const bbox = new THREE.Box3().setFromObject(gltfModel)
      bbox.getSize(originalSize)
      bbox.getCenter(originalCenter)
      modelAspect = originalSize.x / originalSize.y
      gltfModel.traverse(node => { if ((node as THREE.Mesh).isMesh) node.castShadow = true })
      doorGroup.add(gltfModel)
      updateDoorMeshes()
    },
    undefined,
    err => console.error('Error loading door model:', err)
  )

  // initial mesh update
  updateDoorMeshes()

  // lighting
  const dirLight = new THREE.DirectionalLight(0xffffff, 1)
  dirLight.position.set(5, 10, 5)
  dirLight.castShadow = true
  scene.add(dirLight)
  scene.add(new THREE.AmbientLight(0xffffff, 0.3))

  // floor
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

  // watchers to respond to height changes
  watch([primDoorHeight, modelDoorHeight], updateDoorMeshes)

  // handle window resize
  function onWindowResize() {
    const w = container.value!.clientWidth
    const h = container.value!.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', onWindowResize)

  // render loop
  ;(function animate() {
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  })()

  onUnmounted(() => {
    window.removeEventListener('resize', onWindowResize)
    controls.dispose()
    renderer.dispose()
  })
})
</script>
