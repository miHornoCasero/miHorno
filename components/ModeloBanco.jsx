import React from "react";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import modelo from "../src/assets/horno-55lts.glb";
import { Edges } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

const ModeloBanco = () => {
  const { scene } = useGLTF(modelo);
  const groupRef = useRef();

  return (
    <Canvas
      style={{ height: "500px", width: "500px" }}
      camera={{ position: [5, 5, 5], fov: 25 }}
    >
      <ambientLight intensity={0.5} />

      <group
        ref={groupRef}
        position={[0.5, 0, 0.5]}
        rotation={[0, 0, 0]}
        scale={0.35}
      >
        {scene.children.map((child, index) => {
          if (child.isMesh) {
            return (
              <mesh
                key={index}
                geometry={child.geometry}
                material={child.material}
                position={child.position}
                rotation={child.rotation}
                scale={child.scale}
              >
                <Edges
                  threshold={15} // cuán nítido tiene que ser el ángulo para dibujar el borde
                  color="black"
                />
              </mesh>
            );
          }
          return null;
        })}

        <OrbitControls />
      </group>
    </Canvas>
  );
};
export default ModeloBanco;
