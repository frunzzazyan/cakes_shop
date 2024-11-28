import React from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import Authorization from './components/Authorization'

import "./components/styles/Animation.css"

const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cakes' element={<Products/>}/>
      <Route path='/authorization' element={<Authorization/>}/>
    </Routes>
    </>
  )
}

export default App