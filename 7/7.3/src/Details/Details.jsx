





import { useState } from "react";



export function Details(props) {
  const [flag,setflag]=useState();
  

  function flagHandler(){
    setflag(!flag)
    props.onFlag(flag);
    console.log("details",flag)

  }

  return <div>
    <p>{props.data.firstName}</p>
    <p>{props.data.lastName}</p>
    <p>{props.data.Age}</p>
    <p>{props.data.FreeText}</p>
    <div>
      <button onClick={flagHandler} >back</button>
      <button onClick={() => alert("saved")}>save</button>
    </div>
  </div>


}