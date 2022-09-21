// import MobileMedia from '../../assets/Home/Media/yclub_mobile.mp4'
// import WebMedia from '../../assets/Home/Media/yclub_web.mp4'
import { Suspense, useRef, useEffect, useState } from "react"
import { Box, Show, Hide, useBreakpointValue, AspectRatio } from '@chakra-ui/react'

const mobilemedia = <div style={{position: 'relative', paddingTop: '177.77777777777777%'}}><iframe src="https://iframe.mediadelivery.net/embed/61195/6480af9c-5292-4857-ad8f-72d7ae71a4ae?autoplay=true&loop=true&muted=true" loading="lazy" style={{border: "none", position: "absolute", top: 0, height: "100%", width: "100%", borderRadius:'50px'}} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true"></iframe></div>
const webmedia = <div style={{position: 'relative', paddingTop:' 56.25%'}}><iframe src="https://iframe.mediadelivery.net/embed/61195/0cbedb30-9d95-4757-9527-643abfaf302d?autoplay=true&loop=true&muted=true" loading="lazy" style={{border: "none", position: "absolute", top: 0, height: "100%", width: "100%", borderRadius:'50px'}} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true"></iframe></div>

// const addSource = ( src ) => {
//     let video = document.querySelector('video');
//     let source = document.querySelector('source')
//     source.src = src
//     video.load();
// }

const MediaContainer = () => {
    let size = useWindowSize()
    // useEffect( () => {
    //     size.width < 500 ? (
    //         addSource( mobileurl )
    //     ) : addSource( weburl )
    // }, [size])    

    return(
        <Box width={'95%'} height={'95%'}>
                {/* <video 
                style={{borderRadius:'50px'}}
                muted
                playsInline
                autoPlay
                loop >
                <source
                    src={''}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
                </video> */}
                { size.width < 500 ? mobilemedia : webmedia}
        </Box>
)}

function useWindowSize() {
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []); 
    return windowSize;
  }
  
export default MediaContainer