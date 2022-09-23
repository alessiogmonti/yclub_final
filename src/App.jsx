import { Show, Box, Flex, VStack, Text, HStack, IconButton, useBoolean } from "@chakra-ui/react"
import { BrowserRouter, Link } from "react-router-dom"
import {MobileAnimatedRoutes, WebAnimatedRoutes} from './components/utils/animatedRoutes'
import { Logo } from "./components/Home/Logo"
import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai"
import { FaLaptopHouse } from "react-icons/fa"

const App = () => (
  <>
    <Show breakpoint='(max-width: 800px)'>
      <BrowserRouter>
        <MobileAnimatedRoutes />
      </BrowserRouter>
    </Show>


    <Show breakpoint='(min-width: 801px)'>
      <BrowserRouter>
        <Box display={'flex'} height={'100vh'}>
          <Landing />
          <WebAnimatedRoutes />
        </Box>
      </BrowserRouter>
    </Show>

  </>
)

const Landing = () => {
  const [launchpad, setLaunchpad] = useBoolean(false)
  const [team, setTeam] = useBoolean(false)
  const [roadmap, setRoadmap] = useBoolean(FaLaptopHouse)

  return(
  <Box ml={"10%"} px={10} display={'flex'}>
    <Box height={'100vh'}>
        <Flex position={'relative'} top={"15%"} width={'60vw'} left={0}>
            <VStack position={'absolute'} zIndex={2} left={-120} top={150} alignItems={'left'}>
                <Box layerStyle={'button'} width={'auto'} height={'auto'} pl={2.5}>
                    <Link to={launchpad ? '/' : '/launchpad'} onClick={setLaunchpad.toggle}>
                      <HStack justifyContent={'space-between'}>
                        <Text variant={'webmenu'}> launchpad </Text>
                        <IconButton variant={'ghost'} icon={launchpad? <AiOutlineLeftCircle/> : <AiOutlineRightCircle/>} rounded={'full'} zIndex={1} fontSize={"40px"}/>
                      </HStack>
                    </Link>
                </Box>
                <Box layerStyle={'button'} width={'auto'} height={'auto'} pl={2.5}>
                  <Link to={roadmap ? '/' : '/roadmap'} onClick={setRoadmap.toggle}>
                    <HStack justifyContent={'space-between'}>
                      <Text variant={'webmenu'}> roadmap </Text>
                      <IconButton variant={'ghost'} icon={roadmap? <AiOutlineLeftCircle/> : <AiOutlineRightCircle/>} rounded={'full'} zIndex={1} fontSize={"40px"}/>
                    </HStack>
                  </Link>
                </Box>
                <Box layerStyle={'button'} width={'auto'} height={'auto'} pl={2.5}>
                  <Link to={team? '/' : '/team'} onClick={setTeam.toggle}>
                    <HStack justifyContent={'space-between'}>
                      <Text variant={'webmenu'}> team </Text>
                      <IconButton variant={'ghost'} icon={team? <AiOutlineLeftCircle/> : <AiOutlineRightCircle/>} rounded={'full'} zIndex={1} fontSize={"40px"}/>
                    </HStack>
                  </Link>
                </Box>
            </VStack>
            <Logo right={200} width={"50vw"}/>
          </Flex>
    </Box>
  </Box>
)}

export default App