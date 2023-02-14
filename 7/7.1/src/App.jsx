import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from './components/Button'

function App() {
  let selected = 'react'
  const [color, setColor] = useState(null);


//data that you get from the child component
  function handleData(data) {
    setColor(data);
  }
  
  return (
    <div className='container'>
      <Button color="red" onColor={handleData} />
      <Button color="black" onColor={handleData} />
      <Button color="green" onColor={handleData} />

      <h1>color Selected is : {color}</h1>
    </div>
  )
}

export default App
