import { Hero } from '../../components/Global/Hero'
import { Container } from '../../components/Home/Container'
import { CTA } from '../../components/Global/CTA'
import { Logo } from '../../components/Home/Logo'
import { Box,Divider } from '@chakra-ui/react'

const Landing = () => (
  //bg="conic-gradient(from 225deg at 57% 50%, #051534 -10deg, #07425E 145deg, #09768E 160deg, #051534 350deg, #07425E 454.48deg);"
  <Container height="100vh" >
    <Hero subwidth={'100%'} />
    <Box height={"100vh"} width={'100vw'} mt={50}>
      <Logo />
    </Box>
    <Divider my={2} mb={10} width={'50%'}/>
    <CTA />
  </Container>
)

export default Landing
