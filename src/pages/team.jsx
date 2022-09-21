import { CTA } from "../components/Global/CTA"
import { Menu } from "../components/Menus/MainMenu"
import { DarkModeSwitch } from "../components/Global/DarkModeSwitch"
import { motion } from "framer-motion"
import { Box } from "@chakra-ui/react"
import { Scroller } from "./Team/scroller"
const Team = () => (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Menu/>
        <DarkModeSwitch />
        <Box width={'99vw'} height={'90vh'} border={'1px solid black'}>
            <Scroller />
        </Box>
        <CTA />
    </motion.div>
)

export default Team