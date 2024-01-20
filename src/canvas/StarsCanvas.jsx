import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Stars } from "../gltfjsx/Stars";

const StarsCanvas = () => {
  return (
    <div>
      <Canvas
        camera={{ near: 0.01, far: 10000, fov: 42 }}
        className="bg-red h-screen w-full"
      >
        <directionalLight position={[1, 10, 4]} intensity={1.2} />
        <ambientLight intensity={0.5} />
        <pointLight intensity={0.5} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.92}
          prenumbre={1}
          intensity={0.3}
          castShadow
          shadow-mapSize={1024}
        />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#66600" />
        <Suspense fallback={null}>
          <Stars />
          {/* <Asteriod/> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
