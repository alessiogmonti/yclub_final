import { Center, Container, Box, Text, VStack, Flex, Heading } from "@chakra-ui/react";
import { CTA } from "../Global/CTA";
import { Logo } from "./Logo";


export const WebLanding = () => (
    <>
        <Box ml={"10%"} px={10}>
            <Box height={'100vh'}>
                <Flex position={'relative'} top={"15%"} width={'60vw'} left={0}>
                    <VStack position={'absolute'} zIndex={2} left={-120} top={150}>
                        <Box layerStyle={'button'} width={'auto'} height={'auto'} px={10}>
                            <Text> Mint </Text>
                        </Box>
                        <Box layerStyle={'button'} width={'auto'} height={'auto'} px={10}>
                            <Text> Team </Text>
                        </Box>
                        <Box layerStyle={'button'} width={'auto'} height={'auto'} px={10}>
                            <Text> Roadmap </Text>
                        </Box>
                    </VStack>
                    <Logo right={200} width={"50vw"}/>
                    <Box position={'absolute'} right={-250} top={100}>
                        <Heading variant={"WebLanding"}>
                            YCLUB
                        </Heading>
                        <Heading position={'relative'} float={'right'} variant={"Landing"} color={'light'} fontSize={'50px'} letterSpacing={"5px"}>
                            Token Launch
                        </Heading>
                    </Box>
                </Flex>
            </Box>
        </Box>       
        <CTA />
    </>
)