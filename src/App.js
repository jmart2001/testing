import "./styles.css";
import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Websites from './pages/websites';
import PropTypes from 'prop-types';


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
