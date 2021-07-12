import React, { useState } from "react";
// import AbstractionApp from "../Animations/AbstractionApp";
// import DragApp from "../Drag&Drop/DragApp";
import DrawerApp from "../Drawer/DrawerApp";
// import GridApp from "../Grid/GridApp";
// import ModalApp from "../Modal/ModalApp";
// import RouterApp from "../Router/RouterApp";
// import SquareApp from "../RepeatAnimations/SquareApp";
// import CountdownApp from "../Countdown/CountdownApp";

export default function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      {/* <AbstractionApp /> */}
      {/* <GridApp /> */}
      <DrawerApp />
      {/* <DragApp /> */}
      {/* <ModalApp /> */}
      {/* <RouterApp /> */}
      {/* <SquareApp /> */}
      {/* <CountdownApp /> */}
    </div>
  );
}
