





import { useState } from "react";



export function Details(props) {

  function flagHandler(){
    props.onFlag(!props.flag);
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