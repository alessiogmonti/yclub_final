import { Box, Heading, Flex, Center } from '@chakra-ui/react'

export const Hero = ({ title, subtitle, subwidth }: { title,subtitle, subwidth: string }) => (
  <Box height={'26%'} textAlign={'center'} mt={'65px'}>
    <Heading variant={'Landing'} color={'light'} fontFamily={'Space Grotesk'}>{title}</Heading>
    <Center>
    <Flex width={subwidth} mt={4} >
      <Heading variant={'SubLanding'} fontFamily={'Space Grotesk'}>{subtitle}</Heading>
    </Flex>
    </Center>
  </Box>
)

Hero.defaultProps = {
  title: 'YCLUB',
  subtitle: 'PRESALE LAUNCH',
  subwidth: '100%'
}

//  // <Flex justifyContent="center" alignItems="center" height="100%">