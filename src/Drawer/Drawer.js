import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Drawer({ children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 250) setIsActive(false);
          if (info.offset.y < -250) setIsActive(true);
        }}
        className="drawer-wrapper"
      >
        <motion.div
          style={{ pointerEvents: "all" }}
          animate={{ opacity: 1, y: isActive ? 100 : "80vh" }}
          transition={{
            damping: 19,
            type: "spring",
          }}
        >
          <div className="drawer">{children}</div>
        </motion.div>
      </motion.div>
      <motion.div
        className="drawer--background"
        animate={{ opacity: isActive ? 1 : 0 }}
        onClick={() => setIsActive(false)}
      />
    </>
  );
}

export default Drawer;
