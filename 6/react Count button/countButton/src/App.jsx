import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Clicker } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Clicker />
  )
}

export default App
