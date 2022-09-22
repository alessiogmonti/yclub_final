import { CTA } from "../components/Global/CTA"
import { Menu } from "../components/Menus/MainMenu"
import { DarkModeSwitch } from "../components/Global/DarkModeSwitch"
import { motion } from "framer-motion"
import { Box, HStack, Spacer, Flex} from "@chakra-ui/react"
import Swiper from "./Launchpad/swiper"

import { Heading, Center } from "@chakra-ui/react"

const Launchpad = () => (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
        <Menu/>
        <DarkModeSwitch />
        <Center width={'100vw'} position={'absolute'} alignItems={'center'} justifyContent={'center'}>
            <Heading variant={'Menu'} position={'relative'} top={14}
            fontSize={'35px'} letterSpacing={'3px'} fontWeight={700} color={'light'} >LANA SUPERYACHT</Heading>
        </Center>
        <Box width={'100vw'} height={'100vh'} >
            <Swiper />
        </Box>
    </motion.div>
)

export default Launchpad