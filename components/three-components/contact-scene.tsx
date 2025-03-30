"use client"

import { Canvas } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei"

export default function ContactScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
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
        </Sphere>
      </Float>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}

