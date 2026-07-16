"use client"

import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function FirstScreen({ onNext }) {

  useEffect(() => {
    const audio = new Audio("/bg-.mp3")
    audio.loop = true
    audio.volume = 0.5

    const playMusic = () => {
      audio.play().catch(() => {})
      window.removeEventListener("click", playMusic)
    }

    window.addEventListener("click", playMusic)

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-6 relative z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-3xl mx-auto">

        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-rose-500/20 flex items-center justify-center border-2 border-pink-400/30 pulse-glow">
            <motion.img
              src="/gif/cute.gif"
              alt="panda jumping"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl text-pink-200 mb-6 font-semibold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          I have something{" "}
          <span className="font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            special
          </span>{" "}
          to tell you...
        </motion.h1>

        <motion.p
          className="text-pink-200/70 text-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          Something that will change everything if you agree ✨
        </motion.p>

        <motion.button
          onClick={onNext}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full flex items-center mx-auto hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Heart className="mr-2" /> Tap to Begin
        </motion.button>

      </div>
    </motion.div>
  )
}
