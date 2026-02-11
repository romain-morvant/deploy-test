import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(10, 10, 10, 6, 6, 6);
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ee,
  wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 15;
controls.update();

function animate() {
  cube.rotation.x += 0.001;
  cube.rotation.y += 0.001;

  controls.update();
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
