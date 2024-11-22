import React, { useEffect, useReducer } from 'react'
import Header from './Header'
import "./styles/Home.css"
import InfoProducts from './InfoProducts'
import SlickReact from "./SlickReact"
import MessageHomePage from './MesageHomePage'

function reducer(state, {payload}){
  state = payload
  return state
}
const Home = () => {
    const [products, dispatch] = useReducer(reducer, [])
    useEffect(()=>{
      fetch("http://localhost:3000/")
      .then(res=>res.json())
      .then(res=>dispatch({type : "GET_PRODUCTS", payload : res}))
    },[])

  return (
    <>  
    <Header/>

    <div className="image">
      <img src="https://www.kitchenaid.com/is/image/content/dam/business-unit/kitchenaid/en-us/marketing-content/site-assets/page-content/pinch-of-help/35-types-of-cakes/35-Types-of-Cakes_Masthead.jpg?fit=constrain&fmt=jpg&wid=2875" alt="" />
      <div className="text">
      <h1>Healthy Mode Delicious Cake</h1>
      <button>ORDER NOW</button>
      </div>
    </div>

    <InfoProducts/>

    <div className='slick-div'>
      <SlickReact products={products}/>
    </div>

    <div className="posts-div">
     <MessageHomePage/> 
    </div>
    </>
  )
}

export default Home