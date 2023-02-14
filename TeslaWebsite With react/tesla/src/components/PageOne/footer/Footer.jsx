import "./Footer.css"

export function Footer(){

const carInfo=[{h1:"3.1 s",p:"0 - 60 moh"},{h1:"3.1 s",p:"0 - 60 moh"},{h1:"3.1 s",p:"0 - 60 moh"}]

const data = ()=>{
  return carInfo.map((item,index)=>{
    return <div key={index}>
        <div>{item.h1}</div>
        <div>{item.p}</div>
    </div>
  })
}

return(
<div className="footer">
  <section className="footer-container">
  {data()}
  <div className="section-4">
          <a href="#" className="btn-buyNow"><span>Buy Now</span></a>
   </div>
  </section>
</div>
)}