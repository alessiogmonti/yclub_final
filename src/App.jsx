import { Container } from "./components/Container"
import Landing from "./pages/landing"
import Video from "./pages/crowdfund"
import Tokenomics from "./pages/tokenomics"
import Join from "./pages/join"
import { Box, Center } from "@chakra-ui/react"
import { Menu } from './components/Menus/MainMenu'
import { DarkModeSwitch } from './components/DarkModeSwitch'

const App = () => (
  <Center max-width={'400px'}>
    <Box>
      <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
      <Menu/>
      <DarkModeSwitch />
      <Landing />
      <Video />
      <Tokenomics />
      <Join />
    </Box>
  </Center>
)

export default App