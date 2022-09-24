import { MobileLanding } from "../../components/Home/landingMobile"
import { WebLanding } from "../../components/Home/landingWeb"

import { Show } from "@chakra-ui/react"

const Landing = () => (
  <>
    <Show breakpoint='(max-width: 1113px)'>
      <MobileLanding />
    </Show>
    <Show breakpoint='(min-width: 1114px)'>
      <WebLanding />
    </Show>
  </>
)

export default Landing

