import React, { useEffect, useReducer, useState } from 'react'
import Header from './Header'
import { IoClose } from "react-icons/io5";
import { IoMdReverseCamera } from "react-icons/io";

import "./styles/Profile.css"

function reducer(state, {payload}){
    state = payload
    return state
}
let cartArr = []

const Profile = ({setToken}) => {
    const [userData, setUserData] = useState({})
    const [cart, dispatch] = useReducer(reducer, [])
    const [avatar, setAvatar] = useState(false)
    
    useEffect(() => {
        fetch("http://localhost:3000/auth/me", {
            method: "GET",
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(res=>{
                setUserData(res)
                localStorage.setItem("myId", res._id)
            })
            .catch((err)=>{
                setToken(false)
                localStorage.removeItem("token")
                location.pathname = "/"
            })

        return ()=>{   
            for(let i in localStorage){
                if(i.startsWith(`cart_${localStorage.getItem("myId")}`)){
                    console.log(userData)
                    cartArr.push(JSON.parse(localStorage.getItem(i)))
                }
            }
            dispatch({type : "PUSH_CART", payload : cartArr})
            cartArr = []
        }
    }, [])

    function handleAvatar(){
        setAvatar(!avatar)
    }
    
    return (
        <>
            <Header />
            <div className="profile">
                {(avatar? 
                <form action={`http://localhost:3000/profile/avatar${userData._id}`} method='post'  encType="multipart/form-data" className="avatar slide-in-elliptic-top-fwd">
                    <input type="file" name="avatar" />
                    <input type="submit" />
                </form> : "")}
                <div className="image-name">
                    <div className="image">
                        <img src={(!userData.avatar ? `http://localhost:3000/uploads/${userData.avatar}` : "https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png")} alt="" />
                        <div onClick={()=>handleAvatar()} className="svg">
                        <IoMdReverseCamera/>
                        </div>
                    </div>
                    <h1>{userData.first_name}_{userData.last_name}</h1>
                </div>
                <div className="info-user">
                    <h3>{userData.email}</h3>
                    <hr />
                    <h3>phone : {userData.phone_number}</h3>
                    <hr />
                    <h3>country : {userData.avatar}</h3>
                    <hr />
                    <h3>city : {userData.city}</h3>
                    <hr />
                    <h3>{userData.day}.{userData.month}.{userData.year}</h3>
                </div>
                <div className="cart">
                    {(cart.length >= 1 ? cart.map(elem=>{
                        return <div className='item' key={elem._id}>
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                            <div className="text">
                                <h2>{elem.name}</h2>
                                <h3>{elem.price}$</h3>
                            </div>
                            <IoClose onClick={()=>{
                                localStorage.removeItem(`cart_${userData._id}_${elem._id}`)
                                location.pathname = "/profile"
                            }}/>
                        </div>
                    })
                    :
                        <h1>datark</h1>
                    )}
                </div>
            </div>
        </>
    )
}

export default Profile