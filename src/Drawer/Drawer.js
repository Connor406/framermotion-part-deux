import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Drawer({ isActive, setIsActive, children }) {
  return (
    <AnimatePresence>
      {isActive && (
        <>
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 250) setIsActive(false);
            }}
            className="drawer-wrapper"
          >
            <motion.div
              exit={{ opacity: 0.5, y: "110%" }}
              initial={{ opacity: 0.5, y: "110%" }}
              animate={{ opacity: 1, y: 100 }}
              transition={{
                damping: 19,
                type: "spring",
              }}
            >
              <div className="drawer">
                <button
                  className="drawer--close"
                  onClick={() => setIsActive(false)}
                >
                  X
                </button>
                {children}
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="drawer--background"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsActive(false)}
          />
        </>
      )}
    </AnimatePresence>
  );
}

export default Drawer;
