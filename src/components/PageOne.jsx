import myImage from '../content/hero-bg.jpeg'
import vector from '../content/Vector.png'
import ScrollTrigger from 'gsap/ScrollTrigger.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const PageOne = () => {

    useGSAP(() => {
        gsap.to('#hero', {
            y: 300,
            ease: 'none',
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 2
            }
        })
    }, [])

    return (
        <>
            <div id="hero" data-scroll data-scroll-speed='-1' className='h-screen flex z-3 items-center justify-center'>
                <img className='object-cover' src={vector} alt='Vector Image' />
                <img className='h-full object-cover absolute bottom-0' src={myImage} alt='Home Page Noman Photo' />
                <h1 className='font-asgard text-6xl text-center select-none absolute top-50%'>Hello, <br />I’m Muhammad Noman</h1>
            </div>
        </>
    )
}

export default PageOne