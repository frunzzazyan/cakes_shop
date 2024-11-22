import React from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products'

const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cakes' element={<Products/>}/>
    </Routes>
    </>
  )
}

export default App