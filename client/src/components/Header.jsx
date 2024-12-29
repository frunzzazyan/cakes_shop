import React, { useEffect, useState } from 'react'
import "./styles/Header.css"
import {Link} from "react-router-dom"

const Header = () => {
    const [token, setToken] = useState(undefined)
    useEffect(()=>{
        setToken(localStorage.getItem("token"))
    },[])
  return (
    <>
        <header>
            <div className="contact-logo">
                <div className="sites">

                </div>
                <h1>logo</h1>
                <div className="phone">
                    Call us : +374********
                </div>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cakes">Cakes</Link>
                <Link to="/contact">Contact US</Link>
                {(token? 
                <>
                <Link to="/profile">Profile</Link>
                <Link to="/" onClick={()=>{
                    localStorage.removeItem("token")
                    localStorage.removeItem("admin")
                    location.pathname = "/"
                    }}>LogOut</Link>
                </>
                : 
                <Link to="/authorization">Login/SignUp</Link>
                )}
            </nav>
        </header>
    </>
  )
}

export default Header