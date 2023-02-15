import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Page } from './component/page/Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Page />
  )
}

export default App
