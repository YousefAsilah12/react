
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Mid } from "./mid/Mid";
import "./PageOne.css"


export function PageOne(props){

return (
  <div className="pageOne-container">

  <Header>{props.children}</Header>
  <Mid>{props.children}</Mid>
  <Footer>{props.children}</Footer>
  </div>
)
}