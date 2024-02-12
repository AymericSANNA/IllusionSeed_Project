"use client";
import Link from 'next/link';
import React, { useState } from "react";
import "./header.css"


function Header() {
  const [enableMobileMenu, setEnableMenu] = useState(false);

  return (

        <div className="menu-container">
          
            <h1 className='main-title'><Link href="/">HappySoul <span className='main-title-separate'>Illustrate</span></Link></h1>
       
            <button
                id="burger"
                className={enableMobileMenu ? "open-main-nav is-open" : "open-main-nav"}
                onClick={()=>{setEnableMenu(!enableMobileMenu)}}
                >
            <span className="burger"></span>
            <span className="burger-text">Menu</span>
          </button>
          <nav className={enableMobileMenu ? "main-nav is-open" : "main-nav"} id="main-nav">
  
          <div>
            <ul>
              <li>
                <Link 
                href="/Home"
                onClick={()=>{setEnableMenu(!enableMobileMenu)}}
                >Home</Link>
              </li>
              <li>
                <Link 
                href="/About"
                onClick={()=>{setEnableMenu(!enableMobileMenu)}}
                >About me</Link>
              </li>
              <li>
                <Link 
                href="/Gallery"
                onClick={()=>{setEnableMenu(!enableMobileMenu)}}
                >Gallery</Link>
              </li>
              <li>
                <Link 
                href="/Contact"
                onClick={()=>{setEnableMenu(!enableMobileMenu)}}
                >Contact</Link>
              </li>
            </ul>
         
        </div>
          </nav>
        </div>



  );
}

export default Header
