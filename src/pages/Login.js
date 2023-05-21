import React from 'react'
import LoginContent from '../components/forms/LoginContent'
import { motion } from 'framer-motion'

export default function Login() {
  return (
    <motion.div className='loginMainDiv'
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <LoginContent/>
    </motion.div>
  )
}
