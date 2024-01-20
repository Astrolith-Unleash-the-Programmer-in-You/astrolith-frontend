import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import station2 from "../assets/models/station2.glb";

export function Stars(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(station2);
  const { actions } = useAnimations(animations, group);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    console.log(actions);
    // actions['Start_Liftoff'].play()

    const intervalId = setInterval(() => {
      setRotationAngle(rotationAngle + 0.0009);
    }, 16);

    group.current.rotation.x = rotationAngle;
    return () => clearInterval(intervalId);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-2.044, -0.213, -0.061]}
          scale={2.701}
          position={[0, 1.5, -1.1]}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="SpaceStation001_low_1">
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.spacestation_smalllights}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
