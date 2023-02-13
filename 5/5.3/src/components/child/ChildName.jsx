
import Color from '../color/Color';




import "./ChildName.css";


export default function Child(props){
return(
  <div className='childContainer'>
    <h3>{props.name}</h3>
    <Color color={props.color}></Color>
  </div>
)
}