import logo from '../../assets/Home/Media/ylogo2.gif'
import { Flex, Stack, Box, Image, useColorModeValue } from "@chakra-ui/react"
// import Image from 'next/image'
import { Background } from '../../assets/Home/ellipse'

export const Logo = (props) => (
    <Box position='relative' height={'100%'}
        ml={4}
        mt={4} >
        <Media />
        <Flex position={'absolute'} top={9} right={props.right} style={{zIndex:0}} >
            <Background width={props.width} fill={useColorModeValue('rgba(255,255,255,0.5)', 'rgba(5,21,52,0.68)')} />
        </Flex>
    </Box>
)

const Media = () => (
    <Image 
        maxW={'600px'}
        width={'95%'}
        position={'relative'}
        src={logo} 
        style={{zIndex:1}}
    />
)
