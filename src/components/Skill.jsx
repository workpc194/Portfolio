import React from 'react'

const Skill = (item) => {

    return (
        <div className='skill cursor-text h-10 leading-10 text-center border rounded-sm px-3 hover:bg-white hover:text-black'>
            <h3 className='font-poppins'>{item.elem}</h3>
        </div>
    )
}

export default Skill