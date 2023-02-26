import React from 'react';
import './spinner.css';

export function Spinner({ type }) {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
}

export default Spinner;
