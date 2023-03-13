import React from 'react'
import ValeurCard from '../../Component/ValeurCard'
import './Values.css'
import { useTranslation } from "react-i18next"



function Values() {
  const { t } = useTranslation();

  return (
    <div className=''>
    {/* <div className='lg:px-32 px-10 pt-10 pb-10'>
        <p className='text-gray-200 text-center md:text-left'> {t('somme')}</p>
        <h1 className='text-4xl text-center md:text-left'>{t('value')}</h1>
     
          <div className=' valeur w-full md:flex md:flex-row flex flex-col space-y-8 md:space-y-0  px-10 py-10 md:space-x-8 space-x-0 lg:space-x-16'>
            <ValeurCard 
            titre={t('qualite')}
            />
            <ValeurCard 
               titre={t('hygene')}
            />
            <ValeurCard 
            titre= {t('securite')}
            />
            <ValeurCard 
            titre={t('environ')}
            />

        </div>
      </div> */}

      </div>
  )
}

export default Values