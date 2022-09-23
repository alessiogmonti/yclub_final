import { HStack, VStack, Heading, Text, Divider, Box } from "@chakra-ui/react";
import { Container } from "./Container";
import { Yacht } from "../../assets/Home/Media/yacht";
import { WebSignup } from "../../assets/Home/webSignup";

export const WebJoin = () => (
    <Container width={'100vw'} px={20} py={10} height={'100vh'} mb={0} >
        <VStack spacing={'50px'} alignItems={'left'} width={'100%'} >
            <HStack justifyContent={'space-between'} alignItems={'top'}>
                <Heading variant="info">
                    UNLOCK UNIQUE EXPERIENCES
                </Heading>
                <Text variant="info" textAlign={'right'}>
                    in the metaverse <br/> and on superyachts
                </Text>
            </HStack>
            <Divider width={'25%'}/>
            <HStack justifyContent={'space-between'} alignItems={'top'}>
                <Heading variant="info">
                    ACCESS UNFATHOMABLE <br/> WORLDS OF LUXURY
                </Heading>
                <Text variant="info" textAlign={'right'}>
                    connect with a-listers <br/> in the super yacht <br/> & blockchain industries
                </Text>
            </HStack>
            <Divider left={'50%'} width={'50%'} position={'relative'}/>
            <VStack>
                <HStack alignItems={'top'} width={'100%'} justifyContent={'space-between'}>
                    <Heading variant="special" fontWeight={700}>
                        JOIN THE YACHT CLUB
                    </Heading>
                    <Text variant="info" textAlign={'right'} >
                        earn passively and <br/>support our oceans
                    </Text>
                </HStack>
                <Divider width={'35%'}/>
                <Box display={'flex'} justifyContent={'flex-end'}>
                    <Box position={'absolute'} width={'30%'} left={"5%"} bottom={100}>
                        <WebSignup />
                    </Box>
                    <Box position={'absolute'} right={-10}>
                        <Yacht />
                    </Box>
                </Box>
            </VStack>
        </VStack>
    </Container>
)