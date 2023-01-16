import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Abouts from './Pages/Abouts'
import Contacts from './Pages/Contacts'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Services from './Pages/Services'

function App() {
  return (
         <Router>
            <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/contact" element={<Contacts />}/>
                  <Route path="/about" element={<Abouts />}/>
                  <Route path="/service" element={<Services/>}/>
                  <Route path="*" exact={true} element={<NotFound />}></Route>
            </Routes>
         </Router>
  )
}

export default App
