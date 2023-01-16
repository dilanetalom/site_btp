import React from 'react'

function NotFound() {
    return (
        <div className='h-screen w-full flex items-center'>
            <div className='mx-auto w-96 h-96 flex items-center '>
                <div className='mx-auto'>
                    <h1 className='lg:text-6xl md:text-4xl text-3xl  text-center font-bold text-red-200'>Erreur 404</h1>
                    <p className='text-center  md:text-base text-xs text-red-200'>Cette page n'existe pas </p>
                </div>
            </div>
        </div>
    )
}

export default NotFound