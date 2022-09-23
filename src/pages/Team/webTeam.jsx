import { Menu } from "../../components/Menus/MainMenu"
import { DarkModeSwitch } from "../../components/Global/DarkModeSwitch"
import { motion } from "framer-motion"
import { Box } from "@chakra-ui/react"
import { Scroller } from "../../components/Global/webScroller"
import { Heading, Center} from "@chakra-ui/react"

import { DataContainer } from "./dataContainer"

const items = [
    {title: 'TerpHeadRick', date:'Community Manager', content:<DataContainer bio={"Have been in crypto since 2019 and first got into Discord and community building/managing for stock signals groups. Naturally as I got more into crypto I shifted into that and haven’t looked back since. "} fullName={"Deniz Karakurt"}/>,},
    {title: 'The Yacht Mogul', date:'Advisor', content:<DataContainer bio={"All passion and love for yachts and their ability to inspire people all around the world. A chosen “Influencial figure in the yachting world” by some of the press such as Forbes,CNN,BOAT,Robb Report."} fullName={"Denis Suka"}/>},
    {title: 'ValTron', date:'Creative Director', content:<DataContainer bio={"Creative mastermind! She is the best there is in our eyes and we love what she does. She was the screen writer for FlixPatrol that reached the TOP 10 movies on Netflix in the World in 2021 ."} fullName={"Valentina Tronova"}/>},
    {title: 'Mega Skipper', date:'Campaign Manager', content:<DataContainer bio={"Ex VP of digital in largest Israeli advertising agency with 25 years of experience in online advertising. "} fullName={"Yuval Hollander"}/>},
    {title: 'Polo Marco', date:'Brand Strategists & Communications', content:<DataContainer bio={"Photographer and Strategist, with over 5 years of helping brands strengthen their communications, communities, and lifestyle experiences."} fullName={"Kennyatta Collins"}/>},
    {title: 'Carrara', date:'UI/UX', content:<DataContainer bio={"Years of experience specializing in designing web & mobile apps, websites and admin portals. Believes that design is not about beautiful pixels but about solving problems & achieving business and user goals."} fullName={"Anastasiia Pachenko"}/>},
    {title: 'Blade', date:'Strategy', content:<DataContainer bio={"Engineered for several Fortune 500 companies in a variety of technology related roles while building his website into the top 1000 most visited websites in the world."} fullName={"Michael Lawrence"}/>},
    {title: 'CryptoDon', date:'Advisor / Influencer', content:<DataContainer bio={"Early investor in many projects like BAYC and in the ethereum blockchain. Dedicated curator in owned Web3 investment communities."} fullName={"Ber Mitchell"}/>},
    {title: 'King Arthur', date:'Chief Technical Officer', content:<DataContainer bio={"Artur is an industrial designer and a developer with a vast experience in algorithms and embedded systems, moving into the blockchain tech and tackling a multitude of projects ranging from NFTs to DeFi and beyond. "}/>},
    {title: 'Cyrill', date:'Technical Project Manager', content:<DataContainer bio={"Project manager with 4 years experience in crypto projects. Tutor in business development and finance."}/>},
    {title: 'SHR', date:'Art Director (NFT)', content:<DataContainer bio={"Digital Art artist | Grafic designer | Matte Painting | CGI designer."} fullName={"Shumov Roman"}/>},
    {title: 'David', date:'CG Artist', content:<DataContainer bio={"Our genius responsible for visual effects."}/>},
    {title: 'IT', date:'Full Stack Web3 Developer', content:<DataContainer bio={"Web3 Developer, IT has been developing code since he remembers himself."}/>},
    {title: 'Gypspatonik', date:'Executive producer', content:<DataContainer bio={"Former Head of TV production department, Executive producer Previous Clients: AliExpress, Ford, GSK, Unilever, Sony, Nutricia, Bayer, Harley-Davidson, Danone"}/>},
    {title: 'Nodia', date:'Art Director (video)', content:<DataContainer bio={"Art director and photographer. Worked at WayRay AG and Claustrophobia, worked with BBDO, Leo Burnett, Instinct, Fetish Film, Hype Production."}/>},
    {title: 'Never Sleeper', date:'Developers / Designers Team Lead', content:<DataContainer bio={"The non human who manages the teams 24/7. We can’t figure out where he has the energy from but we know its not from this planet."}/>},
    {title: 'Neptune', date:'Co-Founder', content:<DataContainer bio={"Basically born on a Super Yacht, years of experience in helping to curate and market extravagant experiences for those chartering these vessels of extravagance.  "}/>},
    {title: 'Cobra', date:'Co-Founder / Strategy', content:<DataContainer bio={"22 years of online marketing experience helping brands launch and scale while generating over a billion dollars in sales for some of the world's retail giants. "}/>},
    {title: 'Poseidon', date:'Co-Founder / COO', content:<DataContainer bio={"Chief Operations Officer in many successful start ups. I always say there is no bad business there is a bad operation. "} fullName={"Sagi Mazur"}/>},
    {title: 'De Vinchi', date:'Co-Founder / Financial Analyst', content:<DataContainer bio={"Over 10 years of consulting & building working relationships between customers and their brand partners. Through years of experience in banking, and financial services, managed to institute financial systems to strengthen portfolio health."} fullName={"David Shnaiderman"}/>},
]

export const WebTeam = () => (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Box layerStyle={'background'} sx={{filter:'blur(38px)'}}/>
        <Menu/>
        <DarkModeSwitch />
        <Center width={'100vw'} position={'absolute'} alignItems={'center'} justifyContent={'center'}>
            <Heading variant={'Landing'} position={'relative'} 
            fontSize={'50px'} color={'light'} >TEAM</Heading>
        </Center>
        <Box position={'absolute'} width={'50vw'}>
            <Box width={'99vw'} height={'90vh'}>
                <Scroller data={items}/>
            </Box>
        </Box>
        {/* <CTA /> */}
    </motion.div>
)