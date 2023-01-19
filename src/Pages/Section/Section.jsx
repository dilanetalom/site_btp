import React from 'react'
import const1 from '../../assets/images/const1.jpg'
import ingenieur from '../../assets/images/ingenieur.png'
import ButtonComponent from '../../Component/ButtonComponent'
import Navbar from '../../Partial/Navbar/Navbar'
import { useTranslation } from "react-i18next"

function Section() {
  const { t } = useTranslation();
  return (
    <div className='relative w-full  h-screen'>
      <img src={const1} alt="" className='absolute w-full h-full object-cover object-center animate-pulse' />
      <div className='absolute w-full h-full bg-black opacity-75'>
        <Navbar />
        <div className='w-full h-4/5 lg:pl-32 pl-10 pr-10 md:pr-0 md:flex'>
          <div className='lg::w-1/2 w-full flex flex-col lg:space-y-10 md:space-y-5 space-y-6 mt-24 lg:mt-36 '>
            <h1 className='lg:text-5xl text-4xl font-semibold text-white mt-14'>{t('investir')} GARCIN TP</h1>
            <p className='text-white text-xs md:text-base lg:text-xl'>
               Quel que soit votre projet, notre équipe de professionnels met ses compétences et son savoir-faire à votre service ,
               De la construction à la rénovation de bâtiments, nous pouvons intervenir rapidement
               et vous proposer un devis adapter à vos besoins.
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