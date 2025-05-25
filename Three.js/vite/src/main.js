import * as THREE from 'three';
import {OrbitControls} from "three/addons/controls/OrbitControls.js"

const canvas = document.getElementById('canvas');
console.log(canvas);

// 1.scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. camerae
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3.object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585' , emissive: '#468585' });  
const Dodecahedron = new THREE.Mesh(geometry, material);

// object 2
const BoxGeometry = new THREE.BoxGeometry(2, 0.1,2);
const Boxmaterial = new THREE.MeshStandardMaterial({ color: '#B4B4B', emissive: '#B4B4B3'});
const box = new THREE.Mesh(BoxGeometry, Boxmaterial);
box.position.y = -1.5;

scene.add(Dodecahedron);
scene.add(box);

// 4.light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1,1,1);
scene.add(light);
 
// 5.Renderer
// we are adding canvas for
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);


// 6.Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping= true;
controls.dampingFactor = 0.05;
controls. enableZoom = true;
controls. enablePan = true;

// 7. Add Animations

function animate(){
   requestAnimationFrame(animate);

   Dodecahedron.rotation.x += 0.01;
   Dodecahedron.rotation.y += 0.01;

   box.rotation.y += 0.005;

   controls.update();
   renderer.render(scene, camera);
  }

animate();

// 8. Handle Window resizing
window.addEventListener('resize', ()=>{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})

