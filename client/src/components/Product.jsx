import React, { useEffect, useState } from 'react'

import "./styles/Product.css"
import Header from './Header'

let cart = []
const Product = () => {
    const [product, setProduct] = useState({})
    const [userData, setUserData] = useState({})
    useEffect(()=>{
        setProduct(JSON.parse(localStorage.getItem("product")))

        fetch("http://localhost:3000/auth/me", {
            method: "GET",
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })    
        .then(res => res.json())
        .then(res=>setUserData(res))
    },[])

    function handleClick(){
        localStorage.setItem(`cart_${userData._id}_${product._id}`, JSON.stringify(product))
        location.pathname = "/profile"
    }

    return (
        <>
    <Header/>
    <div className='product'>
        <div className="image">
            <img src="" alt="" />
        </div>
        <div className="text">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h6>{product.price}$</h6>
        <button onClick={()=>handleClick()}>Add To Cart</button>
        </div>
    </div>
    </>
  )
}

export default Product