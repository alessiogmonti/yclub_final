import "./style.css"
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {useSwipeable } from "react-swipeable"
import { Card } from "./card"

function Swiper(props) {
  const [position, positionSet] = useState(0)
  const handlers = useSwipeable({ 
      onSwipedLeft: () => position < props.data.length-1 ? positionSet(position+1) : null,
      onSwipedRight: () => position > 0 ? positionSet(position-1) : null })

  return (
    <div {...handlers} className="App">
      <div className="row">
        {props.data.map( (d,index) => (
            <motion.div className="container"
                initial={{scale: 0, rotation: -180}}
                animate={{rotate: 0,
                    scale: index === position ? 1 : 0.5,
                    left: `${(index - position) * 90 - 45}vw`}}
                transition={{type:'spring', stiffness:260, damping:20}}
            >
                <Card {...d} index={index} amt={props.data.length}/>
            </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Swiper;
