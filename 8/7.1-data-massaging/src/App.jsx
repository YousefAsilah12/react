import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Names } from './components/names/Names'
import { Card } from './components/oldPeople/Card'
import { names, bornBefore1990 } from './data/data'
function App() {





  return (
    <div>
      <h1>Names: </h1>
      <div className='names'>
        {names.map((name, index) => { return <Names name={name} key={index} /> })}
      </div>

      <h2> born Before 1990: </h2>
      {bornBefore1990.map((obj, index) => { return <Card name={obj.name} birthday={obj.birthday} favFood={obj.favoriteFoods}  key={index} /> })}
    </div>
  )
}

export default App
