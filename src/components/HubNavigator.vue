<template>
  <div ref="container" class="hub-navigator">
    <div v-if="hoveredNode" class="node-label" :style="labelStyle">
      {{ hoveredNode.title }}
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { NAV_ITEMS } from '@/constants/navigation'
import { useRouter } from 'vue-router'

export default {
  name: 'HubNavigator',
  data() {
    const router = useRouter()
    return {
      router,
      scene: null,
      camera: null,
      renderer: null,
      nodes: [],
      hub: null,
      raycaster: null,
      mouse: null,
      animationFrame: null,
      hoveredNode: null,
      mousePosition: { x: 0, y: 0 },
      clock: new THREE.Clock()
    }
  },
  mounted() {
    this.initScene()
    this.createNodes()
    this.animate()
    window.addEventListener('resize', this.onWindowResize)
    window.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('click', this.onClick)
    this.onWindowResize() // Initial resize
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('click', this.onClick)
    cancelAnimationFrame(this.animationFrame)
  },
  methods: {
    initScene() {
      // Scene setup
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0xffffff)
      this.camera = new THREE.PerspectiveCamera(
        75,
        this.$refs.container.clientWidth / this.$refs.container.clientHeight,
        0.1,
        1000
      )
      this.renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true
      })
      this.renderer.setSize(this.$refs.container.clientWidth, this.$refs.container.clientHeight)
      this.$refs.container.appendChild(this.renderer.domElement)
      
      // Camera position
      this.camera.position.z = 12
      
      // Lighting
      const light = new THREE.DirectionalLight(0xffffff, 1)
      light.position.set(0, 0, 1)
      this.scene.add(light)
      
      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      this.scene.add(ambientLight)
      
      // Raycaster for interaction
      this.raycaster = new THREE.Raycaster()
      this.mouse = new THREE.Vector2()
    },
    createNodes() {
      // Create hub
      const hubGeometry = new THREE.SphereGeometry(2, 32, 32)
      const hubMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xcc3333,
        emissive: 0x441111
      })
      this.hub = new THREE.Group()
      const hubMesh = new THREE.Mesh(hubGeometry, hubMaterial)
      this.hub.add(hubMesh)
      this.scene.add(this.hub)
      
      // Create nodes
      const nodeGeometry = new THREE.SphereGeometry(1, 32, 32)
      const nodeMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x1a237e,
        emissive: 0x0a113e
      })
      
      NAV_ITEMS.forEach((item, index) => {
        const angle = (index / NAV_ITEMS.length) * Math.PI * 2
        const nodeGroup = new THREE.Group()
        const nodeMesh = new THREE.Mesh(nodeGeometry, nodeMaterial.clone())
        nodeGroup.add(nodeMesh)
        
        nodeGroup.position.x = Math.cos(angle) * 8
        nodeGroup.position.y = Math.sin(angle) * 8
        nodeGroup.userData = { 
          url: item.to, 
          title: item.title,
          initialX: Math.cos(angle) * 8,
          initialY: Math.sin(angle) * 8,
          angle: angle
        }
        
        // Add connecting line
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x888888 })
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(Math.cos(angle) * 8, Math.sin(angle) * 8, 0)
        ])
        const line = new THREE.Line(lineGeometry, lineMaterial)
        this.scene.add(line)
        nodeGroup.userData.line = line
        
        this.nodes.push(nodeGroup)
        this.scene.add(nodeGroup)
      })
    },
    animate() {
      const time = this.clock.getElapsedTime()
      this.animationFrame = requestAnimationFrame(this.animate)
      
      // Rotate hub slowly
      if (this.hub) {
        this.hub.rotation.y += 0.005
      }
      
      // Animate nodes with slight floating motion
      this.nodes.forEach((node, index) => {
        // Update node position
        const yOffset = Math.sin(time + index) * 0.5
        node.position.y = node.userData.initialY + yOffset
        
        // Update the connecting line
        const line = node.userData.line
        const points = [
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(node.position.x, node.position.y, node.position.z)
        ]
        line.geometry.dispose()
        line.geometry = new THREE.BufferGeometry().setFromPoints(points)
      })
      
      this.renderer.render(this.scene, this.camera)
    },
    onWindowResize() {
      const width = this.$refs.container.clientWidth
      const height = this.$refs.container.clientHeight
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(width, height)
    },
    onMouseMove(event) {
      const rect = this.$refs.container.getBoundingClientRect()
      this.mousePosition.x = event.clientX
      this.mousePosition.y = event.clientY
      
      this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      
      // Update raycaster
      this.raycaster.setFromCamera(this.mouse, this.camera)
      const intersects = this.raycaster.intersectObjects(
        this.nodes.map(node => node.children[0])
      )
      
      // Change appearance on hover
      this.nodes.forEach(node => {
        node.children[0].material.emissive.setHex(0x0a113e)
      })
      
      if (intersects.length > 0) {
        intersects[0].object.material.emissive.setHex(0x4444ff)
        this.hoveredNode = intersects[0].object.parent.userData
      } else {
        this.hoveredNode = null
      }
    },
    onClick(event) {
      this.raycaster.setFromCamera(this.mouse, this.camera)
      const intersects = this.raycaster.intersectObjects(this.nodes)
      
      if (intersects.length > 0) {
        const url = intersects[0].object.userData.url
        this.router.push(url)
      }
    }
  },
  computed: {
    labelStyle() {
      return {
        position: 'absolute',
        left: `${this.mousePosition.x + 20}px`,
        top: `${this.mousePosition.y - 10}px`,
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '4px',
        pointerEvents: 'none'
      }
    }
  }
}
</script>

<style scoped>
.hub-navigator {
  width: 100%;
  height: 600px;
  position: relative;
  background: linear-gradient(to bottom, #f5f5f5, #ffffff);
  overflow: hidden;
}

.node-label {
  font-size: 14px;
  z-index: 10;
  white-space: nowrap;
}

@media (max-width: 600px) {
  .hub-navigator {
    height: 400px;
  }
}
</style> 