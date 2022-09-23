import { MobileRoadmap } from "./Roadmap/mobileRoadmap"
import { WebRoadmap } from "./Roadmap/WebRoadmap"

import { Show } from "@chakra-ui/react"

const Roadmap = () => (
    <>
        <Show breakpoint='(max-width: 800px)'>
            <MobileRoadmap/>
        </Show>
        <Show breakpoint='(min-width: 801px)'>
            <WebRoadmap/>
        </Show>
    </>
)

export default Roadmap