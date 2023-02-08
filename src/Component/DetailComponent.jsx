import React from 'react'
import './Component.css'
import {FaCheckCircle} from "react-icons/fa"

function DetailComponent(props) {
  return (
    <div>
         <p className='flex md:space-x-4 space-x-2 lg:text-base text-xs md:text-sm'><FaCheckCircle size={25} className="icon" color="rgb(164, 101, 56)"/><span>{props.text}</span></p>
    </div>
  )
}

export default DetailComponent