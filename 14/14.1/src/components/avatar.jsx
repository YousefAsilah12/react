import { useEffect, useState } from "react"
import { getArr } from "../services/ApiData"

export const Avatar = () => {
  const [avatar, setAvatar] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // async function getavatar() {
  //   setIsLoading(true)
  //   const res = await getArr()
  //   console.log("result",res);
  //   setAvatar(res)
  //   setIsLoading(false)
  // }

  useEffect(() => {
    getArr().then(res => {
      debugger
      console.log("result", res);
      setAvatar(res)
      setIsLoading(false)
    })
  }, [])
  function clickFilter(e){
    
  }
  return (<>
    <div>
      <input type="text" onChange={clickFilter} />
    </div>
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        avatar.map((item) => (
          <div key={item.id.value}>
            <h1>{`${item.name.title}  ${item.name.first} ${item.name.last}`}</h1>
            <img
              src={item.picture.large}
              width=" 200px"
              style={{ borderRadius: "50%" }}
            />
          </div>
        ))
      )}
    </div>
  </>
  )
}
