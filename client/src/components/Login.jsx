import React from 'react'
import {Formik} from "formik"
import { schema } from './schemaYup/LoginSchema'

import "./styles/Login.css"

let initialValue = {
  email : "",
  password : ""
}

function mySubmit(values,{resetForm}){
    fetch("http://localhost:3000/auth/login", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(values)
    })
    .then(res=>res.json())
    .then(res=>{
        if(res.token != undefined){
            if(res._id == "6748d745b74fee05f24da681"){
                location.pathname = "/admin"
                localStorage.setItem("token" , res.token)
                localStorage.setItem("admin" , true)
            }else{
                location.pathname = "/profile"
                localStorage.setItem("token" , res.token)
            }
        }else{
            resetForm()
        }
    })
}


const Login = () => {
  return (
    <>
    <Formik initialValues={initialValue} validationSchema={schema} onSubmit={mySubmit}>
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => {
                    return <form className="login slide-left" action="" onSubmit={handleSubmit}>
                        <div className="input-div">
                            <input style={{ borderColor: (errors.email && touched.email ? "crimson" : "black") }} onChange={handleChange} onBlur={handleBlur} type="email" placeholder="email" name="email" id="email" />
                            <span>{errors.email && touched.email ? errors.email : ""}</span>
                        </div>
                        <div className="input-div">
                            <input style={{ borderColor: (errors.password && touched.password ? "crimson" : "black") }} onChange={handleChange} onBlur={handleBlur} value={values.password} type="password" placeholder="password" name="password" id="password" />
                            <span>{errors.password && touched.password ? errors.password : ""}</span>
                        </div>
                        <input className='scale-up-ver-center' disabled={!!Object.keys(errors).length} type="submit" value="Register"/>
                    </form>
                }}
            </Formik>
    </>
  )
}

export default Login