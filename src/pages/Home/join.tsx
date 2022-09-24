import { MobileJoin } from "../../components/Home/mobileJoin"
import { WebJoin } from "../../components/Home/webJoin"

import { Show } from "@chakra-ui/react"
const Join = () => (
  <>
    <Show breakpoint='(max-width: 1113px)'>
      <MobileJoin />
    </Show>
    <Show breakpoint='(min-width: 1114px)'>
      <WebJoin />
    </Show>
  </>
)

export default Join
