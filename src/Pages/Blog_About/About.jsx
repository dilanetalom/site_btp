import React from 'react'
import ButtonComponent from '../../Component/ButtonComponent'
import const3 from '../../assets/images/const3.jpg'
import './About.css'


function About() {
  return (
    <div className='lg:px-32 px-10 pt-10 pb-10 bg-gray-100  w-full lg:flex'>
      <div className='lg:w-2/3 w-full lg:space-y-8 space-y-5 '>
        <p className='text-xs  text-gray-500' id='quisommes'>QUI SOMMES-NOUS ?</p>
        <h1 className='text-4xl'>GARCIN TP</h1>
        <p className='lg:pr-10'>Construire sa propre maison, c’est un projet de toute une vie ! Que vous souhaitiez offrir une qualité de vie meilleure à votre famille, préparer votre retraite ou tout simplement placer votre argent dans une valeur sûre comme la pierre, faites en sorte que votre projet soit une véritable réussite. Offrez-vous la maison de vos rêves au style moderne ou authentique qui invite à des rassemblements chaleureux. Pour cela, confiez l’ensemble de vos travaux de construction à un spécialiste en bâtiment sur le Bassin Méditerranéen : Agir et Avenir.

          Forts d’expérience en construction et rénovation dans le bâtiment, nous répondons aussi bien aux attentes des professionnels (collectivités, mairies, hôtels, maisons de retraite, entreprises du secteur tertiaire) et particuliers. Des travaux de gros œuvre aux travaux de finition, nous assurons le succès de la construction de votre maison, de A à Z. N’hésitez pas à nous faire part de votre projet en nous appelant du lundi au vendredi de 9h à 18h.</p>
        <ButtonComponent
          class="red"
          text="En Savoir plus"
        />
      </div>
      <div className='lg:w-1/3 w-0 space-y-8 pr-20 flex items-center relative lg:visible invisible'>
        <img src={const3} alt="" className='absolute' />
        <img src={const3} alt="" className='absolute transform -translate-y-8' />
      </div>

    </div>
  )
}

export default About