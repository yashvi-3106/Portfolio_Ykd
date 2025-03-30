"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import Three.js components with no SSR
const ContactScene = dynamic(() => import("./three-components/contact-scene"), { ssr: false })

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isMounted, setIsMounted] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formState)
    alert("Message sent! (This is a demo)")
    setFormState({
      name: "",
      email: "",
      message: "",
    })
  }

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
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-teal-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-rose-500/5 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-stone-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <div className="bg-stone-900/50 backdrop-blur-sm border border-stone-800 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg text-teal-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                    <p className="text-stone-300">yashvikdholakiya06@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg text-teal-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                    <p className="text-stone-300">+91 9825164868</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg text-teal-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                    <p className="text-stone-300">Ahemdabad x Surat</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 h-48 relative">{isMounted && <ContactScene />}</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="bg-stone-900/50 backdrop-blur-sm border border-stone-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-2">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-2">
                    Your Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white resize-none"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

