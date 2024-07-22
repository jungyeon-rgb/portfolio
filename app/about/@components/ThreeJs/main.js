import * as THREE from "three";

window.addEventListener("load", function () {
  init();
});

function init() {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const texture = textureLoader.load(
    "https://png.pngtree.com/thumb_back/fw800/background/20231105/pngtree-cloud-filled-sky-a-captivating-background-texture-image_13742805.png"
  );

  scene.background = texture;

  render();
}
