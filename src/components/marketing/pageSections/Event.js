import React from 'react'
import Container from '../../elements/Container'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import '../../../css/carousel.css'
import Image1 from '../../../medias/images/events/dorian-hurst-d-igN2ptyC8-unsplash.jpg'
import Image2 from '../../../medias/images/products/Product-1.jpg'
import Image3 from '../../../medias/images/products/Product-2.jpg'
import Heading from '../../DisplayTitles/Heading'

function Slide({children, category, title, image}){
  return(
    <div className='grid grid-cols-2 p-6'>
      <div className='p-10 mb-10'>
        <Heading variant="h4">
          {category}
        </Heading>
        <Heading theme="secondary" variant="h3" className="mb-5">
          {title}
        </Heading>
        <p className='tracking-wide text-lg leading-relaxed text-gray-'>
          {children}
        </p>
      </div>
      <div className='relative w-full h-full'>
        <img src={image} alt="Une description de l'image" className='bg-primary absolute top-0 left-0 w-full h-full object-cover object-bottom z-0' />
      </div>
    </div>
  )
}

export default function Event() {

  const items = [
    <Slide 
      image={Image1}
      category="événement à venir"
      title="vivez la demi-finale"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </Slide>,
    <Slide 
      image={Image2}
      category="nouveau burger"
      title="Découvrez le killer-burger"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </Slide>,
    <Slide 
      image={Image3}
      category="Nouvelle recette"
      title="le double-cheese arrive"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </Slide>
  ];

  return (
    <Container>
        <div className='shadow-2xl mb-20'>
          <AliceCarousel 
          mouseTracking 
          items={items} 
          autoPlay
          infinite
          autoPlayInterval="4000"
          disableButtonsControls
          animationType='fadeout'
          />
        </div>
    </Container>
  )
}
