import * as THREE from 'three';

var container,
renderer,
scene,
camera,
mesh,
material,
start = Date.now(),
fov = 30;

window.addEventListener('load', function(){
  container = document.getElementById("container");

  scene = new THREE.Scene;

  camera = new THREE.PerspectiveCamera(
    fov,
    window.innerWidth/window.innerHeight,
    1,
    10000
  );
  camera.position.z = 100;

  material = new THREE.MeshBasicMaterial({
    color: 0xb7ff00,
    wireframe: true
  })

  mesh = new THREE.Mesh(
    new THREE.IcosahedronGeometry( 20, 20),
    material
  );
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  render();

    function render() {
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }











})