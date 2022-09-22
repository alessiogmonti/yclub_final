import { Show } from "@chakra-ui/react"

import TokenomicsMobile from "../../components/Home/tokenomicsMobile"
import TokenomicsWeb from "../../components/Home/tokenomicsWeb"

const Tokenomics = () => (
    <>
        <Show breakpoint='(max-width: 900px)'>
            <TokenomicsMobile />
        </Show>
        <Show breakpoint='(min-width: 901px)'>
            <TokenomicsWeb />
        </Show>
    </>
)

export default Tokenomics