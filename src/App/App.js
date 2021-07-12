import React, { useState } from "react";
import AbstractionApp from "../Animations/AbstractionApp";
import DragApp from "../Drag&Drop/DragApp";
import DrawerApp from "../Drawer/DrawerApp";
import GridApp from "../Grid/GridApp";
import ModalApp from "../Modal/ModalApp";
import RouterApp from "../Router/RouterApp";
import "./styles.css";

export default function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      {/* <AbstractionApp /> */}
      {/* <GridApp /> */}
      {/* <DrawerApp /> */}
      {/* <DragApp /> */}
      {/* <ModalApp /> */}
      <RouterApp />
    </div>
  );
}
