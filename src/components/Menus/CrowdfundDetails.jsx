import { Heading, Box, VStack, HStack, Divider, Center } from '@chakra-ui/react'
import { Alarm } from '../../assets/alarm'
import FormManager from '../utils/form'

export const Details = () => (
  <Center>
    <VStack width={'90vw'} p={5} align={'center'} justifyContent={'center'}>
      <Heading variant="Menu" textAlign={'center'} lineHeight={'65px'} >
        CRYPTO'S FIRST EVER COMMUNITY FUNDED SUPERYACHT
      </Heading>
      <VStack mt={10} spacing={'100px'} align={'center'}>
        <Divider width={'60%'}/> 
        <HStack mt={10} spacing={'0%'} align={'center'} mb={10}>    
          <Heading variant="SubMenu" display={'inline-flex'}> Q1 2023 &nbsp; </Heading>
          <Heading variant="SubMenu" display={'inline-flex'} color={'accent'}> DUBAI </Heading> 
        </HStack>
        <Box position={'relative'} display={'flex'} bottom={0} height={'100%'}>
          <FormManager CTA_accent={'UPDATE'} CTA_reg={'ME'} CTA_icon={<Alarm/>}/>
        </Box>
      </VStack>
    </VStack>
  </Center>
)