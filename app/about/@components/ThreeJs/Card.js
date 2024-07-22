import * as THREE from "three";

// const card = new Card(); // 카드 값을 설정하는 곳

class Card {
  constructor({ width, height, color }) {
    const geometry = new THREE.PlaneGeometry(width, height);
    const material = new THREE.MeshStandardMaterial({
      color,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);

    this.mesh = mesh;
  }
}

export default Card;
