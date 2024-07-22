"use client";
import { useEffect } from "react";
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

      // Assuming Card is a class you have defined in another file
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
      // Clean up function to remove the renderer's canvas when the component unmounts
      if (renderer) {
        document.body.removeChild(renderer.domElement);
      }
    };
  }, []);

  return null;
};

export default ThreeJsScene;
