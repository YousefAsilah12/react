import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import ThemeContext from './ThemeContext';
import Navigation from './Navigation';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <Router>
          <Navigation toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
