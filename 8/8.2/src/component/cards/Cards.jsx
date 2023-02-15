




import "./Cards.css"
import {Button} from "../buttons/Button"
export function Card(props) {

  return (
    <div className="character-card">
      <h2 className="character-name">{props.data.name}</h2>
      <img className="character-image" src={props.data.img} alt={props.data.name} />
      <div className="character-buttons">
        {props.data.pizzaToppings.map((topping, index) => { return <Button setSelected={props.setSelected} key={index}   name={topping.name} image={topping.img} />})}
      </div>
    </div>
  );
}