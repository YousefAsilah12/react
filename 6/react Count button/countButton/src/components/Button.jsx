



//hooks  - special functions that allow us to 
//useState

import { useState } from "react";





export function Clicker() {
  let [count ,setCount]=useState(0)
  function click() {
    setCount(count+= 1);
  }
  return (
    <div>
      <h1>number Changer</h1>
      <h1>{count}</h1>
      <button onClick={click}>clicker</button>
    </div>
  )
}