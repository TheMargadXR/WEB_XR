import * as THREE from "three";
import { ARButton } from "https://unpkg.com/three@0.126.0/examples/jsm/webxr/ARButton.js";
import { MeshBasicMaterial } from "three";

let camera, scene, renderer;
let mesh, mesh2;
init();
animate();
function init() {
  // html ruu handalt uguh
  const container = document.createElement("div");
  // scene buteeh heseg
  scene = new THREE.scene();

  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    40
  );

  renderer = new three.webglrenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.xr.enabled = true;
  container.appendChild(renderer.domElement);

  var light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  light.position.set(0.5, 1, 0.25);
  scene.add(light);

  const geometry = new THREE.IcosahedronGeometry(0.1, 1);
  const material = new THREE.MeshPhongMaterial({
    color: new THREE.color("rgb(226,35,213)"),
    shininess: 6,
    flatShading: true,
    transparent: 1,
    opacity: 0.8,
  });
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0.2, 0, 0.5);
  scene.add(mesh);

  //   2 dahi durs

  const geometry2 = new THREE.TorusGeometry(0.15, 0.05, 12, 50);
  const material2 = new THREE.MeshBasicMaterial({
    color: new THREE.color("rgb(252,252,150)"),
  });
  mesh2 = new THREE.Mesh(geometry2, material2);
  mesh2.position.set(-0.2, 0, -1);
  scene.add(mesh2);
}

function onWindowReSize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  Camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth / window.innerHeight);
}

function animate() {
  renderer.setAnimationloop(render);
}
function render() {
  renderer.render(scene, camera);
}
