







import "./Form.css"

import { useState } from 'react'

export function Form(props) {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'I read the term of the app ', checked: false },
    { id: 2, label: 'I accept the rerm of the app ', checked: false },
    { id: 3, label: 'I want to get weekly news letter', checked: true },
    { id: 4, label: 'I want to get sales and offers', checked: true },
  ]);

  function handleCheckboxChange(id) {
    const updateCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
    );

    setCheckboxes(updateCheckboxes);
  }

  return <div className="container">
    {checkboxes.map((ch) => {
      return (
        <div>
          <input type="checkbox" checked={ch.checked} onChange={() => handleCheckboxChange(ch.id)} />
          <label key={ch.id}>
            {ch.label}</label>
        </div>
      )
    })}
  </div>
}