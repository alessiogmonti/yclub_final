import { Button, Link, IconButton, Slide, Heading, Box, useDisclosure, VStack, Divider, Spacer } from '@chakra-ui/react'
import { AiFillCloseCircle, AiFillLeftCircle, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import NextLink from "next/link"
import { Base } from './Base'

const mainmenu = [ 
  {'field': 'community', 'active':true, 
    'sublinks': [
      {
        'field': 'philosophy', 'active':false, 'link': '/'
      },
      {
        'field': 'press', 'active':false, 'link': '/'
      },
      {
        'field': 'join us', 'active':false, 'link': '/'
      }
    ]
}, 
  {'field': 'invest', 'active':false, 
    'sublinks': [
      {
        'field': 'collection', 'active':false, 'link': '/'
      },
      {
        'field': 'marketplace', 'active':false, 'link': '/'
      },
      {
        'field': 'launchpad', 'active':false, 'link': '/'
      },
      {
        'field': 'store', 'active':false, 'link': '/'
      }
    ]
}, 
  {'field': 'about', 'active':false, 
    'sublinks': [
      {
        'field': 'roadmap', 'active':false, 'link': '/'
      },
      {
        'field': 'whitepaper', 'active':false, 'link': '/'
      },
      {
        'field': 'team', 'active':false, 'link': '/'
      }
    ]
  }
]

export function Menu(){
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box position={'fixed'} style={{zIndex:3}}>
      <IconButton
        variant="outline"
        rounded="full"
        position="fixed"
        bg={'blackAlpha.800'}
        color={'accent'}
        top={4}
        left={4}
        fontSize={'35'}
        icon={isOpen ? <AiFillCloseCircle /> : <AiFillLeftCircle />}
        onClick={onToggle}
        aria-label="Toggle Theme"
        colorScheme="blue"
        style={{zIndex:10}}
      />
      <Base direction={'left'} toggle={isOpen} content={<MenuLinks/>} />
    </Box>
  )
}

const MenuLinks = () => {
  const [active, setActive] = useState(1)
  const toggle = (id) => setActive(id)
  return (
  <Box zIndex={6}>
    <Heading variant="Landing" textAlign={'center'}>
        {'HOME'} 
    </Heading>
    <VStack mt={10} spacing={10} align={'center'}>
      { mainmenu.map( (d, index) => 
          <Heading onClick={() => toggle(index)} variant="Menu" textAlign={'center'} opacity={index==active? 1 : 0.1}>
            {d.field}
          </Heading>
        )}
      <Divider width={'60%'}/> 
      <VStack mt={10} spacing={'20%'} align={'center'}>     
        { mainmenu[active].sublinks.map( (d) =>
              <NextLink href={d.link} passHref>
                <Link>
                  <Heading variant="SubMenu" textAlign={'center'} >
                    {d.field}
                  </Heading>
                </Link>
              </NextLink>)
            }
      </VStack>
    </VStack>
  </Box>
  )
}