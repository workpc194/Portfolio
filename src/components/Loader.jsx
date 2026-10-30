import video from '../content/video.webM'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Loader = () => {

    gsap.registerPlugin(useGSAP)

    const [isVideoLoaded, setIsVideoLoaded] = useState(false)

    const twoRef = useRef()
    const videoRef = useRef()
    const loaderRef = useRef()
    var tl = gsap.timeline()

    useGSAP(() => {
        if (!isVideoLoaded) return;

        tl.to(twoRef.current, {
            top: "-100%",
            delay: 0.3,
            duration: 0.5,
            ease: "expo.out"
        })
        tl.to(videoRef.current, {
            top: "-100%",
            delay: 0.4,
            duration: 0.5,
            ease: "expo.inOut"
        }, 'anim')
        tl.to(loaderRef.current, {
            opacity: 0,
            delay: 0.5
        }, 'anim')
        tl.to(loaderRef.current, {
            display: 'none'
        })
    }, [isVideoLoaded])

    return (
        <div id='loader' ref={loaderRef} className='w-full h-screen fixed flex items-center justify-center bg-black z-11'>
            <div id="two" ref={twoRef} className='w-full h-screen absolute z-8 bg-[#222]'></div>
            <video ref={videoRef} onCanPlayThrough={() => setIsVideoLoaded(true)} autoPlay loop muted className='w-full h-screen absolute object-cover z-7' src={video}></video>
            <h1 className='font-asgard text-white select-none text-6xl text-center z-9 absolute top-50%'>Hello, <br />I’m Muhammad Noman</h1>
        </div>
    )
}

export default Loader