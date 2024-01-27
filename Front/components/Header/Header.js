"use client";
import React, { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import "./menu.css"


function Header() {
  const [enableMobileMenu, setEnableMenu] = useState(false);

  return (

        <div className="menu-container">
            <button
                id="burger"
                className={enableMobileMenu ? "open-main-nav is-open" : "open-main-nav"}
                onClick={()=>{setEnableMenu(!enableMobileMenu)}}
                >
            <span className="burger"></span>
            <span className="burger-text">Menu</span>
          </button>
          <nav className={enableMobileMenu ? "main-nav is-open" : "main-nav"} id="main-nav">
          {enableMobileMenu && <Menu />}
          </nav>
        </div>



  );
}

export default Header
