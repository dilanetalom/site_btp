import React from 'react'
import Localisation from '../Component/Localisation'
import SmallSection from '../Component/SmallSection'
import Footer from '../Partial/Footer/Footer'
import Contact from './Contact/Contact'
import Service from './Service/Service'

function Services() {
  return (
    <>
         <SmallSection 
         title="Nos Services"
         />
         <Service/>
         <Localisation />
         <Contact />
         <Footer />
    </>
  )
}

export default Services