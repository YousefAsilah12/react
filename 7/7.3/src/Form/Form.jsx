








import { useState } from "react"
import "./Form.css"
export function Form(props) {
  const [formData, setFormData] = useState({})
  

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }
  function submite(e) {
    e.preventDefault();
    console.log(formData);
    props.onFormFlag(!props.flag);
    props.onData(formData)
  }



  return <div>
    <form onSubmit={submite} className={ "formContainer"}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" onChange={handleChange} />

      <label htmlFor="lastName">last Name</label>
      <input type="text" name="lastName" onChange={handleChange} />

      <label htmlFor="Age">Age</label>
      <select name="Age" onChange={handleChange} >
        <option value="#"></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <label htmlFor="FreeText">Free Text</label>
      <textarea name="FreeText" cols="30" rows="10" onChange={handleChange}></textarea>

      <input type="submit" value="submit"  />
    </form>

  </div>
}