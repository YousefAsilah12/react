import "./Quiz.css"
import { Title} from "../Title/Title";
import { Q1Title} from "../Firstq/Q1Title";
import { SeqTitle} from "../Secq/SecqTitle";


export function Quiz(prop){
const title="How Do You Like Front End ?"
const Q1={title:"How much you love front end?"}
const Q2={title:"What is your favourite front end feature/topic ?"}
return(
<div className="Quiz">
  <Title title={title}></Title>
  <Q1Title title={Q1.title}></Q1Title>
  <SeqTitle title={Q2.title}></SeqTitle>
</div>
);
}