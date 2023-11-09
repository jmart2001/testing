import "./styles.css";
import React, { useState } from 'react';

function Home() {
return (
    <a href="/" target="_blank">
    <button style={{fontSize: '30px'}}>
        Home
    </button>
    </a>
    );
}
function Recipe() {
return (
    <a href="/RepGen" target="_blank">
    <button style={{fontSize: '15px'}}>
        Recipe Generator
    </button>
    </a>
    );
}
function Price() {
return (
    <a href="/PriCom" target="_blank">
    <button style={{fontSize: '15px'}}>
        Price Comparator
    </button>
    </a>
    );
}
function Profile() {
return (
    <a href="/Prof" target="_blank">
    <button style={{fontSize: '15px'}}>
        Profile
    </button>
    </a>
    );
}

function Header() {
    return (
      <header style= {{fontFamily: 'cursive'}} className="header">
        <div style = {{textAlign: 'left'}} className="logo">WhatToCook
        <nav className="nav">
          <ul style = {{textAlign: 'right'}} className="nav-list">
            <Home/>
            <Recipe/>
            <Price/>
            <Profile/>
          </ul>
        </nav>
        </div>
      </header>
    );
  }

export default Header;
  