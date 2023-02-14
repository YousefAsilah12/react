









import { useState } from "react";

import "./counter.css"


// i tried to make it shorter with using only one function
export function Buttons() {
  let [count, setCount] = useState(0);

  function changeCount(option) {
    if (option === "inc" && count < 10) {
      setCount(count += 1);
    }
    else if (option === "dec" && count > -10) {
      setCount(count -= 1);
    }
  }

  const labelClassName = count < 0 ? "minusColor" : count > 0 ? "positiveColor" : "";
  return <div>
    <h1 className={labelClassName}>{count}</h1>
    <button onClick={() => changeCount("inc")}>Increase</button>
    <button onClick={() => changeCount("dec")}>Decrease</button>
  </div>

}