import React from 'react'
import Localisation from '../Component/Localisation'
import Footer from '../Partial/Footer/Footer'
import About from './Blog_About/About'
import Contact from './Contact/Contact'
import Section from './Section/Section'
import Service from './Service/Service'
import Values from './Values/Values'

function Home() {
  return (
    <>
         <Section />
         <About />
         <Service />
         <Values />
         <Localisation />
         <Contact /> 
         <Footer />
    </>
  )
}

export default Home