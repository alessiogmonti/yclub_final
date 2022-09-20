import { Container } from '../../components/Home/Container'
import MediaContainer from '../../components/Home/MediaContainer'
import { CustomButton } from '../../assets/button'
import { Info } from '../../assets/Home/info'
import { Details } from '../../components/Menus/Home/CrowdfundDetails'
import { Divider } from "@chakra-ui/react"

const iconStyle = {
  stroke: 'rgba(5,21,52,0.88)',
  strokeWidth: '0.25px',
  width: '57px',
  height: '57px',
  fill: 'white'
}

const Video = () => (
  <Container  width="100%" position={'relative'}> 
    <MediaContainer />
    <Divider my={10} width={'50%'}/>
    <CustomButton 
      bg={'rgba(5,21,52,0.96)'}
      zVal={6} variant={'main-link'} accent_text={"DUBAI"} regular_text={"Q1 2023"} icon={<Info {...iconStyle} />}
      content={<Details />} />
    <Divider my={10} width={'50%'}/>
  </Container>
)

export default Video
