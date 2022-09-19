import { IconButton, Box, SimpleGrid } from '@chakra-ui/react'
import { FaTwitter, FaTelegram, FaInstagram, FaMedium } from 'react-icons/fa'

export const Socials = () => (
    <Box height={"25%"} width={'60%'}
        bg={'dark'} borderColor={'accent'} borderWidth={'1px'} rounded={'50px'}>
        <SimpleGrid columns={2} spacingX={1} width={'100%'} height={'100%'}>
            <IconButton variant={'ghost'} color={'accent'} isRound size={'xl'} fontSize={'70px'} aria-label={'twitter'} icon={<FaTwitter />} />
            <IconButton variant={'ghost'} color={'accent'} isRound size={'xl'} fontSize={'70px'} aria-label={'telegram'}icon={<FaTelegram />} />
            <IconButton variant={'ghost'} color={'accent'} isRound size={'xl'} fontSize={'70px'} aria-label={'instagram'}icon={<FaInstagram />} />
            <IconButton variant={'ghost'} color={'accent'} isRound size={'xl'} fontSize={'70px'} aria-label={'medium'}icon={<FaMedium />} />
        </SimpleGrid>
    </Box>
)