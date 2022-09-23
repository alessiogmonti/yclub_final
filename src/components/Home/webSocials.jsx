import { useColorMode, IconButton, Box, VisuallyHidden, Stack, chakra, useColorModeValue, Flex } from '@chakra-ui/react'
import { FaTelegram, FaTwitter, FaInstagram, FaMedium } from 'react-icons/fa';

const socialLinks = [ <FaTwitter/>, <FaTelegram/>, <FaInstagram/>, <FaMedium/> ]

export const Socials = () => (
    <Box layerStyle={'button'} width={'auto'} height={'auto'} px={3} py={1} m={5}>
        <Stack direction={'row'} spacing={3} verticalAlign={'center'} zIndex={5}>
            {socialLinks.map(
                (d, idx) => 
                <IconButton key={idx} fontSize={'20px'} size={'sm'} variant={'ghost'} rounded={'full'} href={'#'} color={'#2491EB'} icon={d} />
                )
            }
        </Stack>
    </Box>
)