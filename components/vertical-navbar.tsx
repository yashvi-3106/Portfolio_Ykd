"use client"

import { motion } from "framer-motion"
import { Home, User, Code, Briefcase, Mail } from "lucide-react"

interface VerticalNavbarProps {
  currentSection: string
  onSectionChange: (section: string) => void
}

export default function VerticalNavbar({ currentSection, onSectionChange }: VerticalNavbarProps) {
  const navItems = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "contact", icon: Mail, label: "Contact" },
  ]

  return (
    <motion.nav
      className="fixed left-0 top-0 h-full w-20 bg-stone-900/80 backdrop-blur-md border-r border-stone-800 z-40 flex flex-col items-center justify-center"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-6 left-0 right-0 flex justify-center">
        <motion.div
          className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          YD
        </motion.div>
      </div>

      <div className="flex flex-col items-center space-y-8">
        {navItems.map((item) => {
          const isActive = currentSection === item.id
          const Icon = item.icon

          return (
            <motion.button
              key={item.id}
              className="relative group flex flex-col items-center"
              onClick={() => onSectionChange(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`p-3 rounded-xl transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                <Icon size={24} />
              </div>

              <motion.span
                className="absolute left-full ml-2 px-2 py-1 rounded bg-stone-800 text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.span>

              {isActive && (
                <motion.div
                  className="absolute -right-2 w-1 h-8 bg-teal-400 rounded-full"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}

