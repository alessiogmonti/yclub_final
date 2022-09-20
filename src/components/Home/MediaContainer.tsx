import MobileMedia from '../../assets/Home/Media/yclub_mobile.mp4'
import WebMedia from '../../assets/Home/Media/yclub_web.mp4'
import { Suspense, useRef, useEffect, useState } from "react"
import { Box, Show, Hide, useBreakpointValue } from '@chakra-ui/react'

const addSource = ( src, size ) => {
    let video = document.querySelector('video');
    let source = document.querySelector('source')
    source.src = src
    video.load();
}

const MediaContainer = () => {
    let size = useWindowSize()
    useEffect( () => {
        size.width < 500 ? (
            addSource( MobileMedia )
        ) : addSource( WebMedia )
    }, [size])    

    return(
        <Box width={'95%'} height={'95%'}>
                <video 
                style={{borderRadius:'50px'}}
                muted
                playsInline
                loop >
                <source
                    src={''}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
                </video>
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