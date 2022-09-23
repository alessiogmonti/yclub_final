import { Box, HStack, IconButton, Text } from "@chakra-ui/react"
import { Email } from "./email"

export const WebSignup = () => (
    <>
        <HStack width={'30vw'}>
            <Box layerStyle={'button'} width={'50%'} height={'auto'}>
                <Text variant={'main-link'} fontSize={'25px'} px={2}>
                    name...
                </Text>
            </Box>

            <Box layerStyle={'button'} width={'50%'} height={'auto'}>
                <HStack justifyContent={'space-between'}>
                <Text variant={'main-link'} fontSize={'25px'} textAlign={'center'} px={2}>
                    email...
                </Text>
                <IconButton variant={'ghost'} icon={<Email />} rounded={'full'} zIndex={1}/>
                </HStack>
            </Box>
        </HStack>
    </>
)