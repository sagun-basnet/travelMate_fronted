import React from 'react'
import SignupContent from '../components/forms/SignupContent';
import { motion } from 'framer-motion';

export default function Signup() {
  return (
    <motion.div className='loginMainDiv'
    initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.3}}}
    >
      {/* <h1>Register here</h1> */}
      < SignupContent/>
    </motion.div>
  )
}
