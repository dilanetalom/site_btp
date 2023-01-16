import React from 'react'
import Localisation from '../Component/Localisation'
import SmallSection from '../Component/SmallSection'
import Footer from '../Partial/Footer/Footer'
import Contact from './Contact/Contact'


function Contacts() {
  return (
    <>
      <SmallSection  
      title="Contactez-nous"
      />
      <Contact />
      <Localisation />
      <Footer />
    </>
  )
}

export default Contacts