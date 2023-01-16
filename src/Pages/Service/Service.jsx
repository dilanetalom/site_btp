import React from 'react'
import ServiceCard from '../../Component/ServiceCard'
import './Service.css'
import plomberi from '../../assets/images/plomberi.jpg'
import elect from '../../assets/images/elect.jpg'
import const9 from '../../assets/images/const9.jpg'
import ButtonComponent from '../../Component/ButtonComponent'

function Service() {
    return (
        <div className='w-full pt-10 pb-10 lg:px-32 px-10 space-y-16'>
            <div className='flex'>
                <div className='w-full  pr-10 space-y-2'>
                    <p className='text-gray-300 text-xs'>NOTRE SAVOIR FAIRE</p>
                    <h1 className='text-4xl'>Nos Services</h1>
                    <p className='text-base'>
                    GARCIN TP veille à la satisfaction totale des clients qui nous accordent leur confiance. C’est la raison pour laquelle notre entreprise tout corps de métier se spécialise dans différents domaines d’activité.
                     Nous prenons en charge toutes les étapes de votre construction de maison.
                    </p>
                    {/* <ButtonComponent
                        class="red"
                        text="LIRE PLUS"
                    /> */}
                </div>
              
            </div>
            <div className='  w-full space-y-10'>
                <ServiceCard 
                titre="Construction"
                 servicetitle="Le gros œuvre reste le pilier d’un projet de 
                 construction de maison neuve. Il englobe, en effet, les travaux 
                 qui soutiennent la construction et qui garantissent sa solidité 
                 et sa stabilité. Des travaux de soubassement au terrassement en 
                 passant par les fondations de la maison, l’élévation des murs, 
                 la charpente ou encore la toiture, cette étape tient une importance 
                 capitale. D’où la nécessité d’y accorder plus d’attention. Pour entrevoir
                  l’avenir sous un jour meilleur, confiez vos travaux de gros œuvre à un professionnel
                   comme Agir et Avenir. Nous réalisons chaque phase de la construction selon les
                    règles de l’art, pour vous offrir une maison solide, design, stable et adaptée à
                     vos besoins. Nous pourrons intervenir aussi bien en travaux d’extension qu’en 
                     construction neuve.

                 "
                 serviceimage={const9}
                />
                <ServiceCard 
                titre="Electricité"
                 servicetitle="Que ce soit pour vous éclairer, pour cuisiner, pour faire fonctionner
                  vos appareils électroniques, pour réaliser vos tâches ménagères ou pour vous fournir 
                  de l’eau chaude, l’électricité est toujours indispensable. De l’installation à la mise 
                  aux normes de votre système électrique, en passant par le dépannage électrique, contactez-nous.
                   Nous mettons à votre disposition 
                 un artisan réactif et sérieux pour assurer votre sécurité et votre confort.

                 "
                 serviceimage={elect}
                />
                <ServiceCard 
                titre="Plomberie"
                 servicetitle="Pose de compteur d’eau, installation de la robinetterie, 
                 de la tuyauterie, des équipements sanitaires, raccordement d’eau, 
                 pose de chaudière et de ballon d’eau chaude… Les travaux de plomberie permettent d’optimiser
                  le confort à l’intérieur de votre nouvelle maison. Autant dire qu’ils méritent toute votre
                   attention. Faites appel à notre spécialiste pour tout prendre en charge dans le meilleur
                    délai et avec efficacité. Notre spécialiste s’occupera également de l’entretien et du 
                    dépannage de la plomberie, surtout en cas de fuite, de bouchage 
                 des sanitaires ou de panne de chaudière ou de ballon d’eau chaude.

                 "
                 serviceimage={plomberi}
                />
            </div>


        </div>
    )
}

export default Service