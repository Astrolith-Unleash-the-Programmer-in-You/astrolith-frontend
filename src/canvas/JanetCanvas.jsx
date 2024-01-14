/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React from "react";
import { Janet } from "../gltfjsx/Janet";

const JanetCanvas = ({ handleCharacterMove }) => {
  // const lightRef = useRef();
  return (
    <Canvas
      // shadows
      // frameloop="demand"
      camera={{ near: 0.2, far: 10000, position: [0, 0, 5] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFShadowMap;
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1.5} />
      <hemisphereLight intensity={2.3} groundColor="black" />
      <pointLight position={[0, -20, 10]} intensity={10.5} />
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
        <Janet handleCharacterMove={handleCharacterMove} />
      </Suspense>

      <meshStandardMaterial color="red" />
    </Canvas>
  );
};

export default JanetCanvas;
