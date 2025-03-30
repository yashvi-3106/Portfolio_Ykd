"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import dynamic from "next/dynamic"
import { useSpring, animated } from "@react-spring/web"

// Dynamically import Three.js components with no SSR
const ThreeScene = dynamic(() => import("./three-components/about-scene"), { ssr: false })

function SkillCard({ title, icon, delay }) {
  const [hovered, setHovered] = useState(false)

  const { scale, y, shadow } = useSpring({
    scale: hovered ? 1.05 : 1,
    y: hovered ? -5 : 0,
    shadow: hovered ? 20 : 5,
    config: { tension: 300, friction: 10 },
  })

  return (
    <animated.div
      className="bg-stone-800/50 backdrop-blur-sm border border-stone-700 rounded-xl p-4 flex flex-col items-center"
      style={{
        scale,
        y,
        boxShadow: shadow.to((s) => `0 ${s}px 25px rgba(20, 184, 166, 0.15)`),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </animated.div>
  )
}

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="relative h-[400px] order-2 lg:order-1" variants={itemVariants}>
            <div className="h-[400px] w-full rounded-xl overflow-hidden">{isMounted && <ThreeScene />}</div>
          </motion.div>

          <motion.div className="order-1 lg:order-2" variants={containerVariants}>
            <motion.h2
              className="text-4xl font-bold mb-6 inline-block bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text"
              variants={itemVariants}
            >
              About Me
            </motion.h2>

            <motion.p className="text-lg text-stone-300 mb-6" variants={itemVariants}>
            A results-driven MERN Stack Developer with expertise in building dynamic, scalable web applications using MongoDB, Express.js, React.js, and Node.js. Proficient in both front-end and back-end development, I specialize in creating user interfaces and efficient server-side architectures. Experienced in working with RESTful APIs, JavaScript (ES6+), Version Control (Git). Passionate about delivering high-quality code and optimized solutions, I am committed to continuous learning and improving user experiences.
            </motion.p>

            <motion.p className="text-lg text-stone-300 mb-8" variants={itemVariants}>
              My approach combines technical expertise with creative design thinking to deliver solutions that not only
              function flawlessly but also engage and delight users.
            </motion.p>

            <motion.div className="grid grid-cols-1 gap-4" variants={containerVariants}>
              <motion.div
                className="bg-stone-800/50 backdrop-blur-sm border border-stone-700 rounded-xl p-4"
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(20, 184, 166, 0.1)" }}
              >
                <h3 className="text-xl font-semibold mb-2 text-teal-400">Education</h3>
                <p className="text-stone-300">Information Technology, Rai University ✘ CodingGita</p>
                <p className="text-stone-300">Semister-1 : CGPA : 9.76</p>
              </motion.div>

             
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

