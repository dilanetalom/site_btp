import React from 'react'
import Localisation from '../Component/Localisation'
import SmallSection from '../Component/SmallSection'
import Footer from '../Partial/Footer/Footer'
import Contact from './Contact/Contact'
import { useTranslation } from "react-i18next"


function Contacts() {
   const { t } = useTranslation();
  return (
    <>
      <SmallSection  
      title={t('contact_us')}
      />
      <Contact />
      <Localisation />
      <Footer />
    </>
  )
}

export default Contacts