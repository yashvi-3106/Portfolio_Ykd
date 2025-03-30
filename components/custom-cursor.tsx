"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Only run after component has mounted on the client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    // Only add event listeners after component has mounted
    if (!isMounted) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      const isPointerElement =
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsPointer(isPointerElement)
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => setIsActive(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isMounted]) // Only re-run when isMounted changes

  // Hide the default cursor
  useEffect(() => {
    if (!isMounted) return

    document.body.style.cursor = "none"

    // Add cursor styles to all interactive elements
    const style = document.createElement("style")
    style.innerHTML = `
      a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"]) {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.body.style.cursor = ""
      if (style.parentNode) {
        document.head.removeChild(style)
      }
    }
  }, [isMounted])

  // Don't render anything during SSR
  if (!isMounted) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-teal-400 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 800,
          damping: 30,
          opacity: { duration: 0.2 },
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-teal-400 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isActive ? 2 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 1000,
          damping: 20,
          opacity: { duration: 0.2 },
        }}
      />
    </>
  )
}

