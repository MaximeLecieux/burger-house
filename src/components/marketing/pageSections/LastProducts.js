import React from 'react'
import Container from '../../elements/Container'
import Image1 from '../../../medias/images/products/LastProducts-1.jpg'
import Image2 from '../../../medias/images/products/LastProducts-2.jpg'
import Image3 from '../../../medias/images/products/LastProducts-3.jpg'

export default function LastProducts() {
  return (
    <Container>
        <div className='grid grid-rows-2 grid-cols-2 gap-9 w-full h-96 px-12 my-20 uppercase text-white'>
            <div className='row-span-2 bg-primary h-full rounded-md p-7 relative'>
                <div className='absolute z-10 top-0 left-0 rounded-md w-full h-full bg-black opacity-10'></div> {/* Permet de faire ressortir le texte de l'image */}
                <img src={Image1} alt='Un délicieux Killer Burger exposé sur une pièce de bois' className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md'/>
                <div className='z-10 relative'>
                    <span className='block font-bold text-lg'>Killer Burger</span>
                    <span className='text-2xl font-bold'>Burger le plus populaire</span>
                </div>
            </div>
            <div className='bg-primary h-full rounded-md p-7 relative'>
                <div className='absolute z-10 top-0 left-0 rounded-md w-full h-full bg-black opacity-10'></div>
                <img src={Image2} alt='Un délicieux Island Burger exposé sur une pièce de bois' className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md'/>
                <div className='z-10 relative'>
                    <span className='block font-bold text-lg'>Island Burger</span>
                    <span className='block text-2xl font-bold'>Plus de plaisir</span>
                    <span className='text-2xl font-bold'>Plus de goût</span>
                </div>
            </div>
            <div className='bg-primary h-full rounded-md p-7 relative'>
                <div className='absolute z-10 top-0 left-0 rounded-md w-full h-full bg-black opacity-10'></div>
                <img src={Image3} alt="Un délicieux Orlando's Burger exposé sur une pièce de bois" className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-md'/>
                <div className='z-10 relative'>
                    <span className='block font-bold text-lg'>Orlando's Burger</span>
                    <span className='text-2xl font-bold'>Frais & pimenté</span>
                </div>
            </div>
        </div>
    </Container>
  )
}
