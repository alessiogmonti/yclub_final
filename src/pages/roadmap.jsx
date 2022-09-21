import { CTA } from "../components/Global/CTA"
import { Menu } from "../components/Menus/MainMenu"
import { DarkModeSwitch } from "../components/Global/DarkModeSwitch"
import { motion } from "framer-motion"
import { Box } from "@chakra-ui/react"
import { Accordions } from "../components/Global/accordion"

import "./Roadmap/style.css"

const Roadmap = () => (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Menu/>
        <DarkModeSwitch />
        <Box width={'99vw'} height={'100vh'} >
            <Accordions data={[...Array(5)]} />
        </Box>
        <CTA />
    </motion.div>
)

export default Roadmap