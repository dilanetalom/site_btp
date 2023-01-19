import React from 'react'
import Localisation from '../Component/Localisation'
import SmallSection from '../Component/SmallSection'
import Footer from '../Partial/Footer/Footer'
import Contact from './Contact/Contact'
import { useTranslation } from "react-i18next"

function Realisation() {
    const { t } = useTranslation();
    return (
        <>
            <SmallSection
                title={t('realisation')}
            />
            <Contact />
            <Localisation />
            <Footer />
        </>
    )
}

export default Realisation