import React from "react";
import { motion } from "framer-motion";
import "./squareStyles.css";

export default function SquareApp() {
  return (
    <div className="App">
      <main
        className="layout"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 200 }}
          transition={{
            repeat: 2,
            type: "spring",
            repeatDelay: 1,
            repeatType: "mirror",
          }}
          className="box"
        />
      </main>
    </div>
  );
}
