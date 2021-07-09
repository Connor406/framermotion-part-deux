import React, { useState } from "react";
import AbstractionApp from './AbstractionApp'
import GridApp from "./GridApp";
import "./styles.css";

export default function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      {/* <AbstractionApp/> */}
      <GridApp/>
    </div>
  );
}
