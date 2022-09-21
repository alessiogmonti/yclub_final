import { Hero } from '../../components/Global/Hero'
import { Container } from '../../components/Home/Container'
import { Socials } from '../../components/Home/Socials'
import { SignUp } from '../../components/Home/Signup'
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
