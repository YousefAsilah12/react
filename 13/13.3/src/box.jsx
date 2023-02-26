import React, { useState, useEffect } from 'react';

export function Box() {
  const [colorIndex, setColorIndex] = useState(0);
  const [isCircle, setIsCircle] = useState(false);

  const colors = ['#FF4136', '#0074D9', '#2ECC40', '#FF851B', '#7FDBFF'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((colorIndex) => (colorIndex + 1) % colors.length);
      if (colorIndex >= 4) {
        setIsCircle(true);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [colorIndex]);

  const boxStyle = {
    backgroundColor: colors[colorIndex],
    borderRadius: isCircle ? '50%' : '0%',
    width: '200px',
    height: '200px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return <div className="box" style={boxStyle} />;
}
