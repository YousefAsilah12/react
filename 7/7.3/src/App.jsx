import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Form } from "./Form/Form";
import { Details } from "./Details/Details";
function App() {


  const [form, setForm] = useState({})
  const [flag, setFlag] = useState(true)



  function handleForm(data) {
    setFlag(data);
  }
  function handleData(data){
    setForm(data);
  }
  function flagHandler(data) {
    console.log("app", data);
    setFlag(data);
  }

  return (
    <div>
      <div className={flag ? "" : "exit"}>
        <Form onFormFlag={handleForm} flag={flag} onData={handleData} ></Form>
      </div>

      <div className={!flag ? "" : "exit"}>
        <Details data={form}  flag={flag} onFlag={flagHandler}></Details>
      </div>

    </div>

  )
}

export default App
