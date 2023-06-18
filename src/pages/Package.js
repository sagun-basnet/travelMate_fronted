import React from 'react'
import MainPackage from '../components/package/MainPackage'
import { motion } from 'framer-motion';

export default function Package() {
  return (
    <div>
      <motion.div
    initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x2: window.innerWidth, transition: {duration: 0.1}}}
    >
      <MainPackage/>

    </motion.div>
    </div>
  )
}
