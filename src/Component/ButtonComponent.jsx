import React from 'react'
import './Component.css'

function ButtonComponent(props) {
  return (
    <a href='/contact' className='w-40'>
         <button className={props.class==='white'?'rounded-full lg:px-5 md:px-3 py-3 bg-white text-xs w-40  font-semibold hover:bg-red-500 hover:text-white':props.class==='red'?'rounded-full px-5 py-3 bg-red-500 text-white text-xs w-36 font-semibold hover:bg-white hover:text-black hover:border hover: border-black':''}>{props.text}</button>
    </a>
  )
}

export default ButtonComponent