import React from 'react'
import ServiceCard from '../../Component/ServiceCard'
import './Service.css'
import plomberi from '../../assets/images/plomberi.jpg'
import elect from '../../assets/images/elect.jpg'
import const9 from '../../assets/images/const9.jpeg'
import ButtonComponent from '../../Component/ButtonComponent'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next"

function Service() {

    const navigate = useNavigate();

    const redirectTo = ()=>{
        navigate("/grosoeuvre");
    }
    const redirectTo2 = ()=>{
        navigate("/conception");
    }
    const redirectTo3 = ()=>{
        navigate("/dimension");
    }
    const { t } = useTranslation();
    return (
        <div className='w-full pt-10 pb-10 lg:px-32 px-10 space-y-16 bg-gray-100'>
            <div className='flex'>
                <div className='w-full  pr-10 space-y-2'>
                    <p className='text-gray-300 text-xs'>{t('savoir')}</p>
                    <h1 className='text-4xl'>{t('services')}</h1>
                    <p className='text-base'>
                    {t('titre_service')}
                    </p>
                    {/* <ButtonComponent
                        class="red"
                        text="LIRE PLUS"
                    /> */}
                </div>
              
            </div>
            <div className='  w-full  md:space-x-8 md:flex space-y-5 md:space-y-0 '>
                <ServiceCard 
               onclick ={redirectTo}
                titre={t('titre1')}
                 servicetitle={t('servicetitle1')}
                 dure="1000"
                 serviceimage={const9}
                />
                <ServiceCard 
                  onclick ={redirectTo2}
                titre={t('titre2')}
                 servicetitle={t('servicetitle2')}
                 serviceimage={elect}
                 dure="1500"
                />
                <ServiceCard 
                 onclick ={redirectTo3}
                titre={t('titre3')}
                 servicetitle={t('servicetitle3')}
                 serviceimage={plomberi}
                 dure="2000"
                />
            </div>
           


        </div>
    )
}

export default Service