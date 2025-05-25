import * as THREE from 'three';

// 1. Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Add a camera
// aspect ratio: width / height
// here we are creating a perspective camera, which is a camera that has a perspective projection
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// setting the position of the camera
camera.position.z = 5;

// 3. Create and add a cube object
const geometry = new THREE.BoxGeometry();
// emmissive color: color of the light emitted by the material
const material = new THREE.MeshBasicMaterial({ color: '#468585',emissive: '#468585' });
// Mesh is an object that takes a geometry, and applies a material to it
const cube = new THREE.Mesh(geometry, material);
// adding the cube to the scene
scene.add(cube);

// 4. Add lightening
// DirectionalLight is a light that gets emitted in a specific direction
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
// setting the position of the light
light.position.set(1, 1, 1);
scene.add(light);

// 5. Set up the renderer
// The renderer is what takes the scene and renders it to the screen
// and it needs to know the size of the window to render it properly

//here we are creating a WebGLRenderer
const renderer = new THREE.WebGLRenderer();
// setting the size of the renderer to the size of the window
renderer.setSize(window.innerWidth, window.innerHeight);
// adding the renderer to the DOM
document.body.appendChild(renderer.domElement);

// 6. Animate the scene
// here we are creating a function that will be called every frame

function animate(){
    // requestAnimationFrame is a function that tells the browser to call the function
    // passed to it before the next repaint
    requestAnimationFrame(animate);
    // rotating the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // rendering the scene
    renderer.render(scene, camera);
}

animate();

