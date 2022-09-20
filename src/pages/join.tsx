import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Socials } from '../components/Socials'
import { SignUp } from '../components/Signup'

const Join = () => (
  <Container height="100vh" width={'100vw'} position={'relative'}>
    <Hero title={'JOIN'} subtitle={'THE CLUB'}/>
    <Socials />
    <SignUp/>
  </Container>
)

export default Join
