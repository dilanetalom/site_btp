import React from 'react'
import './Component.css'

function ServiceCard(props) {
  return (
    <div className='w-full'>
      <div className='lg:h-96 md:h-96 w-full  service bg-gray-200 md:flex shadow-md z-3 '>
        <div className='md:w-1/2 w-0 h-full relative'>
          <img src={props.serviceimage} alt="" className=' w-full h-full absolute object-center object-cover' />
          <div className=' w-full h-full bg-black opacity-50'>

          </div>
        </div>
        <div className=' md:w-1/2  w-full h-full flex flex-col items-center p-5 space-y-2'>
          <h1 className='text-3xl font-semibold text-red-500'>{props.titre}</h1>
          <p className=' lg:text-base text-xs '>{props.servicetitle}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard