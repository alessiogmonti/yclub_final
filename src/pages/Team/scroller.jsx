import "./style.css";
import { motion } from "framer-motion";
import { Box, Center, Flex } from "@chakra-ui/react"
import { useRef, forwardRef, useState} from "react";
import { Accordion } from "../../components/Global/accordion";

const cardVariants = {
  offscreen: {
    y: 10,
    scale: 0.5,
    opacity: 0.5
  },
  onscreen: {
    y: 50,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 0.4
    }
  }
};

const Card = forwardRef(({contents}, ref) => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.3, 
        margin: "-150px 0px -150px 0px",
        root: ref
     }}
    >
      <motion.div className="card" variants={cardVariants} key={contents.i} style={{overflow: 'scroll'}}>
        {contents}
      </motion.div>
    </motion.div>
  );
})

const items = [
    0,1,2,3,4
];

export const Scroller = () => {
    const [expanded, setExpanded] = useState()
    const container = useRef(null)
    return (
    <Box width={'90vw'} ml={'5%'} mt={'20%'} p={5} height={'80vh'} border={'1px solid white'} borderRadius={'20px'} ref={container} style={{ overflow: "scroll" }}>
        {items.map((d, i) => (
        <Card contents={<Accordion i={i} expanded={expanded} setExpanded={setExpanded} />} key={i} ref={container} />))}
    </Box>
    )
}