"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

export default function BackgroundEffect({ section }) {
  const ref = useRef()
  const isInView = useInView(ref, { once: false })

  return (
    <div ref={ref} className="absolute inset-0 -z-10">
      {isInView && (
        <div className="w-full h-full bg-gradient-to-br from-teal-500/10 to-emerald-500/5 animate-pulse">
          {section === "hero" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-teal-500/20 rounded-full animate-bounce"></div>
            </div>
          )}

          {section === "about" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-teal-500/15 rounded-full animate-pulse"></div>
            </div>
          )}

          {section === "skills" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-orange-400/20 rounded-full animate-bounce"></div>
            </div>
          )}

          {section === "contact" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-36 h-36 bg-pink-400/20 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
