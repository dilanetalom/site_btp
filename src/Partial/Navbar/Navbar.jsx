import React, { useState } from 'react'
import ButtonComponent from '../../Component/ButtonComponent'
import logo from '../../assets/images/logo.png'
import open from '../../assets/images/open.png'
import close from '../../assets/images/Close.png'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import './Navbar.css'

function Navbar() {
  const [opent, setOpen] = useState(true)
  function opens() {
    setOpen(false);
  }
  function closes() {
    setOpen(true)
  }

  const { t } = useTranslation();
  return (
    <div className='w-full fixed lg:relative  header '>
      <div className='w-full  lg:py-3 py-2 lg:px-32 px-10 flex items-center navbar absolute bg-black '>
        <div className=' w-full lg:mx-auto flex items-center lg:space-x-20'>
          <div className='w-1/6  h-full  flex items-center'>
            <div className='mx-auto bg-white p-1 rounded-t-full'>
              <img src={logo} alt="" className='lg:w-28 md:h-24 md:w-24 w-24 h-10 ' />
            </div>

          </div>
          <div className='lg:w-4/6 w-0 h-full flex items-center invisible lg:visible'>
            <ul className='w-5/6 flex  lg:space-x-8 text-base  text-white navbar'>
              <li className=''><Link to="/" className='a focus:text-red-500'>  {t('acceuil')}</Link></li>
              <li><Link to="/about" className='a focus:text-red-500'>{t('qui_somme')}</Link></li>
              <li><Link to="/service" className='a focus:text-red-500'>{t('services')}</Link></li>
              <li><Link to="/realisation" className='a focus:text-red-500'>{t('realisation')}</Link></li>
            </ul>
            <div className='w-1/6'>
              <Link to="/contact">
                <ButtonComponent
                  class='white'
                  text={t('contact_us')}
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
          <div className='visible lg:invisible drop  bg-black text-white top-0  z-50 fixed'>
            <ul className='pl-5 h-2/3 space-y-5 pt-16 font-semibold '>
              <li className=''><Link to="/" className='a focus:text-red-500'>Accueil</Link></li>
              <li><Link to="/about" className='a focus:text-red-500'>Qui Sommes-nous ?</Link></li>
              <li><Link to="/service" className='a focus:text-red-500'>Nos Services</Link></li>
              <li><Link to="/realisation" className='a focus:text-red-500'>Nos Réalisations</Link></li>
              <li><Link to="/contact" className='a focus:text-red-500'>Contact</Link></li>
            </ul>
          </div> : ''
      }
    </div>
  )
}

export default Navbar