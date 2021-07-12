import React from "react";
import { motion } from "framer-motion";

function Loader({ onClick }) {
  return (
    <motion.div layoutId="header" className="loading">
      <motion.h3 layoutId="logo">Tutorial</motion.h3>
      <motion.div 
				initial={{opacity: 0}} 
				animate={{opacity: 1}} 
				exit={{opacity: 0}} 
			>
        <p>Is loading...</p>
        <motion.div
          style={{
            background: "var(--primary)",
            height: 6,
            width: 100,
          }}
          initial={{ x: -100, y: 10 }}
          animate={{ x: 100, y: -3 }}
          transition={{
            flip: Infinity,
            duration: 1,
          }}
        />
        <motion.div
          style={{
            background: "var(--danger)",
            height: 8,
            width: 20,
          }}
          initial={{ x: -170, y: -6 }}
          animate={{ x: 170, y: 8 }}
          transition={{
            flip: Infinity,
            duration: 1.2,
          }}
        />
        <motion.div
          style={{
            background: "var(--yellow)",
            height: 4,
            width: 200,
          }}
          initial={{ x: -80, y: 5 }}
          animate={{ x: 80, y: -30 }}
          transition={{
            flip: Infinity,
            duration: 1.4,
          }}
        />
        <button onClick={onClick}>click me</button>
      </motion.div>
    </motion.div>
  );
}

export default Loader;
