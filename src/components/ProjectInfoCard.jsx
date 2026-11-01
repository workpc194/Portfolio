import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setHide, setID } from '../redux/features/dataSlice';
import { ArrowRight, X } from 'lucide-react';
import Skill from './Skill';

const ProjectInfoCard = () => {

    const projectInfoRef = useRef()
    const { cards, id, hide } = useSelector(state => state.data)

    const dispatch = useDispatch()

    const notHide = () => {
        if (hide === false) {
            projectInfoRef.current.classList.remove('hidden')
        }
    }

    const hidden = () => {
        projectInfoRef.current.classList.add('hidden')
        dispatch(setHide(true))
        dispatch(setID(6))
    }

    useEffect(() => {
        notHide()
    }, [id])

    return (
        <div ref={projectInfoRef} className='project-info-card w-full h-screen hidden z-10 fixed top-0 right-0 '>
            <div className='w-full h-full bg-black opacity-80 flex items-center justify-center'></div>
            {/* <div className='absolute inset-0 bg-black opacity-80 pointer-events-none'></div> */}
            <div className='w-[80%] h-[70%] z-20 overflow-y-auto scrollbar-none bg-black px-5 shadow-[5px_5px_30px_white] rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100'>
                <div className='project-info-card-head w-full h-11 flex items-center justify-between'>
                    Project Detailed BreakDown
                    <button onClick={hidden}><X size={20} /></button>
                </div>
                <hr />
                <div className='w-full '>
                    <h2 className='text-3xl font-asgard pt-5'>{cards[id].heading}</h2>
                    <div className='w-full flex flex-wrap gap-2 pt-5 skill-card'>
                        {cards[id].all_skills.map((item, idx) => {
                            return (<Skill elem={item} key={idx} />)
                        })}
                    </div>
                    <div className='w-full gap-2 pt-5 user-benefit'>
                        {cards[id].user_benefit.map((item, idx) => {
                            return (
                                <div className='flex gap-2' key={idx}>
                                    ➜<p className='font-montserrat'>{item}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='project-info-card-btn max-w-sm pt-5 flex justify-evenly'>
                        <a className='w-30 h-10 leading-10 text-center rounded-sm bg-white text-black' href={cards[id].url} target='_blank'>Live Demo</a>
                        <a className='w-30 h-10 leading-10 text-center rounded-sm border hover:bg-white hover:text-black' href={cards[id].source_code} target='_blank'>Source Code</a>
                    </div>
                    <hr className='my-5' />
                    <div className='last w-full flex justify-evenly gap-2'>
                        <div className='challange w-[50%]'>
                            <h5 className='text-2xl font-asgard'>Core Challange</h5>
                            <p className='font-poppins'>{cards[id].challange}</p>
                        </div>
                        <div className='future w-[50%]'>
                            <h5 className='text-2xl font-asgard'>Future Plan</h5>
                            <p className='font-poppins'>Our future plan is to enhance the project with scalable features, improve code quality, and make the application more user-friendly and efficient.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfoCard