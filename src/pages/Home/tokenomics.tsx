import { Show } from "@chakra-ui/react"

import TokenomicsMobile from "../../components/Home/tokenomicsMobile"
import TokenomicsWeb from "../../components/Home/tokenomicsWeb"

const Tokenomics = () => (
    <>
        <Show breakpoint='(max-width: 1113px)'>
            <TokenomicsMobile />
        </Show>
        <Show breakpoint='(min-width: 1114px)'>
            <TokenomicsWeb />
        </Show>
    </>
)

export default Tokenomics