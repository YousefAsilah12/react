import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data,setData ] = useState(getData())
  async function getData() {
    const response = await fetch("https://localhost:44318/api/Products/")
    const data= await response.json();
    console.log(data);
    return data
  }

  return (
      <div>
          hello
      </div>
  )
}

export default App
