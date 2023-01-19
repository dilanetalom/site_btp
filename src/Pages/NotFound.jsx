import React from 'react'
import { useTranslation } from "react-i18next"

function NotFound() {
    const { t } = useTranslation();
    return (
        <div className='h-screen w-full flex items-center'>
            <div className='mx-auto w-96 h-96 flex items-center '>
                <div className='mx-auto'>
                    <h1 className='lg:text-6xl md:text-4xl text-3xl  text-center font-bold text-red-200'>{t('erreur')}</h1>
                    <p className='text-center  md:text-base text-xs text-red-200'>{t('exist')} </p>
                </div>
            </div>
        </div>
    )
}

export default NotFound