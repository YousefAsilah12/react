import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ toggleDarkMode, isDarkMode }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? 'Day Mode' : 'Night Mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
