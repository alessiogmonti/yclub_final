import { FormControl, Text, Spinner,
         FormErrorMessage, Input, 
         InputGroup, InputLeftElement, InputRightElement,
        FormHelperText, } from '@chakra-ui/react'
import { CustomButton } from '../../assets/button'
import { Formik, Field, Form } from 'formik'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'

function FormManager(values) {
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
        <Form >
        <Field name='name' validate={validateName}>
            {({ field, form }) => (
            <FormControl style={{zIndex:1}} isInvalid={form.errors.name && form.touched.name}>
                <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<BsPersonFill size={'33px'} />}
                    color='rgba(5,21,52,0.99)' _dark={{color: 'white'}}
                />
                { props.isSubmitting &&
                <InputRightElement width={'100%'} top={-10} children={<FormHelperText>We'll never share your information.</FormHelperText>} /> }
                <Input {...field} color={'dark'} _dark={{color:'light'}} size={'lg'} variant='flushed' type='name' placeholder='name' mb={2}/>
                </InputGroup>
                <Text position={'absolute'} right={3} top={0}>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </Text>              
                </FormControl>
            )}
        </Field>
        <Field name='email' validate={validateEmail}>
            {({ field, form }) => (
            <FormControl style={{zIndex:1}} isInvalid={form.errors.email && form.touched.email}>
                <Text position={'absolute'} right={3}>
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </Text>
                <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<AiOutlineMail size={'30px'} />}
                    color='rgba(5,21,52,0.99)' _dark={{color: 'white'}}
                />
                <Input {...field} color={'dark'} _dark={{color:'light'}} size={'lg'} variant='flushed' type='mail' placeholder='email' mb={5}/>

                </InputGroup>
            </FormControl>
            )}
        </Field>
        {props.isSubmitting?
            (        <CustomButton type="submit" variant={'main-link'} accent_text={values.CTA_accent} regular_text={values.CTA_reg} icon={<Spinner mr={1} mt={1} size='xl' />} /> )
            :
            (        <CustomButton type="submit" variant={'main-link'} accent_text={values.CTA_accent} regular_text={values.CTA_reg} icon={values.CTA_icon} top={values.top} right={values.right} border={values.border} pad={values.pad}/> )
        }
        </Form>
    )}
    </Formik>
    )
}

export default FormManager

