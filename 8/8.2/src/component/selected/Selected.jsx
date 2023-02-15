






import "./Selected.css"
export function Selected(props){
  return (
    <div className="selected-contaienr">
      <h1>{props.data.name}</h1>
      <img src={props.data.image} alt={props.data.name} />
    </div>
  )
}