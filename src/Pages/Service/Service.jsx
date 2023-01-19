import React from 'react'
import ServiceCard from '../../Component/ServiceCard'
import './Service.css'
import plomberi from '../../assets/images/plomberi.jpg'
import elect from '../../assets/images/elect.jpg'
import const9 from '../../assets/images/const9.jpg'
import ButtonComponent from '../../Component/ButtonComponent'
import { useTranslation } from "react-i18next"

function Service() {
    const { t } = useTranslation();
    return (
        <div className='w-full pt-10 pb-10 lg:px-32 px-10 space-y-16'>
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
            <div className='  w-full space-y-10'>
                <ServiceCard 
                titre= {t('titre1')}
                 servicetitle={t('servicetitle1')}
                 serviceimage={const9}
                />
                <ServiceCard 
                titre={t('titre2')}
                 servicetitle={t('servicetitle2')}
                 serviceimage={elect}
                />
                <ServiceCard 
                titre={t('titre3')}
                 servicetitle={t('servicetitle3')}
                 serviceimage={plomberi}
                />
            </div>


        </div>
    )
}

export default Service