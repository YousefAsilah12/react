
import "./card.css"
export function Card(options){

  return(
    <div className="card">
    <div className="container">
      <div>
        <img className="img" src={options.src}  />
      </div>
      <div>
        <h1>{options.title}</h1>
        <p>{options.description}</p>
      </div>

      <div className="buttons">
        <button>share</button>
        <button>explore</button>
      </div>
    </div>
    </div>
  )
}