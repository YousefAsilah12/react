import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Card } from './components/card' ;
function App() {

return (
  <div className='appContainer'>

<Card title="random Title-1" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></Card>
<Card title="random Title-2" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"></Card>
<Card title="random Title-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcxlfh-mkoT2-n23SPzQinj44dhvgZ99i94iDNaLHxsWDLuUQeCluQT1dN_c9GjvbmwHk&usqp=CAU"></Card>
  </div>

)
}

export default App