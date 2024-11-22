import React from 'react'
import "./styles/Header.css"
import {Link} from "react-router-dom"

const Header = () => {
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
                <Link to="/cart">Cart</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    </>
  )
}

export default Header