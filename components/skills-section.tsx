"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiTailwindcss,
  SiMui,
  SiJavascript,
  SiFigma,
  SiHtml5,
} from "react-icons/si"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    { id: 1, name: "React", icon: <SiReact className="text-teal-400" /> },
    { id: 2, name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
    { id: 3, name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { id: 4, name: "Express.js", icon: <SiExpress className="text-stone-300" /> },
    { id: 5, name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    { id: 6, name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { id: 7, name: "Material UI", icon: <SiMui className="text-sky-500" /> },
    { id: 8, name: "JavaScript", icon: <SiJavascript className="text-amber-400" /> },
    { id: 9, name: "UI/UX", icon: <SiFigma className="text-rose-400" /> },
    { id: 10, name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/3 w-80 h-80 bg-rose-500/5 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-teal-400/30 rounded-full animate-float"></div>
      <div
        className="absolute top-40 right-40 w-2 h-2 bg-amber-400/30 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-60 left-1/3 w-4 h-4 bg-rose-400/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 right-1/4 w-3 h-3 bg-emerald-400/30 rounded-full animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text mb-4">
            My Skills
          </h2>
          <p className="text-lg text-stone-300 max-w-2xl mx-auto">
            I've developed expertise in various technologies, focusing on creating interactive and engaging user
            experiences.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-stone-900/50 backdrop-blur-sm border border-stone-800 rounded-xl overflow-hidden"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(20, 184, 166, 0.2)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="p-6 flex flex-col items-center justify-center">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="text-lg font-medium text-white">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

