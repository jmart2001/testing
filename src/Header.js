import "./styles.css";
import React, { useState } from 'react';


function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <header className="header">
        <div style = {{textAlign: 'left'}} className="logo">WhatToCook</div>
        <nav className="nav">
          <ul style = {{textAlign: 'right', size: '15px'}} className="nav-list">
            <a href="/">
                <Button>Home{' '}</Button>
            </a>
            <a href="/RepGen">Recipe Generator{' '}</a>
            <a href="/TriCom">Price Comparator{' '}</a>
            <a href="/Profile">Profile{' '}</a>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
  