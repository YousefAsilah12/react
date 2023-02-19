import React from 'react';
import port1 from './assets/photos/port1.png';
import port2 from './assets/photos/port2.png';
import port1Color from './assets/photos/port1-color.jpg';
import port2Color from './assets/photos/port2-color.jpg';
import { useRef } from 'react';

export const Image = () => {
  const images = [port1, port1Color, port2, port2Color];
  const imageRefs = useRef(Array.from({ length: images.length }, () => React.createRef()));

  const handleMouseOver = (index) => {
    imageRefs.current[index].current.src = images[index + 1];
  };
  const handleMouseOut = (index) => {
    imageRefs.current[index].current.src = images[index];
  };

  return images.map((image, index) => {
    if(index %2!==0){
      return
    }
    return <img
      key={index}
      ref={imageRefs.current[index]}
      src={image}
      alt={`Image ${index + 1}`}
      onMouseOver={() => handleMouseOver(index)}
      onMouseOut={() => handleMouseOut(index)}
    />
  });
}
