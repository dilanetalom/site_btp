import React from 'react'
import Localisation from '../Component/Localisation'
import SmallSection from '../Component/SmallSection'
import Footer from '../Partial/Footer/Footer'
import About from './Blog_About/About'
import Contact from './Contact/Contact'

function Abouts() {
  return (
    <>
           <SmallSection
           title="A props de nous"
           />
           <About />
           <Localisation />
           <Contact/>
           <Footer/>
    </>
  )
}

export default Abouts