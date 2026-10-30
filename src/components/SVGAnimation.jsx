import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const SVGAnimation = () => {
    const svgRef = useRef()
    const pathRef = useRef()

    const initialPath = 'M 10 200 Q 500 200 1200 200'
    let finalPath = 'M 10 200 Q 500 200 1200 200'

    useGSAP(() => {
        const svgElement = svgRef.current
        const pathElement = pathRef.current

        const handlePointerMove = (e) => {
            const rect = svgElement.getBoundingClientRect()
            const x = ((e.clientX - rect.left) / rect.width) * 1200
            const y = ((e.clientY - rect.top) / rect.height) * 400

            finalPath = `M 10 200 Q ${x} ${y} 1200 200`

            gsap.to(pathElement, {
                attr: { d: finalPath },
            })
        }

        const handlePointerLeave = () => {
            gsap.to(pathElement, {
                attr: { d: initialPath },
                duration: 2,
                ease: "elastic.out(0.75,0.1)"
            })
        }

        svgElement.addEventListener('pointermove', handlePointerMove)
        svgElement.addEventListener('pointerleave', handlePointerLeave)

        return () => {
            svgElement.removeEventListener('pointermove', handlePointerMove)
            svgElement.removeEventListener('pointerleave', handlePointerLeave)
        }
    }, [])

    return (
        <div className='svg-animation w-screen px-10'>
            <h3 className='text-2xl font-poppins'>Move Your Cursor on Line</h3>
            <div className="svg-container w-full h-56 flex items-center justify-center">
                <svg ref={svgRef} viewBox="0 0 1200 400" height={'170%'} className='touch-none'>
                    <path ref={pathRef} d="M 10 200 Q 600 200 1200 200" stroke="white" fill="none" strokeWidth={4} />
                </svg>
            </div>
        </div>
    )
}

export default SVGAnimation