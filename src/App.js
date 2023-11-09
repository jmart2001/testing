import "./styles.css";
import React from 'react';

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
  return (
    <header>
      <nav>
        <ul>
          <a style={{align: 'right'}} href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
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
