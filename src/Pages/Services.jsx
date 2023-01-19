import React from 'react'
import Localisation from '../Component/Localisation'
import SmallSection from '../Component/SmallSection'
import Footer from '../Partial/Footer/Footer'
import Contact from './Contact/Contact'
import Service from './Service/Service'
import { useTranslation } from "react-i18next"

function Services() {
  const { t } = useTranslation();
  return (
    <>
         <SmallSection 
         title={t('services')}
         />
         <Service/>
         <Localisation />
         <Contact />
         <Footer />
    </>
  )
}

export default Services