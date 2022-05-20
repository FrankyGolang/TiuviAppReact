'use-strict'
import { Global } from './core/options.js';

import logo from './logo.svg';
import './App.css';


import FormReact from './core/FormReact.js';

import React, { useEffect, useState } from 'react';

import { sVoice } from './core/options.js';


var SVoice = sVoice.Speaker


function Example2() {
  const [data2, dataSet2] = useState(Global.NameUser);

  async function GetNameUser2() {

    dataSet2(Global.NameUser)

  }

  function read(){
    SVoice("Buenas, buenas" + data2)
  }

  useEffect(() => {

    GetNameUser2()

  }, [data2])


  return (
    <p onClick={read}>Buenas, buenas {Global.NameUser}</p>
  );
}


function Example() {
  const [data, dataSet] = useState("")

  async function GetNameUser() {
    const promise = await fetch(Global.UserView)
    const response = await promise.text()
    dataSet(response.toString())
  }

  useEffect(() => {

    GetNameUser()

  }, [])

  return (
    <p>Visitas: {data}</p>
  );
}

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Comenzando Tiuvi</h1>
        <Example2 />
        <Example />
        <FormReact />
      </header>
    </div>
  );
}

export default App;
