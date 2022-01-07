/* 
import logo from './logo.svg';
import './App.css';

import axios from "axios";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

/*
import {useState}
*/ 
import { useState } from "react";
/*

 */
export default function App() {
  return (
    <>
      <Header/>
      <Whatsapp />
    </>
  );
}

function Header() {
  return (
    <div className="bg-dark text-light p-3 ">
      MyChatApp
      <div>
        <div>by(Paurnima pardeshi)(078_kh)</div>
      </div>
    </div>
  );
  
}
function Whatsapp() {
  return (
    <div className="">
      <input className="m-3 p-3" type="text" placeholder="Lets chat here..." />
      <input className="p-3" type="button" value="SEND" />

    </div>
  );
}