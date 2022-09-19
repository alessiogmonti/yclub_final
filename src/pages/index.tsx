import { Container } from "../components/Container"
import Landing from "./landing"
import Video from "./crowdfund"
import Tokenomics from "./tokenomics"
import Join from "./join"
import { Box } from "@chakra-ui/react"
import { Menu } from '../components/Menus/MainMenu'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

const Index = () => (
  <Box height={'100%'} bg="conic-gradient(from 225deg at 57% 50%, #051534 -10deg, #07425E 145deg, #09768E 160deg, #051534 350deg, #07425E 454.48deg);">
    <Menu/>
    <DarkModeSwitch />
    <Landing />
    <Video />
    <Tokenomics />
    <Join />
  </Box>
)

export default Index
