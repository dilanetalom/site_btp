import React from 'react'
import ButtonComponent from '../../Component/ButtonComponent'
import const3 from '../../assets/images/const3.jpg'
import './About.css'
import { useTranslation } from "react-i18next"


function About() {
  const { t } = useTranslation();
  return (
    <div className='lg:px-32 px-10 pt-10 pb-10 bg-gray-100  w-full lg:flex'>
      <div className='lg:w-2/3 w-full lg:space-y-8 space-y-5 '>
        <p className='text-xs  text-gray-500' id='quisommes'>{t('qui_somme')}</p>
        <h1 className='text-4xl'>MASTER ENTREPRISE</h1>
        <p className='lg:pr-10'>{t('apropos')}</p>
        <div>
        <ButtonComponent
          class="red"
          text={t('en_savoir_plus')}
        />
        </div>
      
      </div>
      <div className='lg:w-1/3 w-0 space-y-8 pr-20 flex items-center relative lg:visible invisible'>
        <img src={const3} alt="" className='absolute' />
        <img src={const3} alt="" className='absolute transform -translate-y-8' />
      </div>

    </div>
  )
}

export default About