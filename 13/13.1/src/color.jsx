import React, { useState, useEffect } from 'react';

function FavoriteColor() {
  const [favoriteColor, setFavoriteColor] = useState('blue');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFavoriteColor('green');
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <h1>My favorite color is {favoriteColor}</h1>
      <div id="empty-div"></div>
    </div>
  );
}

export default FavoriteColor;
