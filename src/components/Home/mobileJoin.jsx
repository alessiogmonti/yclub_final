import { Hero } from '../Global/Hero'
import { Container } from './Container'
import { Socials } from './Socials'
import { SignUp } from './Signup'
import { Divider, Box, Show } from '@chakra-ui/react'

export const MobileJoin = () => (
    <Container height="100vh" width={'100vw'} position={'relative'} gap={[null, "10%"]} direction={'column'}>
        <Hero title={'JOIN'} subtitle={'THE CLUB'}/>
        <Socials />
        <SignUp/>
        <Divider my={5} width={'50%'}/>
        <Show breakpoint="(max-height:400px)">
            <Box height={'20vh'} margin={'auto'}/>
        </Show>
    </Container>
)