import logo from '../assets/ylogo2.gif'
import { Flex, Stack, Box, Image, useColorModeValue } from "@chakra-ui/react"
// import Image from 'next/image'
import { Background } from '../assets/ellipse'

export const Logo = () => (
    <Box position='relative' height={'100%'}
        ml={4}
        mt={4} >
        <Media />
        <Flex position={'absolute'} top={9} left={0} style={{zIndex:0}} >
            <Background fill={useColorModeValue('rgba(255,255,255,0.5)', 'dark')} />
        </Flex>
    </Box>
)

const Media = () => (
    <Image 
        maxW={'500px'}
        width={'95%'}
        position={'relative'}
        src={logo} 
        style={{zIndex:1}}
    />
)
