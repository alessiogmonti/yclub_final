import { Menu } from "../../components/Menus/MainMenu"
import { DarkModeSwitch } from "../../components/Global/DarkModeSwitch"
import { motion } from "framer-motion"
import { Box } from "@chakra-ui/react"
import "./web_swiper.css"
import WebSwiper from "./webSwiper"

import { Heading, Center } from "@chakra-ui/react"

export const WebLaunchpad = (props) => (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
        <DarkModeSwitch />
        <Box position={'absolute'} width={'100vw'} right={"-48%"}>
            <Box display={'flex'} width={'100%'} height={'100vh'} >
                <WebSwiper data={props.data} />
            </Box>
        </Box>
    </motion.div>
)