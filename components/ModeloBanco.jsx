import React from "react";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import modelo from "../src/assets/hot-blend.glb"
import { Edges } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

const ModeloBanco = () => {
    const {scene} = useGLTF(modelo)
    const groupRef = useRef();


  return <Canvas style={{ height: "50vh", width: "100vw" }} camera={{ position: [5, 5, 5], fov: 35 }}>
    <ambientLight intensity={0.5} />    
    <axesHelper args={[1]} />



    <group ref={groupRef} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.03}>
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








  </Canvas>;
};
export default ModeloBanco;
