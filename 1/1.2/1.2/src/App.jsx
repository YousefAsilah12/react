import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
const data = ["hello", "world"];
const number1 = 5;
const number2 =6;
const string = "I love React!";
  return (
    <div className="App">
      <div>
        <p>{data.toString().split(',').join(' ')}</p>
        <p>res={number1+number2}</p>
        <p>length is :{string.length}</p>
      </div>
    </div>
  )
}

export default App
