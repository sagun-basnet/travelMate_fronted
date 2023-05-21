import React from 'react'
import AboutContent from '../components/about/AboutContent';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
    initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x2: window.innerWidth, transition: {duration: 0.1}}}
    >
      <AboutContent/>
    </motion.div>
  )
}
