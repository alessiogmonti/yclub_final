import { HStack, VStack, Heading, Text, Divider, Box, Spacer } from "@chakra-ui/react";
import { Container } from "./Container";
import { Yacht } from "../../assets/Home/Media/yacht";
import { WebSignup } from "../../assets/Home/webSignup";
import FormManager from "../utils/form";
import { Email } from "../../assets/Home/email";

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
            <VStack alignItems={'flex-start'}>
                <HStack alignItems={'top'} width={'100%'} justifyContent={'space-between'}>
                    <Heading variant="special" fontWeight={700}>
                        JOIN THE YACHT CLUB
                    </Heading>
                    <Text variant="info" textAlign={'right'} >
                        earn passively and <br/> support our oceans
                    </Text>
                </HStack>
                <Divider width={'35%'}/>
                <Spacer />
                <Box position={'absolute'} width={'20%'} right={10} bottom={-50} p={5} mr={10} rounded={'lg'} borderWidth={"1px"} borderColor={'accent'} bg={'light'} _dark={{bg:'dark'}} zIndex={1} my={10}>
                    <FormManager CTA_accent={'EMAIL'} CTA_reg={'ME'} CTA_icon={<Email/>} buttonWidth={'17vw'}/>
                </Box>
                <Box display={'flex'} justifyContent={'flex-end'}>
                    <Box position={'absolute'} left={"-150px"}>
                        <Yacht/>
                    </Box>
                </Box>
            </VStack>
        </VStack>
    </Container>
)