import { Suspense } from "react"

const MediaContainer = () => (
    <Suspense fallback={null}>
            <video loop width={'99%'} height={'99%'} style={{borderRadius:'50px'}}>
            <source
                src={'/yclub_mobile.mp4'}
                type="video/mp4"
            />
            Your browser does not support the video tag.
            </video>
    </Suspense>
)

export default MediaContainer