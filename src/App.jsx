import React,{useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Abouts from './Pages/Abouts'
import Contacts from './Pages/Contacts'
import Home from './Pages/Home'
import Language from './Pages/Language/Language'
import NotFound from './Pages/NotFound'
import Realisation from './Pages/Realisation'
import Services from './Pages/Services'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Grosoeuvre from './Pages/Grosoeuvre'
import Conception from './Pages/Conception'
import Dimension from './Pages/Dimension'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/service" element={<Services />} />
          <Route path="/grosoeuvre" element={<Grosoeuvre />} />
          <Route path="/conception" element={<Conception/>} />
          <Route path="/dimension" element={<Dimension/>} />
          <Route path="/realisation" element={<Realisation />} />
          <Route path="*" exact={true} element={<NotFound />}></Route>
        </Routes>
      </Router>
      <Language />
    </>
  )
}

export default App
