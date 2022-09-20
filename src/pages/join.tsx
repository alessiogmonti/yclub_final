import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Socials } from '../components/Socials'
import { SignUp } from '../components/Signup'
import { Divider } from '@chakra-ui/react'

const Join = () => (
  <Container height="100vh" width={'100vw'} position={'relative'}>
    <Hero title={'JOIN'} subtitle={'THE CLUB'}/>
    <Socials />
    <SignUp/>
    <Divider my={5} width={'50%'}/>
  </Container>
)

export default Join
