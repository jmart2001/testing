import "./styles.css";
import "./Header.css";
import Header from './Header';
import React, { useState } from 'react';

function Capstone() {
  return (
    <a href="https://capstone.cse.sc.edu/milestone/research/#deliverables" target="_blank">
    <button style = {{color: 'white', fontSize: '20px', background: 'gray'}}>
      Capstone
    </button>
    </a>
  );
}

export default function App() {
  return (
    <div style={{background: 'lemonchiffon'}} className="App">
      <h1 style={{background: 'lemonchiffon'}}><Header/></h1>
    </div>
  );
}
