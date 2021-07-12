import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Loader from "../Animations/Loader";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

import "./gridStyles.css";

export default function GridApp() {
  const { y } = useWindowScrollPosition({
    throttle: 500,
  });
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <AnimateSharedLayout>
        <main className="layout">
          <motion.header layoutId="header">
            <motion.h1 layoutId="logo" className="fake-logo">
              Tutorial
            </motion.h1>
            <button onClick={() => setIsLoading(true)}>click me</button>
          </motion.header>
          <AnimatePresence>
            {isLoading && <Loader onClick={() => setIsLoading(false)} />}
          </AnimatePresence>
          <h3>Grid Gallery</h3>
          <div className="grid gallery">
            {images.map((image, index) => (
              <img
                style={{
                  cursor: "pointer",
                }}
                src={`https://picsum.photos/seed/${image}/500/300`}
                alt="placeholder"
              />
            ))}
          </div>
        </main>
      </AnimateSharedLayout>
    </div>
  );
}

const images = ["1000", "1001", "1002", "1003", "1004", "1005", "1006", "1008"];
