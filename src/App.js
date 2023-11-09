import "./styles.css";
import Header from './Header';
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

export default function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'left', background: 'lemonchiffon'}}><Header/></h1>
      <h1>Hello Capstone</h1>
      <h2 style={{textAlign: 'center'}}><Capstone/></h2>
    </div>
  );
}
