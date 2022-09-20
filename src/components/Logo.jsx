import logo from '../assets/ylogo2.gif'
import { Flex, Stack, Box, Image, useColorModeValue } from "@chakra-ui/react"
// import Image from 'next/image'
import { Background } from '../assets/ellipse'

export const Logo = () => (
    <Box position='relative' height={'100%'}
        ml={4}
        mt={4}
        maxH={'100vh'} maxW={'91vw'}>
        <Media />
        <Flex position={'absolute'} top={8} left={1} style={{zIndex:0}} >
            <Background fill={useColorModeValue('rgba(255,255,255,0.5)', 'dark')} />
        </Flex>
    </Box>
)

const Media = () => (
    <Image 
        position={'relative'}
        // unoptimized={true}
        src={logo} 
        // layout={'responsive'}
        style={{zIndex:1}}
    />
)
