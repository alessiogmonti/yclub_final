import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { CTA } from '../components/CTA'
import { Logo } from '../components/Logo'
import { Box } from '@chakra-ui/react'

const Landing = () => (
  //bg="conic-gradient(from 225deg at 57% 50%, #051534 -10deg, #07425E 145deg, #09768E 160deg, #051534 350deg, #07425E 454.48deg);"
  <Container height="100vh" >
    <Hero subwidth={'50%'} />
    <Box height={"100vh"} width={'100vw'} mt={50}>
      <Logo />
    </Box>
    <CTA />
  </Container>
)

export default Landing
