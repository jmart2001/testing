import "./Header.css";
import React, { useState } from 'react';

function Home() {
return (
    <a href="/" target="_blank">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Home
    </button>
    </a>
    );
}
function Recipe() {
return (
    <a href="/RepGen" target="_blank">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Recipe Generator
    </button>
    </a>
    );
}
function Price() {
return (
    <a href="/PriCom" target="_blank">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Price Comparator
    </button>
    </a>
    );
}
function Profile() {
return (
    <a href="/Prof" target="_blank">
    <button style={{fontFamily: 'cursive',fontSize: '25px'}}>
        Profile
    </button>
    </a>
    );
}

function Header() {
    return (
      <header className="header">
        <nav>
          <ul className="right">
            <div style = {{textAlign: 'left'}}>WhatToCook</div>
            <Home/>
            <Recipe/>
            <Price/>
            <Profile/>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
  