"use client"

import type React from "react"

import { useEffect, useState, Suspense } from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import dynamic from "next/dynamic"
import { useSpring, animated } from "@react-spring/web"

// Import all components that use browser APIs with dynamic imports and no SSR
const VerticalNavbar = dynamic(() => import("@/components/vertical-navbar"), { ssr: false })
const CustomCursor = dynamic(() => import("@/components/custom-cursor"), { ssr: false })
const DynamicBackground = dynamic(() => import("@/components/dynamic-background"), { ssr: false })
const AboutSection = dynamic(() => import("@/components/about-section"), { ssr: false })
const SkillsSection = dynamic(() => import("@/components/skills-section"), { ssr: false })
const ProjectsSection = dynamic(() => import("@/components/projects-section"), { ssr: false })
const ContactSection = dynamic(() => import("@/components/contact-section"), { ssr: false })

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-16 h-16 border-4 border-t-teal-400 border-r-amber-400 border-b-rose-400 border-l-emerald-400 rounded-full animate-spin"></div>
  </div>
)

export default function Home() {
  const [currentSection, setCurrentSection] = useState("hero")
  const [isLoading, setIsLoading] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // 3D hover effect for profile photo
  const [{ rotateX, rotateY, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  // Set isMounted to true after component mounts
  useEffect(() => {
    setIsMounted(true)

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMounted) return

    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const rotateXVal = ((mouseY - height / 2) / height) * 20
    const rotateYVal = ((width / 2 - mouseX) / width) * 20

    api.start({
      rotateX: rotateXVal,
      rotateY: rotateYVal,
      scale: 1.05,
    })
  }

  const handleMouseLeave = () => {
    if (!isMounted) return

    api.start({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    })
    setIsHovering(false)
  }

  const handleSectionChange = (section: string) => {
    if (!isMounted) return

    setCurrentSection(section)

    // Smooth scroll to section
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Don't render anything during SSR
  if (!isMounted) {
    return <LoadingFallback />
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-stone-950 to-stone-900 text-stone-50 overflow-hidden">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-stone-950 z-50">
          <motion.div
            className="w-16 h-16 border-4 border-t-teal-400 border-r-amber-400 border-b-rose-400 border-l-emerald-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </div>
      ) : (
        <Suspense fallback={<LoadingFallback />}>
          <CustomCursor />
          <VerticalNavbar currentSection={currentSection} onSectionChange={handleSectionChange} />
          <DynamicBackground />

          <div className="ml-6">
            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex items-center relative">
              <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                <motion.div
                  className="flex flex-col justify-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-2xl font-light text-teal-400 mb-4 ml-16">Hello, I'm</h2>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-stone-50 ml-16 ">
                    <TypeAnimation
                      sequence={["Yashvi Dholakiya", 1000, "a Developer", 1000, "a Designer", 1000, "a Creator", 1000]}
                      wrapper="span"
                      speed={50}
                      repeat={Number.POSITIVE_INFINITY}
                    />
                  </h1>
                  <p className="text-xl text-stone-300 mb-8 max-w-md ml-16">
                    Creating futuristic digital experiences with cutting-edge technologies
                  </p>
                  <motion.button
                    className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-3 rounded-full font-medium text-lg w-fit ml-16"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore My Work
                  </motion.button>
                </motion.div>

                <motion.div
                  className="relative h-[400px] md:h-[600px] flex items-center justify-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div
                    className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] perspective-1000"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 via-amber-400 to-rose-500 blur-xl opacity-30 animate-pulse"></div>

                    <animated.div
                      className="absolute inset-4 rounded-full overflow-hidden border-2 border-teal-400/30 transform-gpu"
                      style={{
                        transform: "perspective(1000px)",
                        rotateX,
                        rotateY,
                        scale,
                      }}
                    >
                      <img
                        src="https://ik.imagekit.io/viik8o1ol/db03b8da-1cea-4a9e-a017-627bd9ca0fb2.png?updatedAt=1754382100734"
                        alt="John Doe"
                        className="w-full h-full object-cover"
                      />

                      {/* Reflective overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-white/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Edge highlight */}
                      <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
                    </animated.div>

                    {/* Floating particles around the image */}
                    <div className="absolute top-1/4 left-0 w-4 h-4 rounded-full bg-teal-400/50 animate-float"></div>
                    <div
                      className="absolute bottom-1/4 right-0 w-3 h-3 rounded-full bg-amber-400/50 animate-float"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-rose-400/50 animate-float"
                      style={{ animationDelay: "2s" }}
                    ></div>
                  </div>
                </motion.div>
              </div>
            </section>

            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </Suspense>
      )}
    </main>
  )
}

