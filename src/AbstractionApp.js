import React, { useState } from "react";
import {motion} from 'framer-motion'
import Fade from './Fade'
import Slide from './Slide'
import "./styles.css";

export default function AbstractionApp() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>
      <main className="layout">
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
        <motion.div layout className='card' >
          <motion.h3 layout >Post one</motion.h3>
          {isToggled && (
            <p>
              Put a bird on it live-edge vice laborum eiusmod street art lorem
              officia. Gastropub kitsch synth exercitation tousled shabby chic
              portland. IPhone godard migas messenger bag. Slow-carb authentic
              pug fanny pack disrupt. Ut qui chambray esse flannel mixtape ut
              knausgaard tempor art party kitsch paleo. Adipisicing offal deep v
              celiac, mustache yuccie tbh laborum kombucha bespoke. Selfies
              synth bushwick, street art ut flannel vaporware kitsch health goth
              pour-over chia tbh swag seitan squid.
            </p>
          )}
        </motion.div>
      </main>
    </div>
  );
}


/*        <Slide isActive={isToggled} >
            <div className="card">
              <h4>Post Number one</h4>
              <p>this is inside the card</p>
            </div>
        </Slide>
        {/* Cooler/more fun Slide 
        <Slide direction={-1} distance={1000} isActive={isToggled} >
            <div className="card">
              <h4>Post Number one</h4>
              <p>this is inside the card</p>
            </div>
        </Slide> */