import { Container } from '../components/Container'
import MediaContainer from '../components/MediaContainer'
import { CustomButton } from '../assets/button'
import { Info } from '../assets/info'
import { Details } from '../components/Menus/CrowdfundDetails'


const iconStyle = {
  stroke: 'rgba(5,21,52,0.88)',
  strokeWidth: '0.25px',
  width: '57px',
  height: '57px',
  fill: 'white'
}

const Video = () => (
  <Container maxW={'500px'} width="100%" position={'relative'}> 
    <MediaContainer />
    <CustomButton 
      bg={'rgba(5,21,52,0.96)'}
      zVal={6} variant={'main-link'} accent_text={"DUBAI"} regular_text={"Q1 2023"} icon={<Info {...iconStyle} />}
      content={<Details />} />
  </Container>
)

export default Video
