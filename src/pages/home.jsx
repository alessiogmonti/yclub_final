import Landing from "./Home/landing"
import Video from "./Home/crowdfund"
import Tokenomics from "./Home/tokenomics"
import Join from "./Home/join"

import { Box, Show, Center} from "@chakra-ui/react"

import { Menu } from '../components/Menus/MainMenu'
import { DarkModeSwitch } from '../components/Global/DarkModeSwitch'

const Home = () => (
  <Box position={'absolute'}>
    <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
    <DarkModeSwitch />

    <Show breakpoint='(max-width: 800px)'>
      <Menu/>
      <Landing />
      <Video />
      <Tokenomics />
      <Join />
    </Show>

    <Show breakpoint='(min-width: 801px)'>
      <Box width={'100vw'}>
      <Box position={'relative'} height={'100vh'}/>
      <Landing />
      <Video />
      <Tokenomics />
      <Join />
      </Box>
    </Show>
  </Box>
)

export default Home