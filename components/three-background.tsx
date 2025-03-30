"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useInView } from "framer-motion"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"

function AnimatedSphere({ position, color, speed, distort }) {
  const mesh = useRef()

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01 * speed
    }
  })

  return (
    <Sphere args={[1, 64, 64]} position={position} ref={mesh}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={speed}
        roughness={0.5}
        metalness={0.2}
      />
    </Sphere>
  )
}

export default function ThreeBackground({ section }) {
  const ref = useRef()
  const isInView = useInView(ref, { once: false })

  return (
    <div ref={ref} className="absolute inset-0 -z-10">
      {isInView && (
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />

          {section === "hero" && (
            <>
              <AnimatedSphere position={[-3, 0, 0]} color="#14b8a6" speed={0.5} distort={0.4} />
              <AnimatedSphere position={[3, 0, 0]} color="#f59e0b" speed={0.8} distort={0.6} />
              <AnimatedSphere position={[0, 2, -2]} color="#f43f5e" speed={0.3} distort={0.3} />
            </>
          )}

          {section === "about" && (
            <>
              <AnimatedSphere position={[0, 0, 0]} color="#14b8a6" speed={0.2} distort={0.3} />
            </>
          )}

          {section === "skills" && (
            <>
              <AnimatedSphere position={[-2, -1, 0]} color="#14b8a6" speed={0.3} distort={0.2} />
              <AnimatedSphere position={[2, 1, -2]} color="#f59e0b" speed={0.5} distort={0.4} />
            </>
          )}

          {section === "contact" && (
            <>
              <AnimatedSphere position={[0, 0, 0]} color="#14b8a6" speed={0.4} distort={0.5} />
            </>
          )}

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      )}
    </div>
  )
}

