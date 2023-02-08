import React from 'react'
import './Component.css'
import const6 from '../../src/assets/images/const6.jpg'

function ValeurCard(props) {
    return (
        <div className='relative valeur_card shadow-lg'>
            <div className='absolute card_botom bottom-0 bg-black'>
            </div>
            <div className='absolute card_top shadow-lg flex items-center'>
                    <p className='mx-auto lg:text-2xl md:text-base text-sm semibold'>{props.titre}</p>
            </div>


        </div>
    )
}

export default ValeurCard