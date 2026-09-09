import LocomotiveScroll from 'locomotive-scroll'
import myImage from '../content/hero-bg.jpeg'
import vector from '../content/Vector.png'

const PageOne = () => {

    const scroll = new LocomotiveScroll()

    return (
        <>
        <div id="hero" data-scroll data-scroll-speed='-1' className='h-screen flex items-center justify-center'>
            <img className='object-cover' src={vector} />
            <img className='h-full object-cover absolute bottom-0' src={myImage} />
            <h1 className='font-asgard text-6xl text-center select-none absolute top-50%'>Hello, <br />I’m Muhammad Noman</h1>
        </div>
        </>
    )
}

export default PageOne