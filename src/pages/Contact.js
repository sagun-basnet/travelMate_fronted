import React from 'react'
import ContactContent from '../components/contact/ContactContent'
import {motion} from 'framer-motion'

export default function Contact() {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <ContactContent/>
    </motion.div>
  )
}
