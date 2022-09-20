import { Box, Center, Text, Stack, Heading } from "@chakra-ui/react"
import { CustomButton } from "../assets/button"
import { FaCheckDouble } from "react-icons/fa"
import FormManager from "./utils/form"

export const SignUp = () => (
    <Box max-width={'50%'} pt={50} align={'center'}> 
        <FormManager CTA_reg={'SUBMIT'} CTA_icon={<FaCheckDouble fontSize={'33px'}/>} 
            top={0} right={0} border={'2px solid white'} pad={'10px'}
        />
    </Box>
)