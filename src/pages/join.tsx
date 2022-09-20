import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Socials } from '../components/Socials'
import { SignUp } from '../components/Signup'

const Join = () => (
  //bg="conic-gradient(from 225deg at 57% 50%, #051534 -10deg, #07425E 145deg, #09768E 160deg, #051534 350deg, #07425E 454.48deg);"
  <Container height="100vh" width={'100vw'} maxWidth={'100%'} position={'relative'}>
    <Hero title={'JOIN'} subtitle={'THE CLUB'}/>
    <Socials />
    <SignUp/>
  </Container>
)

export default Join
