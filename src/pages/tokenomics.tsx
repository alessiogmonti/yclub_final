import { Container } from '../components/Container'
import { Center, Circle, Text, SimpleGrid, Box, VStack, useBoolean } from '@chakra-ui/react'
import { Allocations } from '../assets/tokenallocation'
import { CustomButton } from '../assets/button'
import { Info } from '../assets/info'
import { useEffect, useState } from 'react'

const iconStyle = {
    stroke: 'rgba(5,21,52,0.88)',
    strokeWidth: '0.25px',
    width: '57px',
    height: '57px',
    fill: 'white'
  }
  
const allocations = [
    [
        { 'color': '#175ea1', 'value': 30, 'field': 'Staking Rewards', 'class': 'cls-3'},
        { 'color': '#16375f', 'value': '22.8', 'field': 'Treasury', 'class': 'cls-6'},
        { 'color': '#1e3346', 'value': '15', 'field': 'Liquidity', 'class': 'cls-5'}
    ],
    [
        { 'color': '#f4f4f5', 'value': '10', 'field': 'Marketing', 'class': 'cls-9'},
        { 'color': '#def3fd', 'value': '9.6', 'field': 'Team', 'class': 'cls-7'},
        { 'color': '#a0ddf9', 'value': '5', 'field': 'Presale', 'class': 'cls-8'},
    ],
    [
        { 'color': '#4db6e8', 'value': '4', 'field': 'Airdrop', 'class': 'cls-2'},
        { 'color': '#499ad4', 'value': '2.4', 'field': 'Advisory', 'class': 'cls-1'},
        { 'color': '#447cbf', 'value': '1.2', 'field': 'Private Sale', 'class': 'cls-4'}
    ]
]

const Tokenomics = () => {
    const [active, setActive] = useState(0)
    const toggle = (id) => setActive(id)

    useEffect( () => {
        allocations.forEach(
            (d) => {
                d.map( (d2) =>
                document.getElementsByClassName(d2.class)[0].classList.remove('hasStroke')
                )
            }
        )
        allocations[active].map( (d) => {
            document.getElementsByClassName(d.class)[0].classList.add('hasStroke')
        })
        }, [active])

    return (
    <Container height={'100vh'} pt={'7%'} px={3}>
        <Allocations />
        <Center position={'relative'} my={10} rounded={'40px'} width={'100%'} height={'21%'} bg='dark' border={'1px'} borderColor={'accent'}>
            <SimpleGrid pl={2} columns={3} spacingX={2} width={'45%'}>
                {allocations.map( (d,index) => (
                    <VStack onClick={() => toggle(index)} border={active == index ? '1px solid white' : null} rounded={'full'} px={6} py={3} width={'110%'}> {d.map( (d2) => (
                        <Circle bg={d2.color} size={9} m={1}/>
                        )
                    )} </VStack>
                    )
                )}
            </SimpleGrid>
            <SimpleGrid pl={4} ml={1} spacingY={5} spacingX={0} width={'55%'}>
                {allocations[active].map( (d) => (
                        <Text> {d.field}: {d.value}% </Text>
                    )
                )}
            </SimpleGrid>
        </Center>
        <CustomButton variant={'main-link'} regular_text={'TOKENOMICS'} icon={<Info {...iconStyle} />} />
    </Container>
    )
}

export default Tokenomics
