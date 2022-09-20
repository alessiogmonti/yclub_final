import Landing from "./Home/landing"
import Video from "./Home/crowdfund"
import Tokenomics from "./Home/tokenomics"
import Join from "./Home/join"

import { Box } from "@chakra-ui/react"

import { Menu } from '../components/Menus/MainMenu'
import { DarkModeSwitch } from '../components/Global/DarkModeSwitch'

const Home = () => (
  <>
    <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
      <Menu/>
      <DarkModeSwitch />
      <Landing />
      <Video />
      <Tokenomics />
      <Join />
  </>
)

export default Home