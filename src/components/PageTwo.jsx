import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger.js"
import { useRef } from "react"
import myImage from '../content/noman.jpg'

gsap.registerPlugin(ScrollTrigger)

const PageTwo = () => {

  const H2Ref = useRef()
  const spanRef = useRef()
  const mainAboutRef = useRef()

  useGSAP(() => {

    const mm = gsap.matchMedia()

    mm.add('(min-width: 600px)', ()=>{

    gsap.to(H2Ref.current, {
      opacity: 100, 
        scrollTrigger: {
          trigger: H2Ref.current,
          start: 'top 90%',
          end: 'top 60%'
        }
    })
    const tl = gsap.timeline({scrollTrigger: {
        trigger: '#about',
        scrub: 2,
        pin: true,
        end: '+=5000'
      }})
    tl.to(H2Ref.current, {
      x: -2300,
      duration: 3,
    })
    tl.to(spanRef.current, {
      scale: 117,
      ease: 'sine.out',
      duration: 2,
    }, 'anim')
    tl.to(H2Ref.current, {
      opacity: 0,
      display: 'none',
      duration: 0.2
    }, 'anim')
    tl.to(H2Ref.current, {
      display: 'none'
    }, 'anim')
    tl.to(mainAboutRef.current, {
      display: 'flex'
    }, 'anim')
    tl.from(mainAboutRef.current, {
      scale: 0.1,
      opacity: 0
    }, 'anim')

    return ()=>{
      tl.kill()
    }

    })
  }, [])

  return (
    <div id="about" className='w-full min-h-screen z-8 bg-black'>
      <h3 ref={H2Ref} className="font-asgard text-9xl text-center appearance-none text-white ml-[60%] opacity-0 relative top-[40%] whitespace-nowrap ">Crafting Websites That Feel ALIV<span ref={spanRef} className="text-black inline-block origin-center">E</span></h3>
      <div ref={mainAboutRef} id="main-about" className='w-full min-h-screen hidden items-center justify-center z-10'>
          <div className="w-[80%] h-70% flex items-center justify-between">
            <div className="w-[60%]">
              <h2 className="font-asgard text-7xl text-white">About me</h2>
              <p className="font-poppins text-2xl opacity-60 mt-10">Hi, I’m Muhammad Noman. I turn static designs into interactive digital environments. By combining clean React architecture with advanced animation libraries like GSAP, I craft fluid, high-fidelity websites that hold attention and feel seamless to explore.</p>
            </div>
            <div id="about-img" className="w-[34%]">
              <img className="object-cover rounded-2xl" src={myImage} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default PageTwo