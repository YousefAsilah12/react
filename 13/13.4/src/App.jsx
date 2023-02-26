import React, { useState, useEffect } from 'react';
import Spinner from './spinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timer to simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Select a random spinner type on app load
  const spinnerTypes = ['spinner1', 'spinner2', 'spinner3'];
  const randomType = spinnerTypes[Math.floor(Math.random() * spinnerTypes.length)];

  return (
    <div className="App">
      {isLoading ? <Spinner type={randomType} /> : <h1>Content loaded!</h1>}
    </div>
  );
}

export default App;
