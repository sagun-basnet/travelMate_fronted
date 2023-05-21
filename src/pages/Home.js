import Homebody from "../components/home/MainContent";

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x2: window.innerWidth, transition: {duration: 0.1}}}
      // exit={{opacity: 0}}
    >
      <Homebody />
    </motion.div>
  );
}
