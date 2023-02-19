

import port1 from'./assets/photos/port1.png';
import port2 from'./assets/photos/port2.png';
import port1Color from'./assets/photos/port1-color.jpg';
import port2Color from'./assets/photos/port2-color.jpg';
import { useRef } from 'react';




function mouseOverHandle1(){
  refImg1.current.src=port1Color
}

function mouseOverHandle2(){
  refImg2.current.src=port2Color
}
export const Image=()=>{
  const refImg1=useRef(null);
  const refImg2=useRef(null);

  refImg1.current.src=port1;
  // refImg2.current.src=port2;

  return <div style={{display:"flex" ,gap:"2rem"}}>
    <img  src={port1}    alt="" />
    {/* <img   onMouseOver={mouseOverHandle2} alt="" /> */}
  </div>
 }