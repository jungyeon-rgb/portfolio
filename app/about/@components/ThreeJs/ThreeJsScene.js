"use client";
import { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

const ThreeJsScene = () => {
  useEffect(() => {
    let renderer;

    const init = () => {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const scene = new THREE.Scene();

      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(
        "https://png.pngtree.com/thumb_back/fw800/background/20231105/pngtree-cloud-filled-sky-a-captivating-background-texture-image_13742805.png"
      );
      scene.background = texture;

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        500
      );
      camera.position.z = 25;

      const controls = new OrbitControls(camera, renderer.domElement); // 수정된 부분

      import("./Card").then(({ default: Card }) => {
        const card = new Card({
          width: 10,
          height: 15.8,
          color: "#0077ff",
        });
        scene.add(card.mesh);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        ambientLight.position.set(-5, -5, -5);
        scene.add(ambientLight);

        const render = () => {
          controls.update(); // 추가된 부분: 컨트롤 업데이트
          renderer.render(scene, camera);
          requestAnimationFrame(render);
        };

        render();
      });
    };

    if (typeof window !== "undefined") {
      init();
    }

    return () => {
      if (renderer) {
        document.body.removeChild(renderer.domElement);
      }
    };
  }, []);

  return null;
};

export default ThreeJsScene;
