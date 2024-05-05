import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg'


export default function Header() {
  return (
    <div className='flex items-center justify-between py-10'>
        <div className=''>
            <img src={Logo} alt='Burger-House' className='w-64'/>
        </div>
        <div className=''>

        </div>

    </div>
  )
}
