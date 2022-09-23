import { MobileTeam } from "./Team/mobileTeam"
import { WebTeam } from "./Team/webTeam"

import { Show } from "@chakra-ui/react"

const Team = () => (
    <>
        <Show breakpoint='(max-width: 800px)'>
            <MobileTeam/>
        </Show>
        <Show breakpoint='(min-width: 801px)'>
            <WebTeam/>
        </Show>
    </>
)

export default Team