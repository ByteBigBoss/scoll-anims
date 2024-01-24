"use client"
import Image from 'next/image'
import React from 'react'


const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo"></div>
        <Image src={logo} alt='logo' width={128} height={77}/>
      </nav>
    </div>
  )
}

export default Header