import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { InputWithFocus } from './input'
function App() {
  const [count, setCount] = useState(0)

  return (
    <InputWithFocus />
  )
}

export default App
