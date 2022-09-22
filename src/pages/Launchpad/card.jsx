import { Image, Box, Flex, Spacer, useColorModeValue, Heading, Progress, Center, HStack, Text, Circle } from '@chakra-ui/react';

import { BuyButton } from "./buyButton";
import { Timeline } from "./timeline";

import { Ethereum } from "../../assets/Launchpad/ethereum"
import { Dollar } from "../../assets/Launchpad/dollar"
import lanaImg from '../../assets/Launchpad/Media/lana.png'


export const Card = () => (
    <>
        <Flex position={'absolute'} top={0} width={'100%'} px={1} gap={1}>
            <Box layerStyle={'button'} height={'100%'} px={3} >
                <Heading textAlign={'center'} color={'accent'}>
                    0.12 ETH
                </Heading>
            </Box>
            <Spacer/>
            <Box layerStyle={'button'} height={'100%'} px={3}>
                <Heading textAlign={'center'}>
                    RARE
                </Heading>
            </Box>
        </Flex>
        <Box width={'100%'} my={'55px'} alignItems={'center'} justifyContent={'center'}>
            <Image src={lanaImg} alt='Lana_arctic' borderRadius={'65px'} position={'relative'} style={{zIndex:2}}/>
            <Flex justifyContent={'center'} position={'relative'} style={{zIndex:0}} >
                <Box   
                    position={'relative'}
                    bg={useColorModeValue('rgba(255,255,255,0.5)', 'dark')} 
                    borderColor={'accent'} borderWidth={'1px'} width={"80vw"}
                    top={-100}
                    height={'22vh'}
                    borderRadius={'60px'} >
                        <Box position={'relative'} left={'10%'} height={'100%'} top={110} width={'80%'} alignItems={'center'} justifyContent={'center'} >
                            <Progress size={'xs'} 
                                value={30} 
                                bg={'light'} borderColor={'dark'} borderWidth={'0.5px'} 
                                _dark={{ bg:'dark', borderColor:'light'}}
                                colorScheme={'blue'} style={{zIndex:2}}/>
                            <HStack>
                                <Text> 30% </Text> 
                                <Spacer/>
                                <Text> 1158/500 </Text>
                            </HStack>
                            <HStack gap={1}>
                                <Text fontSize={'15px'}>
                                    PUBLIC MINT
                                </Text>
                                <Heading pl={1} color='accent' fontSize={'24px'}>
                                    12D 11H 12M
                                </Heading>
                            </HStack>
                        </Box>
                </Box>
            </Flex>
        </Box>
        <Box position={'absolute'} bottom={100}>
            {/* <Timeline /> */}
            <Flex width={'100%'} gap={'5'} ml={8}>
            {[...Array(4)].map( (d) => (
                <>
                <Circle size={9} bg={'white'} borderColor={'accent'} borderWidth={'1px'}/> 
                <Spacer />
                </>
            ))}
            </Flex>
        </Box>
        <Flex position={'absolute'} bottom={0} width={'100%'} px={1} gap={4}>
            <BuyButton
                available
                regular_text={'MINT'}
                position={'relative'}
                icon={<Ethereum
                    fill={useColorModeValue('rgba(5,21,52,0.99)', 'white')}
                    />} />
            <Spacer/>
            <BuyButton 
                available
                direction={'row-reverse'}
                regular_text={'CARD'}
                icon={<Dollar
                    fill={useColorModeValue('rgba(5,21,52,0.99)', 'white')}
                    />} />
        </Flex>
    </>
)
