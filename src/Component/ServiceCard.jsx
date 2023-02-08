import React from 'react'
import './Component.css'
import const6 from '../assets/images/const6.jpg'
import { useTranslation } from "react-i18next"

function ServiceCard(props) {
  const { t } = useTranslation();
  const MAX_LENGTH = 250;
  return (
    
      <div  className='lg:h-80 md:h-96 md:w-1/3 w-full  service bg-white md:flex shadow-md z-3 'data-aos="fade-down"
      data-aos-easing="linear" data-aos-duration={props.dure}>
        {/* <img src={const6} alt="" className='absolute w-full h-full object-center object-cover' /> */}
        <div className='   w-full h-full flex  items-center p-5 space-y-2 text-center  items-center '>
          <div className='mx-auto space-y-3'>
          <h1 className='text-2xl  '>{props.titre}</h1>
          {/* <p className='  text-base ' > {props.servicetitle}</p> */}
          <div onClick={props.onclick} className="" >
          <button className='p-3 text-xs hover:text-white font-semibold rounded-full w-32 border hover:bg-red-500 hover:border-0 '>{t('lireplus')}</button>
          </div>
          </div>
        </div>
      </div>

  )
}

export default ServiceCard