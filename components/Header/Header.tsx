"use client"
import Image from 'next/image'
import React from 'react'

import logo from '@/public/logo.png';
import Button from '../Button/Button';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <div className="logo">
          <Image src={logo} alt='logo' width={36} />
          <h2>Logo</h2>
        </div>

        <div className="input">
            <input type="text" placeholder='Search' />
        </div>

        <ul className="nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Auctions</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <Button/>
        </ul>
      </nav>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`

  nav{
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .input{
      flex: 2;
      display: flex;
      justify-content: center;
    }

    .nav-items{
      display: flex;
      align-items: center;
      gap: 2rem;
      li{
        transition: all 0.2s ease-in-out;

        &:hover{
          color: white;
          transform: scale(1.1);
        }
      }
    }

    
  }

`;

export default Header