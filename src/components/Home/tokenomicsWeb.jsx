import { Allocations } from "../../assets/Home/tokenallocation_web"
import { Container } from "./Container"
import { Box, Heading, VStack, Flex, useColorModeValue } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"

const TokenomicsWeb = () => {
    const ref = useRef(null)
    // const [hover, setHover ] = useState(false)
    // useEffect( () => {
    //     const paths = ref.current.querySelectorAll("g")
    //     console.log(paths)
    //     paths.forEach(d => d.setAttribute('class','hasStroke'))
    // }, [hover])
    return (
    <Container width={'100vw'} mx={20} my={20} height={'100vh'}>
        <Flex>
        <Box>
            <VStack align={'left'} spacing={10}>
                <Heading variant="Landing" fontSize={["60px","70px","80px","70px","90px"]} color={'light'} lineHeight={["60px","70px","100px"]}>
                $SYC <br/> TOKENOMICS
                </Heading>
                <Box>
                    <Heading variant="SubText">
                    MAXIMUM SUPPLY
                    </Heading>
                    <Heading variant="special">
                    1 000 000 000
                    </Heading>
                </Box>
                <Box>
                    <Heading variant="SubText">
                    INITIAL SUPPLY
                    </Heading>
                    <Heading variant="special">
                    117 200 000
                    </Heading>
                </Box>
                <Heading variant="Landing" color={'light'} pt={100}>
                0% TAX
                </Heading>
            </VStack>
        </Box>
        <Box display={'flex'} justifyContent={'flex-end'} >
            <Box position={[null,null,'relative','absolute']} right={0} mr={20}>
                <Allocations width={"800"} fill={useColorModeValue('rgba(255,255,255,0.8)', 'dark')} ref={ref}/>
            </Box>
        </Box>
        </Flex>
    </Container>
    )
}

export default TokenomicsWeb