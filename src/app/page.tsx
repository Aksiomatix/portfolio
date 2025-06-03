"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-6">
      <motion.h1
        className="text-9xl font-bold mb-4 glitch-text cyber-font"
        data-text="Aksiomatix"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.2 }}
      >
        Aksiomatix
      </motion.h1>
      <br/>
      <br/>
      <motion.h3
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
      >
        Axel Jorgensen
      </motion.h3>
      <motion.p
        className="text-xl text-gray-300 mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Unreal Developer & Audio Alchemist crafting stylized immersive systems.
      </motion.p>
      <br/>
      <br/>
      <motion.div
        className="space-x-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <a href="/projects" className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-300 transition">
          Projects
        </a>
        <a href="/resume" className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
          Resume
        </a>
        <a href="/contact" className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
          Contact Me
        </a>
      </motion.div>
    </main>
  );
}