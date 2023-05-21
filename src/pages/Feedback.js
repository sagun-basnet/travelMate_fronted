import React from 'react'
import FeedbackContent from '../components/feedback/FeedbackContent';
import { motion } from 'framer-motion';

export default function Feedback() {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <FeedbackContent/>
    </motion.div>
  )
}
