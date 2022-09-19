import { Box, Center, Text, Stack, Heading } from "@chakra-ui/react"
import { CustomButton } from "../assets/button"
import { FaCheckDouble } from "react-icons/fa"

export const SignUp = () => (
    <Box max-width={'50%'} pt={30} align={'center'}> 
        <Box layerStyle={'form'} position={'relative'} m={4}>
            <Center height={'100%'}>
                <Text variant={'form'}> name ... </Text>
            </Center>
        </Box>
        <Box layerStyle={'form'} position={'relative'} m={4}>
            <Center height={'100%'}>
                <Text variant={'form'}> email ... </Text>
            </Center>
        </Box>
        <CustomButton variant={'main-link'} regular_text={'SUBMIT'} icon={<FaCheckDouble fontSize={'33px'}/>} border={'2px solid white'} pad={'10px'} />
    </Box>
)