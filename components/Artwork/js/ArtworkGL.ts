import * as THREE from 'three'

import EventBus from '~/utils/eventBus'

// three.jsの処理を書いていく
export default class ArtworkGL {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private box: THREE.Mesh<THREE.BoxGeometry, THREE.MeshNormalMaterial>

  constructor(props: any) {
    const width = 960
    const height = 540
    this.renderer = new THREE.WebGLRenderer({
      canvas: props.$canvas,
    })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(width, height)

    // シーンを作成
    this.scene = new THREE.Scene()

    // カメラを作成
    this.camera = new THREE.PerspectiveCamera(45, width / height)
    this.camera.position.set(0, 0, +1000)

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400)
    const material = new THREE.MeshNormalMaterial()
    this.box = new THREE.Mesh(geometry, material)
    this.scene.add(this.box)

    this.render()

    // 毎フレーム時に実行されるループイベントです
    EventBus.$on('CHANGE_CAMERA', this.onChange.bind(this))
  }

  private render() {
    this.box.rotateX(0.01)
    this.box.rotateY(0.02)
    this.renderer.render(this.scene, this.camera) // レンダリング
    requestAnimationFrame(this.render.bind(this))
  }

  onChange(direction: string) {
    switch (direction) {
      case 'left':
        this.scene.position.set(-4, 0, 0)
        this.camera.lookAt(this.scene.position)
        break
      case 'right':
        this.scene.position.set(4, 0, 0)
        this.camera.lookAt(this.scene.position)
        break
    }
  }
}
