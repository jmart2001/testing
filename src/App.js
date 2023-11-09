import "./styles.css";
import React, { useState } from 'react';

function Capstone() {
  return (
    <a href="https://capstone.cse.sc.edu/milestone/source-control/" target="_blank">
    <button style = {{color: 'white', fontSize: '20px', background: 'gray'}}>
      Capstone
    </button>
    </a>
  );
}

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item dropdown">
            <button onClick={toggleDropdown} className="dropdown-btn">
              Services
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="/service1">Service 1</a>
                <a href="/service2">Service 2</a>
                <a href="/service3">Service 3</a>
              </div>
            )}
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1 style={{background: 'yellow'}}><Header/></h1>
      <h1>Hello Capstone</h1>
      <h1>Hello Capstone</h1>
      <h1>Hello Capstone</h1>
      <h2 style={{textAlign: 'center'}}><Capstone/></h2>
    </div>
  );
}
