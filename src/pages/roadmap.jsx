import { MobileRoadmap } from "./Roadmap/mobileRoadmap"
import { WebRoadmap } from "./Roadmap/webRoadmap"

import { Show } from "@chakra-ui/react"

const Roadmap = () => (
    <>
        <Show breakpoint='(max-width: 1113px)'>
            <MobileRoadmap/>
        </Show>
        <Show breakpoint='(min-width: 1114px)'>
            <WebRoadmap/>
        </Show>
    </>
)

export default Roadmap