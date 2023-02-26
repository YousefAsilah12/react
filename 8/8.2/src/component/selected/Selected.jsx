






import "./Selected.css"
export function Selected(props){
  const color ="#8A00FF"
  console.log(color);
  return (
    <div className="selected-contaienr" style={{backgroundColor:color}}>
      <h1>{props.data.name}</h1>
      <img src={props.data.image}  alt={props.data.name} />
    </div>
  )
}