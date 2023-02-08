import React from 'react'
import email from '../../assets/images/email2.png'
import { FaPhone } from 'react-icons/fa'
import { FaLocationArrow, FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

function Footer() {
  const { t } = useTranslation();
  return (
    <div className=' w-full  relative'>
      {/* <img src={const4} alt="" className='absolute w-full h-full object-cover object-center' /> */}
      <div className='w-full bg-black  px-10 lg:px-32 pt-10 pb-10 absolute opacity-90'>
        <div className='lg:flex w-full pt-10 pb-10 border-b border-white space-y-5 lg:space-y-0'>
          <div className='lg:w-1/2  text-white'>
            <h1 className='text-3xl'>{t('inscription')}</h1>
            <p>{t('inscription_info')}</p>
          </div>
          <div className='md:w-1/2 lg:pl-10'>
            <div className='w-full h-14 border border-white rounded-full flex p-1' >
              <input type="text" className='w-4/6 pl-5  pr-5  text-white rounded-full h-full bg-black' placeholder={t('entre_email')} />
              <button className='h-full w-2/6 rounded-full bg-white '>{t('souscrire')}</button>
            </div>
          </div>
        </div>
        <div className=' w-full md:flex pt-10 border-b border-white pb-5 space-y-8 md:space-y-0'>
          <div className='md:w-1/4 space-y-2'>
            <div className='bg-white lg:w-40 w-28 h-28  p-1 rounded-t-full flex items-center'>
            <img src={logo} alt="" className='lg:w-40 lg:h-28 w-28 h-24 margin-auto' />
            </div>
            <p className='text-white text-xs'>{t('societe')}</p>

            
            </div>
          <div className=' md:w-1/4 space-y-6'>
            <h1 className='lg:text-xl text-base text-white'>Contact</h1>
            <div className='space-y-3'>
              <span className='flex lg:space-x-3 items-center'>
                <div className='lg:w-8 lg:h-8 w-0 h-0 bg-gray-200 rounded-full flex items-center invisible lg:visible '>
                  <img src={email} alt="" className='mx-auto' />
                </div>
                <p className='text-white  text-sm md:text-xs lg:text-sm'>masterentreprise@gmail.com</p>
              </span>

              <span className='flex lg:space-x-3 items-center'>
                <div className='lg:w-8 lg:h-8 w-0 h-0 bg-gray-200 rounded-full flex items-center invisible lg:visible '>
                  <FaPhone className='mx-auto' />
                </div>
                <p className='text-white lg:text-sm md:text-xs text-sm'>00237 675 524 243</p>
              </span>
              <span className='flex lg:space-x-3 items-center'>
                <div className='lg:w-8 lg:h-8 w-0 h-0 bg-gray-200 rounded-full flex items-center invisible lg:visible '>
                  <FaLocationArrow className='mx-auto' />
                </div>
                <p className='text-white md:text-xs lg:text-sm text-sm'>  Siège social : Douala-cameroun</p>
              </span>
            </div>
          </div>
          <div className='text-white md:w-1/4 md:pl-5 space-y-6'>
            <h1 className='lg:text-xl text-base'>{t('lien_rapide')}</h1>
            <ul className='space-y-3 lg:text-base md:text-xs text-sm'>
            <li className=''><Link to="/" className='a focus:text-red-500'>  {t('acceuil')}</Link></li>
              <li><Link to="/about" className='a focus:text-red-500'>{t('qui_somme')}</Link></li>
              <li><Link to="/service" className='a focus:text-red-500'>{t('services')}</Link></li>
              <li><Link to="/realisation" className='a focus:text-red-500'>{t('realisation')}</Link></li>
            </ul>
          </div>
          <div className='text-white md:w-1/4 space-y-6'>
            <h1 className='text-xl'>{t('reseau')}</h1>
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
          <p className='uppercase text-white text-xs'>{t('droit')}</p>
          <p className='uppercase text-white text-xs absolute md:right-32'>{t('dev_par')}</p>
        </div>

      </div>
    </div>
  )
}

export default Footer