import { Show, Box, Flex, VStack, Text, HStack, IconButton, useBoolean } from "@chakra-ui/react"
import { BrowserRouter, Link } from "react-router-dom"
import {MobileAnimatedRoutes, WebAnimatedRoutes} from './components/utils/animatedRoutes'
import { LandingLogo } from "./components/landingLogo"

const App = () => (
  <>
    <Show breakpoint='(max-width: 1113px)'>
      <BrowserRouter>
        <MobileAnimatedRoutes />
      </BrowserRouter>
    </Show>


    <Show breakpoint='(min-width: 1114px)'>
      <BrowserRouter>
        <Box display={'flex'} height={'100vh'}>
          <LandingLogo />
          <WebAnimatedRoutes />
        </Box>
      </BrowserRouter>
    </Show>

  </>
)

export default App