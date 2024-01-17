/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Volcano } from "../gltfjsx/Volcano";
import React from "react";
import { Volcano2 } from "../gltfjsx/Volcano2";

const VolcanoCanvas = ({ position }) => {
  // const lightRef = useRef();
  return (
    <Canvas
      // shadows
      // frameloop="demand"
      // camera={{ near: 0.2, far: 10000, position: [0, 0, 5] }}
      camera={{ fov: 60, near: 0.1, far: 1000, position: [0, 0, 12.15] }}
      // onCreated={({ gl }) => {
      //   gl.shadowMap.enabled = true;
      //   gl.shadowMap.type = THREE.PCFShadowMap;
      // }}
      // gl={{ preserveDrawingBuffer: true }}
    >
      {/* <ambientLight intensity={0.5} />
      <rectAreaLight intensity={0.5} />
      <pointLight position={[0, 1, 0]} intensity={1.5} />
      <hemisphereLight groundColor={"ebe8e891"} intensity={0.5} />
      <lightProbe />
      <directionalLight
        ref={lightRef}
        position={[0, 2, 0]}
        intensity={0.5}
        castShadow={true}
      /> */}
      <ambientLight intensity={0.7} />
      <directionalLight intensity={4.9} />
      <hemisphereLight intensity={0.3} groundColor="black" />
      <pointLight position={[0.5, -2.5, -9.8]} intensity={2.5} />
      <spotLight
        position={[-20, -50, 10]}
        angle={0.92}
        prenumbre={1}
        intensity={0.3}
        castShadow
        // shadow-mapSize={1024}
      />

      <Suspense fallback={null}>
        {/* <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> */}
        <Volcano2 position={position} />
      </Suspense>

      <meshStandardMaterial color="red" />
    </Canvas>
  );
};

export default VolcanoCanvas;
