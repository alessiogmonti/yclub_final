import { Stack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <Stack
    spacing="1.5rem"
    width="100vw"
    maxWidth="100vw"
    // mt="-90vh"
    pt="8rem"
    px="1rem"
    {...props}
  />
)
