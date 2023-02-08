import React from 'react'
import Localisation from '../Component/Localisation'
import SmallSection from '../Component/SmallSection'
import Footer from '../Partial/Footer/Footer'
import Contact from './Contact/Contact'
import { useTranslation } from "react-i18next"
import DetailComponent from '../Component/DetailComponent'
import Values from './Values/Values'



function Grosoeuvre() {
    const { t } = useTranslation();
    return (
        <>
            <SmallSection
                title={t('titre1')}
            />
            <div className='lg:px-32 px-10 py-14  w-full space-y-6'>
                 <p className='w-2/3'>{t('outre')}</p>
                 <div className='lg:flex w-full space-y-5 lg:space-y-0'>
                <div className='lg:w-1/3 w-full space-y-3'>
                    <DetailComponent
                        text={t('outre1')}
                    />
                    <DetailComponent
                        text={t('outre2')}
                    />
                    <DetailComponent
                        text={t('outre3')}
                    />
                    <DetailComponent
                        text={t('outre4')}
                    />
                </div>
                <div className='lg:w-2/3 w-full space-y-3'>
                <DetailComponent
                        text={t('outre5')}
                    />
                  
                    <DetailComponent
                        text={t('outre6')}
                    />
                    <DetailComponent
                        text={t('outre7')}
                    />
                </div>
                </div>
            </div>
             <Values />
            <Contact />
            <Localisation />
            <Footer />
        </>
    )
}

export default Grosoeuvre