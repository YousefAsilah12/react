import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box } from './box'
function App() {

    return (
      <div className="container">
        <Box size="small" />
        <Box size="medium" />
        <Box size="large" />
      </div>
    );  
}

export default App
