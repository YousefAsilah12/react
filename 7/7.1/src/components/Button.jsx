




import "./Button.css"
export function Button(props) {


  //funtion that send the choosen button color to the parent component
  function handleClick() {
    props.onColor(props.color);
  }
  return <button className={"button"} style={{ backgroundColor: props.color }} onClick={handleClick}>{props.color}</button>
}