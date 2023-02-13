import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Title from './components/Title/Title'
import Child from './components/child/ChildName'

function App() {
const kids= [
{ name: 'Ori', color: 'red' },
{ name: 'Ron', color: 'blue' },
{ name: 'Sigalit', color: 'green' },
{ name: 'Ruti', color: 'yellow' },
{ name: 'Alon', color: 'purple' },
]
return (
<div className='main-container'>
  <Title title="A Tale of Five Ballons"></Title>
  <div className='colorsContainer'>
  {kids.map((kid, index) => (
  <Child key={index} name={kid.name} color={kid.color}></Child>
  ))}
  </div>

</div>
)
}

export default App