import { Hero } from '../../components/Global/Hero'
import { Container } from '../../components/Home/Container'
import { CTA } from '../../components/Global/CTA'
import { Logo } from '../../components/Home/Logo'
import { Box,Divider } from '@chakra-ui/react'

export const MobileLanding = () => (
  <Container height="100vh" direction={'column'} >
    <Hero subwidth={'100%'} />
    <Box height={"100vh"} width={'100vw'} mt={50}>
      <Logo />
    </Box>
    <Divider my={2} mb={10} width={'50%'}/>
    <CTA />
  </Container>
)