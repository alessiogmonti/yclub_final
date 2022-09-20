import Media from '../assets/yclub_mobile.mp4'
import { Suspense, useRef, useEffect } from "react"
import { Box } from '@chakra-ui/react'

const MediaContainer = () => {
    // const videoRef = useRef(undefined)
    // // useEffect(() => {
    // //     videoRef.current.defaultMuted= true
    // // })
    return(
        <Box width={'95%'} height={'95%'}>
            <Suspense fallback={null}>
                    <video 
                    style={{borderRadius:'50px'}}
                    // ref={videoRef}
                    muted
                    // playsInline
                    autoPlay
                    loop >
                    <source
                        src={Media}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                    </video>
            </Suspense>
        </Box>
)}

export default MediaContainer