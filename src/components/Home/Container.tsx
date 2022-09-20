import { Flex, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => (
  <Flex
    maxW={[null,null,'800px','1300px']}
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    // bg="gray.50"
    // color="black"
    // _dark={{
    //   bg: 'gray.900',
    //   color: 'white',
    // }}
    transition="all 0.15s ease-out"
    {...props}
  />
)
