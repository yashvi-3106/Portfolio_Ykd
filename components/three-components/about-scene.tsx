"use client";

import { Canvas } from "@react-three/fiber";
import { Text, Float, Sphere, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function FloatingText({ text, position, color, speed = 1 }) {
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text position={position} fontSize={0.5} color={color} anchorX="center" anchorY="middle">
        {text}
      </Text>
    </Float>
  );
}

function AnimatedSphere({ position, color, speed, scale = 1 }) {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01 * speed;
    }
  });

  return (
    <Sphere args={[scale, 64, 64]} position={position} ref={mesh}>
      <meshStandardMaterial color={color} />
    </Sphere>
  );
}

export default function AboutScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />

      <AnimatedSphere position={[-2, 0, 0]} color="#14b8a6" speed={0.5} scale={1.2} />
      <AnimatedSphere position={[2, -1, -2]} color="#f59e0b" speed={0.8} scale={0.8} />
      <AnimatedSphere position={[0, 1.5, -1]} color="#f43f5e" speed={0.3} scale={0.6} />

      <FloatingText text="Creative" position={[-2.5, 1.5, 0]} color="#14b8a6" speed={1.5} />
      <FloatingText text="Innovative" position={[2.5, 0.5, -1]} color="#f59e0b" speed={2} />
      <FloatingText text="Passionate" position={[0, -1.5, -0.5]} color="#f43f5e" speed={1} />

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
