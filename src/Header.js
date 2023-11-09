import "./styles.css";
import React, { useState } from 'react';


function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <header className="header">
        <div className="logo">WhatToCook</div>
        <nav className="nav">
          <ul className="nav-list">
              <a href="/">Home</a>
            <li className="nav-item">
              <a href="/RepGen">Recipe Generator</a>
            </li>
            <li className="nav-item">
              <a href="/TriCom">Price Comparator</a>
            </li>
            <li className="nav-item">
              <a href="/Profile">Profile</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
  