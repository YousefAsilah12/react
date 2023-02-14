
import { useState } from "react";

import "./box.css"
export function Box() {

  let [boxStatus, setBoxStatus] = useState(false);

  function click() {
    setBoxStatus(!boxStatus)

  }
  return <div className="container">
    <button onClick={click}>click/hide</button>
    <div className={"box" + (boxStatus ? " hideBox" : "")}></div>
  </div>
}