import React, { useEffect, useRef } from 'react'
import ProjectInfoCard from './ProjectInfoCard'
import { useDispatch } from 'react-redux'
import { setHide, setID } from '../redux/features/dataSlice'
import Skill from './Skill'
import { ArrowUpRight } from 'lucide-react'

const Card = (item) => {

    const cardRef = useRef()
    const imgRef = useRef()
    const cardTextRef = useRef()

    const dispatch = useDispatch()

    let isDesktop = window.matchMedia('(min-width: 600px)')

    useEffect(() => {
        if (navigator.maxTouchPoints > 0 && isDesktop && innerWidth < innerHeight) {
            cardRef.current.classList.add('flex-col')
            imgRef.current.classList.add('w-full', 'h-[50%]')
            imgRef.current.classList.remove('w-[50%]')
            cardTextRef.current.classList.add('w-full', 'h-[50%]')
            cardTextRef.current.classList.remove('w-[50%]', 'h-full')
        }
    }, [])

    const projectInfo = (e) => {
        dispatch(setID(e))
        dispatch(setHide(false))
    }

    return (
        <div ref={cardRef} className='card w-full h-full flex rounded-2xl items-center justify-center'>
            <img ref={imgRef} src={item.elem.img} alt='First Project SS' loading='lazy' className='w-[50%] object-cover rounded-l-2xl select-none' />
            <div ref={cardTextRef} className='w-[50%] h-full bg-black text-white border-r rounded-r-2xl py-2 flex flex-col items-center justify-evenly'>
                <h4 className='font-asgard'>{item.elem.heading}</h4>
                <p className='text-lg text-center font-poppins font-normal pt-2'>{item.elem.mini_description}</p>
                <div className='flex flex-wrap gap-2 px-3'>
                    {item.elem.main_skills.map((item, idx) => {
                        return (<Skill elem={item} key={idx} />)
                    })}
                </div>
                <div className='w-full h-16'></div>
                <button className='text-[15px] p-2 border cursor-pointer rounded-lg flex items-center absolute bottom-0 right-0 m-5 hover:bg-white hover:text-black' onClick={() => projectInfo(item.elem.id)}>View Detailes<ArrowUpRight /></button>
            </div>
        </div>
    )
}

export default Card