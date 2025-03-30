"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";

function SkillCard({ title, icon }) {
  const [hovered, setHovered] = useState(false);

  const { scale, y, shadow } = useSpring({
    scale: hovered ? 1.05 : 1,
    y: hovered ? -5 : 0,
    shadow: hovered ? 20 : 5,
    config: { tension: 300, friction: 10 },
  });

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
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Floating Elements Instead of Three.js */}
          <motion.div className="relative h-[400px] order-2 lg:order-1 flex items-center justify-center">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              {/* Floating Text */}
              <motion.span
                className="absolute top-10 left-8 text-teal-400 text-xl font-bold animate-float"
                variants={itemVariants}
              >
                Creative
              </motion.span>
              <motion.span
                className="absolute bottom-10 right-8 text-yellow-400 text-xl font-bold animate-float2"
                variants={itemVariants}
              >
                Innovative
              </motion.span>
              <motion.span
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-pink-500 text-xl font-bold animate-float3"
                variants={itemVariants}
              >
                Passionate
              </motion.span>

              {/* Floating Circles */}
              <motion.div
                className="absolute w-32 h-32 bg-teal-400 rounded-full opacity-70 animate-bounce-slow left-10 top-24"
                variants={itemVariants}
              ></motion.div>
              <motion.div
                className="absolute w-24 h-24 bg-yellow-400 rounded-full opacity-70 animate-bounce-slower right-12 bottom-20"
                variants={itemVariants}
              ></motion.div>
              <motion.div
                className="absolute w-16 h-16 bg-pink-500 rounded-full opacity-70 animate-bounce-fast left-1/2 transform -translate-x-1/2 top-10"
                variants={itemVariants}
              ></motion.div>
            </div>
          </motion.div>

          {/* About Me Text Section */}
          <motion.div className="order-1 lg:order-2" variants={containerVariants}>
            <motion.h2
              className="text-4xl font-bold mb-6 inline-block bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text"
              variants={itemVariants}
            >
              About Me
            </motion.h2>

            <motion.p className="text-lg text-stone-300 mb-6" variants={itemVariants}>
              A results-driven MERN Stack Developer with expertise in building dynamic, scalable web applications using
              MongoDB, Express.js, React.js, and Node.js. Proficient in both front-end and back-end development, I
              specialize in creating user interfaces and efficient server-side architectures. Experienced in working
              with RESTful APIs, JavaScript (ES6+), and Version Control (Git). Passionate about delivering high-quality
              code and optimized solutions, I am committed to continuous learning and improving user experiences.
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
                <p className="text-stone-300">Semester-1 : CGPA : 9.76</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
