import Media from '../assets/yclub_mobile.mp4'
import { Suspense, useRef, useEffect } from "react"

const MediaContainer = () => {
    // const videoRef = useRef(undefined)
    // // useEffect(() => {
    // //     videoRef.current.defaultMuted= true
    // // })
    return(
    <Suspense fallback={null}>
            <video 

            display={'block'}
            style={{borderRadius:'50px'}}
            // ref={videoRef}
            muted
            // playsInline
            loop width={'95%'} height={'95%'}>
            <source
                src={Media}
                type="video/mp4"
            />
            Your browser does not support the video tag.
            </video>
    </Suspense>
)}

export default MediaContainer