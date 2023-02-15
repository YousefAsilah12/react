









import { data } from "../../data/data"
import { Card } from "../cards/Cards"
import { useState } from "react"
import "./Page.css"
import { Selected } from "../selected/Selected"
export function Page() {
  let [selectedData, setSelected] = useState([]);
  let [findData, setFindData] = useState(null);

  const max = 5;
  function setSelectedhandler(data) {
    let find = selectedData.find(item => item.name === data.name);
    if (find) {
      setFindData(true);
    } else {
      setFindData(null); // reset to null when a new item is selected
      if (selectedData.length < max) {
        setSelected(prevSelected => [...prevSelected, data]);
      }
    }
    console.log(selectedData);
  }


  return <div className="pageTemplate">
    <div className="header">
      <h1>Ninja Turtles</h1>
      <h2>Order Pizza with the turtles</h2>
    </div>
    <div className="cards">
      {data.map((item, index) => {
        return <Card data={item} key={index} setSelected={setSelectedhandler} ></Card>
      })}
    </div>

    <div className="cards"  >

      {selectedData.map((item, index) => {
        return <Selected key={index} data={item}></Selected>
      })}

    </div>
    <div>
      {selectedData.length >= max ? <h1>You cant select more than 5 </h1> : ""}
      {findData ? <h1>Item selected twice</h1> : null}
    </div>
  </div>
}