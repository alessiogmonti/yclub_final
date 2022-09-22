import "./style.css"
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {useSwipeable } from "react-swipeable"

import { Box,  Flex, Circle, Spacer} from "@chakra-ui/react"

import { Card } from "./card"

function Swiper(props) {
  const [position, positionSet] = useState(2)
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
                <Card {...d}/>
            </motion.div>
        ))}
      </div>
      <Box position={'absolute'} bottom={'15%'}>
            <Flex width={'100%'} gap={1} verticalAlign={'center'} justifyContent={'center'} align={'center'}>
            {[...Array(props.data.length)].map( (d, index) => (
                <>
                { position==index ? <Circle size={8} bg={'light'} borderColor={'accent'} borderWidth={'1px'}/> :
                <Circle size={5} bg={'dark'} borderColor={'light'} borderWidth={'1px'}/> }
                <Spacer />
                </>
            ))}
            </Flex>
        </Box>
    </div>
  );
}

export default Swiper;
