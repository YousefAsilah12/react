import React from 'react';
import './App.css'
import {  Button} from "./components/button";

function App() {
  return (
    <div>
      <Button text="important" classDesc="bold" ></Button>
      <Button text="Not-important"></Button>
    </div>
  )
}

export default App
