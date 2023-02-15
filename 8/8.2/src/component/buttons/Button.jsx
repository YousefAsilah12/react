import { useState } from "react"















export function Button(props) {

  function clickHandle(e) {
    props.setSelected(props)
  
  }

  return <button onClick={clickHandle}>{props.name}</button>
}