import { Box, Center, Text, Stack, Heading, useColorModeValue } from "@chakra-ui/react"
import { CustomButton } from "../../assets/button"
import { FaCheckDouble } from "react-icons/fa"
import FormManager from "../utils/form"

export const SignUp = () => (
    <Box max-width={'50%'} pt={50} align={'center'}> 
        <FormManager CTA_reg={'SUBMIT'} CTA_icon={<FaCheckDouble color={useColorModeValue('rgba(5,21,52,0.99)', 'white')} fontSize={'31px'}/>} 
            top={0} right={0} border={`3px solid ${useColorModeValue('rgba(5,21,52,0.99)', 'white')}`} pad={'10px'}
        />
    </Box>
)