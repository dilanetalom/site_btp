import React, {useRef} from 'react'
import logo from '../../assets/images/logo.png'
import email from '../../assets/images/email2.png'
import { FaPhone } from 'react-icons/fa'
import { FaLocationArrow } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next"
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as Yup from "yup"

import './Contact.css'


function Contact() {
     const { t } = useTranslation();
     const { register, handleSubmit, formState: { errors } } = useForm();

     // function onSubmit(data){
     //      console.log(data)
     // }

     const form = useRef();

     const sendEmail = (e) => {
       e.preventDefault();
   
       emailjs.sendForm('service_pbm2ba5', 'template_7bdu44p', form.current, 'OpjM0V3NsMzBgISBV')
         .then((result) => {
             console.log(result.text);
         }, (error) => {
             console.log(error.text);
         });
     };

     return (
          <div className='lg:px-32 px-10 pt-10 pb-10 md:flex bg-gray-50 space-y-10 md:space-y-0'>
               <div className='md:w-1/2 w-full space-y-5'>
                    <img src={logo} alt="" />
                    <div>
                         <span className='flex space-x-5 items-center'>
                         <div className='w-12 h-12 bg-gray-200 rounded-full flex items-center '>
                              <img src={email} alt="" className='mx-auto' />
                         </div>
                               <p>dilanetalom8@gmail.com</p>
                         </span>
                    </div>
               
                    <div>
                         <span className='flex space-x-5 items-center'>
                         <div className='w-12 h-12 bg-gray-200 rounded-full flex items-center '>
                              <FaPhone  className='mx-auto' />
                         </div>
                               <p>690 841 749</p>
                         </span>
                    </div>
                    <div>
                         <span className='flex space-x-5 items-center'>
                         <div className='w-12 h-12 bg-gray-200 rounded-full flex items-center '>
                              <FaLocationArrow className='mx-auto' />
                         </div>
                               <p> rue de la Chantepierre, 13800 Istres</p>
                         </span>
                    </div>
               </div>
               <div className=' md:w-1/2 w-full '>
                    <form   ref={form} onSubmit={sendEmail} className="w-full  bg-white rounded-sm lg:p-10 p-5 space-y-5 shadow-sm">
                         <h1 className='text-2xl'>{t('laisse_message')}</h1>
                         <div className='w-full md:flex md:space-x-3 space-y-5 md:space-y-0'>
                              <div className='md:w-1/2'>
                              <input type="text" name='name' id='name' className='w-full border-b border-gray-100 h-14 rounded-md pl-4 focus:outline-none focus:shadow-sm' placeholder={t('nom')} {...register('name', { required: 'entrer votre nom',pattern: /^[A-Za-z]+$/i}  )}  required/>
                              {errors.name && <p role="alert" className='text-xs text-red-500 erreur' >{errors.name?.message}</p>}
                              </div>
                              <div className='md:w-1/2'>
                              <input type="email" name='email' id='email' className='w-full border-b border-gray-100 h-14 pl-4 focus:outline-none focus:shadow-sm' placeholder={t('email')} {...register('email', { required: 'entrer votre email'})} required/>
                              {errors.email && <p role="alert" className='text-xs text-red-500 erreur' >{errors.email?.message}</p>}
                              </div>
                         </div>
                         <div className='w-full'>
                         <textarea name="message" id="message" cols="10" rows="5" className='w-full border-b border-gray-100 pl-4 pt-4 focus:outline-none focus:shadow-sm' placeholder={t('message')} {...register('message', { required: 'entrer votre message'})} required></textarea>
                         {errors.message && <p role="alert" className='text-xs text-red-500 erreur' >{errors.message?.message}</p>}
                         </div>
                         <button className='px-5 py-2 bg-red-500 h-14 rounded-full font-semibold text-white' type='submit'>{t('envoie')}</button>
                    </form>
               </div>
          </div>
     )
}

export default Contact