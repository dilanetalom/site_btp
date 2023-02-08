import React from 'react'
import Localisation from '../Component/Localisation'
import SmallSection from '../Component/SmallSection'
import Footer from '../Partial/Footer/Footer'
import Contact from './Contact/Contact'
import { useTranslation } from "react-i18next"
import master1 from '../assets/images/master1.jpg'
import master7 from '../assets/images/master7.jpg'
import master8 from '../assets/images/master8.jpg'
import master4 from '../assets/images/master4.jpg'
import master10 from '../assets/images/master10.jpg'
import master3 from '../assets/images/master3.jpg'
import Realisations from '../Component/Realisations'

function Realisation() {
    const { t } = useTranslation();
    return (
        <>
            <SmallSection
                title={t('realisation')}
            />
            <h1 className='text-center mt-20 text-xl font-semibold'>{t('quelque')}</h1>
            <p className='lg:px-32 px-10 mt-5 lg:w-2/3'> <b>MASTER ENTREPRISE</b>  {t('quelque_description')} </p>
            <Realisations 
              realisation={master1}
              description={t('real1')}
            />
            <Realisations 
              realisation={master7}
              description={t('real2')}
            />
            <Realisations 
              realisation={master8}
              description={t('real3')}
            />
            <Realisations 
              realisation={master4}
              description={t('real4')}
            />
            <Realisations 
              realisation={master10}
              description={t('real5')}
            />
            <Realisations 
              realisation={master3}
              description={t('real6')}
            />
            <Contact />
            <Localisation />
            <Footer />
        </>
    )
}

export default Realisation