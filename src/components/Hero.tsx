import { Box, Heading, Flex } from '@chakra-ui/react'

export const Hero = ({ title, subtitle, subwidth }: { title,subtitle, subwidth: string }) => (
  <Box height={'26%'} align={'center'} mt={10}>
    <Heading variant={'Landing'} fontFamily={'Space Grotesk'}>{title}</Heading>
    <Flex width={subwidth} my={10}>
      <Heading variant={'SubLanding'} fontFamily={'Space Grotesk'}>{subtitle}</Heading>
    </Flex>
  </Box>
)

Hero.defaultProps = {
  title: 'YCLUB',
  subtitle: 'PRESALE LAUNCH',
  subwidth: '100%'
}

//  // <Flex justifyContent="center" alignItems="center" height="100%">