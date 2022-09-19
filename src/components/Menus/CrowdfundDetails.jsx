import { Heading, Box, VStack, HStack, Divider, Center,
  FormControl,
  FormErrorMessage, Input } from '@chakra-ui/react'
import { CustomButton } from '../../assets/button'
import { Alarm } from '../../assets/alarm'
import { Formik, Field, Form } from 'formik'

export const Details = () => (
  <Center>
    <VStack width={'90vw'} p={5} align={'center'} justifyContent={'center'}>
      <Heading variant="Menu" textAlign={'center'} lineHeight={'65px'} >
        CRYPTO'S FIRST EVER COMMUNITY FUNDED SUPERYACHT
      </Heading>
      <VStack mt={10} spacing={20} align={'center'}>
        <Divider width={'60%'}/> 
        <HStack mt={10} spacing={'0%'} align={'center'} mb={10}>    
          <Heading variant="SubMenu" display={'inline-flex'}> Q1 2023 &nbsp; </Heading>
          <Heading variant="SubMenu" display={'inline-flex'} color={'accent'}> DUBAI </Heading> 
        </HStack>
        <Box position={'relative'} display={'flex'} bottom={0} height={'100%'}>
          <FormManager />
        </Box>
      </VStack>
    </VStack>
  </Center>
)

function FormManager() {
  function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    }
    return error
  }

  function validateEmail(value){
    let error
    if (!value){
      error = 'Email is required'
    }
    return error
  }

  return (
    <Formik
    initialValues={{name: "", email: ""}}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name='name' validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <Input {...field} placeholder='name' mb={2}/>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='email' validate={validateEmail}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                <Input {...field} placeholder='email' mb={4}/>
              </FormControl>
            )}
          </Field>
          <CustomButton type="submit" variant={'main-link'} accent_text={"UPDATE"} regular_text={"ME"} icon={<Alarm />}/>
        </Form>
      )}
    </Formik>
  )
}
