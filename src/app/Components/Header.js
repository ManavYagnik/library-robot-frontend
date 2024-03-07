import React from 'react'
import Image from 'next/image';
import "../globals.css"

const Header = () => {
  return (
    <div className='header'>
       
       <div className='header-img'>
      <Image
        src="/asset/car.jpg"
        alt="Logo"
        width={100}
        height={100}
      />
      </div>
     
   
      <div className='header-text'>Library Rover</div>
    </div>
  )
}

export default Header