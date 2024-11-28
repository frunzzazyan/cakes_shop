import React from 'react'
import Header from './Header'
import SignUp from './SignUp'
import { useState } from 'react'

import "./styles/Authorization.css"
import Login from './Login'


const Authorization = () => {
  const [active, setActive] = useState(false)
  const [authorization, setAuthorization] = useState(false)
  return (
    <>
    <Header/>
    <div className="authorization">
        <div className="btns">
            <button className={(!active? "done": "")} onClick={()=>{
              setActive(false)
              setAuthorization(false)
              }} >SignUp</button>
            <button className={(active? "done": "")} onClick={()=>{
              setActive(true)
              setAuthorization(true)
              }}>Login</button>
        </div>
        {(authorization? <Login/> : <SignUp setActive={setActive} setAuthorization={setAuthorization}/>)}
    </div>
    </>
  )
}

export default Authorization