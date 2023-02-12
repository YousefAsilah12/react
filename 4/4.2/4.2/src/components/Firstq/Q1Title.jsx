import React, { useState } from "react";

export function Q1Title(props) {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div>{props.title}</div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="slider"
        onChange={handleChange}
      />
      <p>Value: {value}</p>
    </div>
  );
}

