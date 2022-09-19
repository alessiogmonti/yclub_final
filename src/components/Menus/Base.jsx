import { IconButton,Center, Slide, Box, useDisclosure } from '@chakra-ui/react'

export const Base = (props) => (
        <Slide direction={props.direction} in={props.toggle} style={{ zIndex: props.zVal }}>
          <Center
            height={'100%'}
            // pl='10px'
            color='white'
            // pt='9'
            bg='black'
            rounded='xl'
            style={{zIndex: 50}}
          >
            {props.content}
          </Center>
        </Slide>
)