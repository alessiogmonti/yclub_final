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
            <Background />
        </Flex>
    </Box>
)

const Media = () => (
    <Image src={'/ylogo2.gif'} 
        layout={'responsive'}
        style={{zIndex:2}}
    />
)
