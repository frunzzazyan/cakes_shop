import React ,{ useEffect, useState }from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import Authorization from './components/Authorization'

import "./components/styles/Animation.css"
import Profile from './components/Profile'
import Product from './components/Product'
import Admin from './components/Admin'

const App = () => {
  const [token, setToken] = useState(undefined)
    useEffect(()=>{
        setToken(localStorage.getItem("token"))
    },[])
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cakes' element={<Products/>}/>
      <Route path='/item' element={<Product/>}/>
      {(token? 
        <Route path='/profile' element={<Profile setToken={setToken}/>}/>
        :
        <Route path='/authorization' element={<Authorization/>}/>
        )}
      {(localStorage.getItem("admin") && token ? <Route path='/admin' element={<Admin/>}/> : "")}  
    </Routes>
    </>
  )
}

export default App