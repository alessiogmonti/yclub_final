import { MobileTeam } from "./Team/mobileTeam"
import { WebTeam } from "./Team/webTeam"

import { Show } from "@chakra-ui/react"

const Team = () => (
    < div >
        <Show breakpoint='(max-width: 1113px)'>
            <MobileTeam/>
        </Show>
        <Show breakpoint='(min-width: 1114px)'>
            <WebTeam />
        </Show>
    </div >
)

export default Team