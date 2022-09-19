import { Flex, Stack, Box } from "@chakra-ui/react"
import Image from 'next/image'
import { Background } from '../assets/ellipse'

export const Logo = () => (
    <Box position='relative' height={'100%'}
        ml={4}
        mt={4}
        maxH={'100vh'} maxW={'91vw'}>
        <Media />
        <Flex position={'absolute'} top={8} left={1}>
            <Background style={{zIndex:1}} />
        </Flex>
    </Box>
)

const Media = () => (
    <img src={'/ylogo2.gif'} 
        width={'100%'}
        height={'100%'}
        layout={'responsive'}
        style={{position:'relative',zIndex:3}}
        priority
    />
)
