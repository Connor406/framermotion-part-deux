import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useInterval from "@use-it/interval";
import Confetti from "react-confetti";
import "./countdownStyles.css";

export default function CountdownApp() {
  const [count, setCount] = useState(10);
  const [isComplete, setIsComplete] = useState(false);

  useInterval(() => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      setIsComplete(true);
    });
  }, 1000);

  return (
    <div className="App">
      {isComplete && <Confetti />}
      <AnimatePresence>
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          exit={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, position: "absolute" }}
          key={count}
        >
          {count}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
