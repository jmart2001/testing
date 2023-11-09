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
            <a href="/">Home</a> <br />
            <a href="/RepGen">Recipe Generator</a> <br />
            <a href="/TriCom">Price Comparator</a> <br />
            <a href="/Profile">Profile</a> <br />
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
  