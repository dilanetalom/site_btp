import React from 'react'
import Localisation from '../Component/Localisation'
import SmallSection from '../Component/SmallSection'
import Footer from '../Partial/Footer/Footer'
import About from './Blog_About/About'
import Contact from './Contact/Contact'
import { useTranslation } from "react-i18next"
import Values from './Values/Values'

function Abouts() {
  const { t } = useTranslation();
  return (
    <>
           <SmallSection
           title={t('about')}
           />
           <About />
           <Values/>
           <Localisation />
           <Contact/>
           <Footer/>
    </>
  )
}

export default Abouts