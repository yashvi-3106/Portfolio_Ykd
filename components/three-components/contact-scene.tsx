"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { useRef, useEffect } from "react";

function DistortedSphere() {
  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current) {
      console.log("Mesh:", meshRef.current);
      console.log("Material:", meshRef.current.material);
    }
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <MeshDistortMaterial
          color="#14b8a6"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.5}
          metalness={0.2}
          opacity={0.8}
          transparent
        />
      </mesh>
    </Float>
  );
}

export default function ContactScene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener("webglcontextlost", (e) => {
          console.log("WebGL context lost");
          e.preventDefault();
        });
        gl.domElement.addEventListener("webglcontextrestored", () => {
          console.log("WebGL context restored");
        });
      }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      <DistortedSphere />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}