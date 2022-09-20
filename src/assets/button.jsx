import { Box, Text, Container, Flex, Spacer, IconButton, useDisclosure } from "@chakra-ui/react"
// import Link from 'next/link'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from "react"
import { Base } from "../components/Menus/Base"

export const CustomButton = (props) => {
    return (
        <Box maxWidth={'90vw'} layerStyle={'button'} position="relative">
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Container display={'flex'} position={'absolute'} top={2} textAlign={'center'}>
                    <Text variant={props.variant} color={'accent'}>
                        {props.accent_text} &nbsp;
                    </Text>
                    <Text variant={props.variant}>
                        {props.regular_text} &nbsp;  &nbsp;  &nbsp;  &nbsp;
                    </Text>
                </Container>
                <Spacer />
                {props.content ? (<MenuButton {...props} />) : (
                    // <Link href={'https://google.com'} passHref>
                        <IconButton icon={props.icon} variant={'ghost'}
                            rounded={'full'} size={'xl'}
                            style={props.rotation}
                            right={props.right}
                            top={props.top}
                            border={props.border}
                            p={props.pad}
                            type={props.type} />
                    // </Link>
                )}
            </Flex>
        </Box>
    )
}

const MenuButton = (props) => {
    const { isOpen, onToggle } = useDisclosure()
    return(
        <>  
            {isOpen? (
                <IconButton
                variant="outline"
                rounded="full"
                position="fixed"
                bg={'whiteAlpha.800'}
                color={'dark'}
                _dark = {{
                    color:'accent',
                    bg:'blackAlpha.800'
                }}
                top={4}
                left={4}
                fontSize={'35'}
                icon={<AiFillCloseCircle />}
                onClick={onToggle}
                aria-label="Toggle Theme"
                colorScheme="blue"
                style={{zIndex:4}}
              />
            ) : (
            <IconButton icon={props.icon } variant={'ghost'} 
                        rounded={'full'} size={'xl'} 
                        right={props.right}
                        top={props.top}
                        border={props.border}
                        p={props.pad}
                        onClick = {onToggle}
                        bg={'dark'}
                        color={'dark'}
                        _dark = {{
                            color:'accent',
                            bg:'whiteAlpha.100'
                        }}
                        />
            )}
            <Base direction={'right'} toggle={isOpen} content={props.content} zVal={3}/>
        </>
)}