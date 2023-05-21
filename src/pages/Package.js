import React from 'react'
import { motion } from 'framer-motion'

export default function Package() {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <h1>Package Section</h1>
    </motion.div>
  )
}
