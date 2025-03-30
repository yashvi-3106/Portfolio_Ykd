"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

interface HorizontalNavbarProps {
  currentSection: string
  onSectionChange: (section: string) => void
}

export default function HorizontalNavbar({ currentSection, onSectionChange }: HorizontalNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 h-16 bg-stone-900/80 backdrop-blur-md border-b border-stone-800 z-30 ml-20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-amber-400 to-rose-500 text-transparent bg-clip-text"
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = currentSection === item.id

            return (
              <motion.button
                key={item.id}
                className={`relative text-lg font-medium transition-colors ${
                  isActive ? "text-teal-400" : "text-stone-400 hover:text-white"
                }`}
                onClick={() => onSectionChange(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400"
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-stone-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="absolute top-16 left-0 right-0 bg-stone-900 border-b border-stone-800 md:hidden z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = currentSection === item.id

              return (
                <motion.button
                  key={item.id}
                  className={`py-2 text-lg font-medium ${isActive ? "text-teal-400" : "text-stone-400"}`}
                  onClick={() => {
                    onSectionChange(item.id)
                    setMobileMenuOpen(false)
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

