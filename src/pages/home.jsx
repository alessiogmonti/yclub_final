import Landing from "./Home/landing"
import Video from "./Home/crowdfund"
import Tokenomics from "./Home/tokenomics"
import Join from "./Home/join"

import { Box, Show, Center} from "@chakra-ui/react"

import { Menu } from '../components/Menus/MainMenu'
import { DarkModeSwitch } from '../components/Global/DarkModeSwitch'

const Home = () => {
  //forward ref from video to landing
  return(
  <Box position={'absolute'}>
    <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
    <DarkModeSwitch />
{/* MOBILE */}
    <Show breakpoint='(max-width: 1113px)'>
      <Menu/>
      <Landing />
      <Show breakpoint="(max-height:400px)">
        <Box height={'50vh'} margin={'auto'} padding={10}/>
      </Show>
      <Video />
      <Tokenomics />
      <Show breakpoint="(max-height:400px)">
        <Box height={'190vh'} margin={'auto'} padding={10}/>
      </Show>
      <Join />
    </Show>
{/* WEB */}
    <Show breakpoint='(min-width: 1114px)'> 
        <Box width={'100vw'}>
        <Box position={'relative'} height={'100vh'}/>
      <Landing />
                  <Box height={'15vh'} margin={'auto'} padding={10}/>
      <Video />
          <Box height={'15vh'} margin={'auto'} padding={10}/>
                <Show breakpoint="(max-height:600px)">
                <Box height={'100vh'} margin={'auto'} padding={10}/>
                </Show>
      <Tokenomics />
          <Box height={'15vh'} margin={'auto'} padding={10}/>
                <Show breakpoint="(max-height:600px)">
                <Box height={'60vh'} margin={'auto'} padding={10}/>
                </Show>
      <Join />
      </Box>
    </Show>
  </Box>
)
}

export default Home