import React, { useState } from 'react'
import ButtonComponent from '../../Component/ButtonComponent'
import logo from '../../assets/images/logo.png'
import open from '../../assets/images/open.png'
import close from '../../assets/images/Close.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [opent, setOpen] = useState(true)
  function opens() {
    setOpen(false);
  }
  function closes() {
    setOpen(true)
  }
  return (
    <div className='w-full fixed lg:relative z-50'>
      <div className='w-full  lg:py-3 py-2 lg:px-32 px-10 flex items-center navbar absolute bg-black '>
        <div className=' w-full lg:mx-auto flex items-center lg:space-x-20'>
          <div className='w-1/6  h-full'>
            <img src={logo} alt="" className='lg:w-36 md:h-24 md:w-24 w-24 h-14' />
          </div>
          <div className='lg:w-4/6 w-0 h-full flex items-center invisible lg:visible'>
            <ul className='w-5/6 flex  lg:space-x-8 text-base  text-white navbar'>
              <li className=''><Link to="/" className='a focus:text-red-500'>Accueil</Link></li>
              <li><Link to="/about" className='a focus:text-red-500'>Qui Sommes-nous ?</Link></li>
              <li><Link to="/service" className='a focus:text-red-500'>Nos Services</Link></li>
              <li><Link to="" className='a focus:text-red-500'>Nos Réalisations</Link></li>
            </ul>
            <div className='w-1/6'>
              <Link to="/contact">
                <ButtonComponent
                  class='white'
                  text="CONTACTEZ-NOUS"
                />
              </Link>
            </div>
          </div>
          <div className='absolute right-10 visible lg:invisible w-8 h-8'>
            {
              (opent) ?

                <img src={open} onClick={opens} alt="" className='absolute  w-8' /> :
                <img src={close} onClick={closes} alt="" className='absolute  w-8' />
            }
          </div>
        </div>
      </div>
      {

        (!opent) ?
          <div className='visible lg:invisible drop  bg-white top-0  z-50 fixed'>
            <ul className='pl-5 h-2/3 space-y-5 pt-16 font-semibold '>
              <li className=''><Link to="/" className='a focus:text-red-500'>Accueil</Link></li>
              <li><Link to="/about" className='a focus:text-red-500'>Qui Sommes-nous ?</Link></li>
              <li><Link to="/service" className='a focus:text-red-500'>Nos Services</Link></li>
              <li><Link to="" className='a focus:text-red-500'>Nos Réalisations</Link></li>
              <li><Link to="/contact" className='a focus:text-red-500'>Contact</Link></li>
            </ul>
          </div> : ''
      }
    </div>
  )
}

export default Navbar