"use client"
import Image from 'next/image'
import React from 'react'

import logo from '@/public/logo.png';

const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Image src={logo} alt='logo' width={36} />
          <h2>Logo</h2>
        </div>
        <ul className="nav-items">
          
        </ul>
      </nav>
    </div>
  )
}

export default Header