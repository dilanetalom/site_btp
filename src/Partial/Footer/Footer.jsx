import React from 'react'
import email from '../../assets/images/email2.png'
import { FaPhone } from 'react-icons/fa'
import { FaLocationArrow, FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=' w-full  relative'>
      {/* <img src={const4} alt="" className='absolute w-full h-full object-cover object-center' /> */}
      <div className='w-full bg-black  px-10 lg:px-32 pt-10 pb-10 absolute opacity-90'>
        <div className='lg:flex w-full pt-10 pb-10 border-b border-white space-y-5 lg:space-y-0'>
          <div className='lg:w-1/2  text-white'>
            <h1 className='text-3xl'>Inscription à la newsletter</h1>
            <p>Soyez informé des mises à jour soyez le premier à accéder en avant-première aux nouveaux épisodes</p>
          </div>
          <div className='md:w-1/2 lg:pl-10'>
            <div className='w-full h-14 border border-white rounded-full flex p-1' >
              <input type="text" className='w-4/6 pl-5  pr-5  text-white rounded-full h-full bg-black' placeholder='Entrer votre email' />
              <button className='h-full w-2/6 rounded-full bg-white '>Souscrire</button>
            </div>
          </div>
        </div>
        <div className=' w-full md:flex pt-10 border-b border-white pb-5 space-y-8 md:space-y-0'>
          <div className='md:w-1/4'><img src={logo} alt="" className='lg:w-40 lg:h-36 w-28 h-24' /></div>
          <div className=' md:w-1/4 space-y-6'>
            <h1 className='lg:text-xl text-base text-white'>Contact</h1>
            <div className='space-y-3'>
              <span className='flex lg:space-x-3 items-center'>
                <div className='lg:w-8 lg:h-8 w-0 h-0 bg-gray-200 rounded-full flex items-center invisible lg:visible '>
                  <img src={email} alt="" className='mx-auto' />
                </div>
                <p className='text-white  text-sm md:text-xs lg:text-sm'>dilanetalom8@gmail.com</p>
              </span>

              <span className='flex lg:space-x-3 items-center'>
                <div className='lg:w-8 lg:h-8 w-0 h-0 bg-gray-200 rounded-full flex items-center invisible lg:visible '>
                  <FaPhone className='mx-auto' />
                </div>
                <p className='text-white lg:text-sm md:text-xs text-sm'>690 841 749</p>
              </span>
              <span className='flex lg:space-x-3 items-center'>
                <div className='lg:w-8 lg:h-8 w-0 h-0 bg-gray-200 rounded-full flex items-center invisible lg:visible '>
                  <FaLocationArrow className='mx-auto' />
                </div>
                <p className='text-white md:text-xs lg:text-sm text-sm'> rue de la Chantepierre, 13800 Istres</p>
              </span>
            </div>
          </div>
          <div className='text-white md:w-1/4 md:pl-5 space-y-6'>
            <h1 className='lg:text-xl text-base'>Liens Rapides</h1>
            <ul className='space-y-3 lg:text-base md:text-xs text-sm'>
            <li className=''><Link to="/" className='a focus:text-red-500'>Accueil</Link></li>
              <li><Link to="/about" className='a focus:text-red-500'>Qui Sommes-nous ?</Link></li>
              <li><Link to="/service" className='a focus:text-red-500'>Nos Services</Link></li>
              <li><Link to="" className='a focus:text-red-500'>Nos Réalisations</Link></li>
            </ul>
          </div>
          <div className='text-white md:w-1/4 space-y-6'>
            <h1 className='text-xl'>Réseaux</h1>
            <div className='flex space-x-2'>
                   <a href="" className='w-8 h-8 rounded-full bg-white hover:bg-red-200 flex items-center'>
                    <FaFacebook color='orange' className='mx-auto'/>
                   </a>
                   <a href="" className='w-8 h-8 rounded-full bg-white hover:bg-red-200 flex items-center'>
                    <FaInstagram color='orange' className='mx-auto'/>
                   </a>
                   <a href="" className='w-8 h-8 rounded-full bg-white hover:bg-red-200 flex items-center'>
                    <FaWhatsapp color='orange' className='mx-auto'/>
                   </a>
                   <a href="" className='w-8 h-8 rounded-full bg-white hover:bg-red-200 flex items-center'>
                    < FaTwitter color='orange' className='mx-auto'/>
                   </a>
            </div>
          </div>
        </div>
        <div className=' w-full pt-5  md:flex'>
          <p className='uppercase text-white text-xs'>@ 2023, tous les droits sont réservés | garcin tp</p>
          <p className='uppercase text-white text-xs absolute md:right-32'>dévéloppé par nylstech digital</p>
        </div>

      </div>
    </div>
  )
}

export default Footer