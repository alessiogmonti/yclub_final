import "./style.css"
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {useSwipeable } from "react-swipeable"
import { Card } from "./card"

function Swiper(children) {
  const [position, positionSet] = useState(0)
  const boxes = [...Array(5)]
  const handlers = useSwipeable({ 
      onSwipedLeft: () => position < boxes.length-1 ? positionSet(position+1) : null,
      onSwipedRight: () => position > 0 ? positionSet(position-1) : null })

  return (
    <div {...handlers} className="App">
      <div className="row">
        {boxes.map( (d,index) => (
            <motion.div className="container"
                initial={{scale: 0, rotation: -180}}
                animate={{rotate: 0,
                    scale: index === position ? 1 : 0.5,
                    left: `${(index - position) * 90 - 45}vw`}}
                transition={{type:'spring', stiffness:260, damping:20}}
            >
                <Card />
            </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Swiper;
