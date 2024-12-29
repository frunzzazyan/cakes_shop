import React, { useEffect, useState } from 'react'
import Header from './Header'

const Admin = () => {
  const [productsCount, setProductsCount] = useState(0)
  const [usersCount, setUsersCount] = useState(0)

  const [userId, setUserId] = useState("")
  const [productId, setProductId] = useState("")

  useEffect(()=>{
    fetch("http://localhost:3000/admin/products/count")
    .then((res)=>res.json())
    .then((res)=>setProductsCount(res.productsCount))

    fetch("http://localhost:3000/admin/users/count")
    .then((res)=>res.json())
    .then((res)=>setUsersCount(res.usersCount))
  },[])

  return (
    <>
    <Header/>
    <h1>products count _ {productsCount}</h1>
    <h1>users count _ {usersCount}</h1>
    <button>add product</button>

    <div className="delete-productId">
      <h2>delete product</h2>
      <input onChange={(e)=>setProductId(e.target.value)} type="text" placeholder='Id'/>
      <button onClick={()=>{
        if(productId){
          fetch(`http://localhost:3000/admin/products/delete/${productId}` , {
            method : "DELETE"
          })
          location.pathname = "/admin"
        }
        }}>delete</button>
    </div>

    <div className="delete-userId">
      <h2>delete user</h2>
      <input onChange={(e)=>setProductId(e.target.value)} type="text" placeholder='Id'/>
      <button onClick={()=>{
        if(userId){
          fetch(`http://localhost:3000/admin/products/delete/${userId}` , {
            method : "DELETE"
          })
          location.pathname = "/admin"
        }
      }}>delete</button>
    </div>
    </>
  )
}

export default Admin