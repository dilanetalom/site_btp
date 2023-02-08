import React from 'react'
import Localisation from '../Component/Localisation'
import SmallSection from '../Component/SmallSection'
import Footer from '../Partial/Footer/Footer'
import Contact from './Contact/Contact'
import Service from './Service/Service'
import { useTranslation } from "react-i18next"
import Values from './Values/Values'

function Services() {
  const { t } = useTranslation();
  return (
    <>
         <SmallSection 
         title={t('services')}
         />
         <Service/>
         <Values />
         <Localisation />
         <Contact />
         <Footer />
    </>
  )
}

export default Services