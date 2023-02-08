import React from 'react'
import './Section.css'
import const1 from '../../assets/images/const1.jpg'
import ingenieur from '../../assets/images/ingenieur.png'
import ButtonComponent from '../../Component/ButtonComponent'
import Navbar from '../../Partial/Navbar/Navbar'
import { useTranslation } from "react-i18next"

function Section() {
  const { t } = useTranslation();
  return (
    <div className='relative w-full section '>
      <img src={const1} alt="" className='absolute w-full h-full object-cover object-center animate-pulse' />
      <div className='absolute w-full h-full bg-black opacity-75'>
        <Navbar />
        <div className='w-full h-4/5 lg:pl-32 pl-10 pr-10 md:pr-0 md:flex'>
          <div className='lg:w-1/2 w-full flex flex-col lg:space-y-8 md:space-y-5 space-y-6 mt-20 lg:mt-28 '>
            <h1 className='lg:text-4xl text-3xl  text-white mt-14' data-aos="fade-up"
              data-aos-anchor-placement="center-center" data-aos-duration="1500">{t('section_titre')} <br></br><span className='text'> MASTER ENTREPRISE</span></h1>
            <p className='text-white text-xs md:text-base lg:text-xl' data-aos="fade-up"
              data-aos-duration="3000">
              {t('section_description')}
            </p>
            <ButtonComponent
              class="white"
              text={t('en_savoir_plus')}
            />
          </div>
          <div className='w-1/2 h-full flex items-center'>
            {/* <div className='w-full h-full lg:visible invisible lg:mt-20'>
              <img src={ingenieur} alt="" className='h-full w-96 mx-auto' />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section