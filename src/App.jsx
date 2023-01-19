import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Abouts from './Pages/Abouts'
import Contacts from './Pages/Contacts'
import Home from './Pages/Home'
import Language from './Pages/Language/Language'
import NotFound from './Pages/NotFound'
import Realisation from './Pages/Realisation'
import Services from './Pages/Services'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/service" element={<Services />} />
          <Route path="/realisation" element={<Realisation />} />
          <Route path="*" exact={true} element={<NotFound />}></Route>
        </Routes>
      </Router>
      <Language />
    </>
  )
}

export default App
