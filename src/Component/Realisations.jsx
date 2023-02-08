import React from 'react'

function Realisations(props) {
    return (
        <div className='w-full lg:px-32 px-10 mt-8 relative real'>
        <div className=' relative w-full lg:h-80 h-72'>
            <div className='w-full h-full  absolute'>
            <img src={props.realisation} alt="" className='w-full h-full object-center object-cover ' />
            </div>
           
            <div className='w-full h-full absolute top-66 lg:px-32 px-3'>
                <h2 className='w-full py-3 bg-red-500 text-white text-center lg:text-base md:text-sm text-xs px-2'>{props.description}</h2>
            </div>
        </div>
        </div>
    )
}

export default Realisations