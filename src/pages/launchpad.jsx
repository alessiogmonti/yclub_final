import { MobileLaunchpad } from "./Launchpad/mobileLaunchpad"
import { WebLaunchpad } from "./Launchpad/webLaunchpad"

import { Show } from "@chakra-ui/react"

const data = [
    {price: '1.5', rarity:'LEGENDARY', stock:100, stock_num:150, stock_amt:150, access:'whitelist', time:'SOLD OUT', active:false},
    {price: '0.12', rarity:'RARE', stock:100, stock_num:5000, stock_amt:5000, access:'whitelist', time:'SOLD OUT', active:false},
    {price: '0.12', rarity:'RARE', stock:23, stock_num:1159, stock_amt:5000, access:'public mint', time:'7D 09H 11M', active:true},
    {price: '0.39', rarity: 'EPIC', stock:false, stock_num: 650, stock_amt:650, access:'whitelist', time: 'OCTOBER', active:false},
    {price: '0.28', rarity: 'S.RARE', stock:false, stock_num: 1200, stock_amt:1200, access:'whitelist', time: 'NOVEMBER', active:false},
]

const Launchpad = () => (
    <>
        <Show breakpoint='(max-width: 1113px)'>
            <MobileLaunchpad data={data} />
        </Show>
        <Show breakpoint='(min-width: 1114px)'>
            <WebLaunchpad data={data} />
        </Show>
    </>
)

export default Launchpad