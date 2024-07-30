"use client"
import { useEffect } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GUI } from "lil-gui"
import * as THREE from "three"

const ThreeJsScene = () => {
    useEffect(() => {
        let renderer

        const init = () => {
            const gui = new GUI()
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
            renderer.setSize(window.innerWidth, window.innerHeight)
            document.body.appendChild(renderer.domElement)

            const scene = new THREE.Scene()

            const textureLoader = new THREE.TextureLoader()
            const texture = textureLoader.load("/video/background3.mp4")
            scene.background = texture

            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500)
            camera.position.z = 25

            const controls = new OrbitControls(camera, renderer.domElement) // 수정된 부분

            import("./Card").then(({ default: Card }) => {
                const card = new Card({
                    width: 10,
                    height: 15.8,
                    radius: 0.5,
                    color: "#0077ff",
                })
                scene.add(card.mesh)

                const cardFolder = gui.addFolder("Card")

                cardFolder.add(card.mesh.material, "roughness").min(0).max(1).step(0.01).name("material.roughness")

                cardFolder.add(card.mesh.material, "metalness").min(0).max(1).step(0.01).name("material.metalness")

                cardFolder.open() // 폴더 열기

                const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
                scene.add(ambientLight)

                const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.6)
                const directionalLight2 = directionalLight1.clone()

                directionalLight1.position.set(1, 1, 3)
                directionalLight2.position.set(-1, 1, -3)

                scene.add(directionalLight1, directionalLight2)

                const render = () => {
                    controls.update() // 추가된 부분: 컨트롤 업데이트
                    renderer.render(scene, camera)
                    requestAnimationFrame(render)
                }

                render()
            })
        }

        if (typeof window !== "undefined") {
            init()
        }

        return () => {
            if (renderer) {
                document.body.removeChild(renderer.domElement)
            }
        }
    }, [])

    return null
}

export default ThreeJsScene
