
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
// import { CylinderGeometry, MeshLambertMaterial } from 'three';
import { useRef } from 'react';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const RotatingCube = () =>{
  const meshRef = useRef();
  // here useFrame is a hook that takes a callback function as an argument and calls it every frame so that we can animate our mesh
  useFrame(()=>{
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.z += 0.01;
  })

  return(
    <mesh ref={meshRef}>
       <cylinderGeometry args={[1, 1, 1]} />
       <meshLambertMaterial color="#468585" emissive="#468585" />
       <Sparkles count={50} scale={5} size={5} speed={0.001} noise={0} color="yellow" />
    </mesh>
  )
}



/**
 * App is a component that renders a rotating cube in the center of the page,
 * surrounded by a black background. The cube is illuminated by a single
 * directional light. The user can control the camera using the mouse by
 * dragging, zooming, and rotating.
 *
 * @return {Element} A JSX element that renders the rotating cube.
 */
const App = () =>{
   return (
     <Canvas style={{height: '100vh', width: '100vw', display: 'flex', justifyContent:'center',alignItems: 'center', backgroundColor: 'black'}} >
      <OrbitControls enableZoom enablePan enableRotate/>
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6}/>
      {/* <color attach="background" args={['#F0F0F0'] /> */}
       <RotatingCube/>
     </Canvas>
   )
}

export default App;