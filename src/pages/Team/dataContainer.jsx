import {List, ListItem, ListIcon, Divider, Box, Text, HStack, Circle, Spacer, Center, VStack, Container} from "@chakra-ui/react"
import { AiOutlineCheckCircle, AiOutlineNodeIndex} from "react-icons/ai"

export const DataContainer = (props) => {
    return (
        <Box px={1} pb={5} transformOrigin={'top center'}>
            <Text fontWeight={'700'} position={'relative'} left={190} mb={4}> FullName </Text>
            <Container>
                <Circle size={20} float={'left'} mr={3} display={'inline-flex'} bg={'light'} position={'relative'} borderWidth={'1px'} borderColor={'accent'}  />
                <Text variant={'main-link'} fontFamily={'Helvetica'} fontSize={'15px'} lineHeight={'24px'} >
                    {props.bio}
                </Text>
            </Container>
            <HStack mt={5} alignItems={'center'} justifyContent={'center'}>
                <Circle size={10} bg={'accent'}/>
                <Circle size={10} bg={'accent'}/>
                <Circle size={10} bg={'accent'}/>
            </HStack>
        </Box>
    )  
} 