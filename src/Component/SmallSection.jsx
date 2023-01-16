import React from 'react'
import './Component.css'
import const4 from '../assets/images/const4.jpg'
import Navbar from '../Partial/Navbar/Navbar'



function SmallSection(props) {
    return (
        <div className='w-full h-96'>
            <img src={const4} alt="" className='absolute w-full h-96 object-cover object-center animate-pulse' />
            <div className='absolute w-full h-96 bg-black opacity-75'>
                <Navbar />
                <div className='w-full h-full absolute items-center flex'>
                    <div className='h-1/3 w-2/3 mx-auto text-center flex flex-col items-center'>
                        <h1 className='text-white text-2xl md:text-4xl mt-14'>{props.title}</h1>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default SmallSection