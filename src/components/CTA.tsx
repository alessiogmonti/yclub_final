import { Link as ChakraLink, Button, IconButton, ButtonGroup } from '@chakra-ui/react'
import { Container } from './Container'
import { CustomButton } from '../assets/button'
import { Arrow } from '../assets/arrow'

const arrowStyle = {
  stroke: 'rgba(5,21,52,0.88)',
  strokeWidth: '0.25px',
  width: '73px',
  height: '73px',
  fill: 'white'
}

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom={2}
    width="full"
    maxWidth="3xl"
    py={3}
    px={5}
    zIndex={1}
  >
    < CustomButton  
                    variant={'main-link'} 
                    accent_text={"BUY"}
                    regular_text={'$SYC'} 
                    icon={<Arrow {...arrowStyle} />} 
                    rotation={{transform: 'rotate(46.69deg)'}}
                    right={-2}
                    top={-2.5}
                    />
  </Container>
)
