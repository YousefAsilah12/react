







import "./Card.css"



export function Card(props) {
  return <div className="card">
    <h2>{props.name}</h2>
    <p>Birthday: {props.birthday}</p>
    <p>Favorite meats: {props.favFood.meats.join(", ")}</p>
    <p>Favorite fish: {props.favFood.fish.join(", ")}</p>
  </div>
}