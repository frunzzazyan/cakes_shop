import { useEffect } from "react"
import "./styles/MessageHomePage.css"

const MesageHomePage = () => {

  // useEffect(()=>{
  //   fetch("http://localhost:3000/firstMessage")
  // },[])

  return (
    <>
    <div className="coments">
        <h2>Food Lover's Say</h2>
        <div className="coment"></div>
        <div className="coment"></div>
        <div className="coment"></div>
    </div>
    </>
  )
}

export default MesageHomePage