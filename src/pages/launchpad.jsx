import { CTA } from "../components/Global/CTA"
import { Menu } from "../components/Menus/MainMenu"
import { DarkModeSwitch } from "../components/Global/DarkModeSwitch"
import { motion } from "framer-motion"
import { Box, HStack, Spacer, Flex} from "@chakra-ui/react"
import Swiper from "./Launchpad/swiper"

import { Heading, Center } from "@chakra-ui/react"

const data = [
    {price: '1.5', rarity:'LEGENDARY', stock:100, stock_num:150, stock_amt:150, access:'whitelist', time:'SOLD OUT', active:false},
    {price: '0.12', rarity:'RARE', stock:100, stock_num:5000, stock_amt:5000, access:'whitelist', time:'SOLD OUT', active:false},
    {price: '0.12', rarity:'RARE', stock:23, stock_num:1159, stock_amt:5000, access:'public mint', time:'7D 09H 11M', active:true},
    {price: '0.39', rarity: 'EPIC', stock:false, stock_num: 650, stock_amt:650, access:'whitelist', time: 'OCTOBER', active:false},
    {price: '0.28', rarity: 'S.RARE', stock:false, stock_num: 1200, stock_amt:1200, access:'whitelist', time: 'NOVEMBER', active:false},
]

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
            <Swiper data={data} />
        </Box>
    </motion.div>
)

export default Launchpad