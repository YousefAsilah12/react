import { useState } from "react"



import "./Button.css"
export function Button(props) {
  
  const style = {
    fontSize:"1rem",
    backgroundColor: "#8A00FF",
    color: "white",
    borderRadius: `20px`,
    padding: `1rem`,
    boxShadow: `0 0 10px black}`,
  }
  function clickHandle(e) {
    props.setSelected(props)

  }

  return <button style={style} className="btn" onClick={clickHandle}>{props.name}</button>
}


