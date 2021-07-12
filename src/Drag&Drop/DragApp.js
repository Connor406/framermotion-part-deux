import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { usePositionReorder } from "./usePositionReorder";
import { useMeasurePosition } from "./useMeasurePosition";
import "./dragStyles.css";

export default function DragApp() {
  const [order, updatePosition, updateOrder] = usePositionReorder(posts); // takes array of stuff to drag
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>
      <div className="layout">
        <h3>List of stuff</h3>
        {order.map((post, i) => (
          <DragItem
            updateOrder={updateOrder}
            updatePosition={updatePosition}
            post={post}
            key={post}
            i={i}
          />
        ))}
      </div>
    </div>
  );
}

function DragItem({ post, updateOrder, updatePosition, i }) {
  const [isDragging, setIsDragging] = useState(false);

  const ref = useMeasurePosition((pos) => {
    updatePosition(i, pos);
  });

  const y = useMotionValue();

  return (
    <div>
      <motion.div
        drag="y"
        layout
        ref={ref}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={1}
        key={post}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onViewportBoxUpdate={(_, delta) => {
          if (isDragging) {
            updateOrder(i, delta.y.translate);
          }
          y.set(delta.y.translate);
        }}
        animate={{
          scale: isDragging ? 1.05 : 1,
        }}
      >
        <h4>Handle</h4>
      </motion.div>
      <motion.div style={{ y }} className="card">
        <h4>List Item {post}</h4>
        <p>this is inside the card</p>
      </motion.div>
    </div>
  );
}

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];
