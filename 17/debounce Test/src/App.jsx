import { useState, useEffect, useCallback, useRef } from 'react';
import reactLogo from './assets/react.svg';
import debounce from 'lodash/debounce';
import './App.css';

function App() {
  const [data, setData] = useState("");
  const debouncedSetData = useRef(debounce((value) => {
    setData(value);
  }, 1000)).current;

  function handleChange(event) {
    const newValue = event.target.value;
    debouncedSetData(newValue);
  }
//   const timer = setTimeout(() => {
//     setData(inputValue);
//   }, 1000)
//   return () => {
//     clearTimeout(timer)
//   };
// }, [inputValue])

  return (
    <div>
      <input type="text" onChange={handleChange} />
      {data && <h5>{data}</h5>}
    </div>
  );
}

export default App;