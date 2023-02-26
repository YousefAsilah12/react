
export async function getArr() {
    try {
      const res = await fetch("https://randomuser.me/api/?results=2").then(res => res.json()).then(res=>res);
      return res.results;
    } catch (e) {
      console.log(e.message);
      return <>error</>
    }
  
}
