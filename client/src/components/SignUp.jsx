import React from 'react'
import {Formik} from "formik"
import { schema } from './schemaYup/RegisterSchema'

import "./styles/SignUp.css"

let initialValue = {
  first_name : "",
  last_name : "",
  email : "",
  age : "",
  day : "",
  month : "",
  year : "",
  password : "",
  rpassword : "" 
}


const SignUp = ({setActive,setAuthorization}) => {

    function mySubmit(values){
    
      function calculateAge(values) {
          const birthDate = new Date(values.year, values.month - 1, values.day); // JavaScript-ում ամիսները սկսվում են 0-ից
          const currentDate = new Date();
          
          let age = currentDate.getFullYear() - birthDate.getFullYear();
          
          const isBirthdayPassed = 
              currentDate.getMonth() > birthDate.getMonth() ||
              (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());
      
          if (!isBirthdayPassed) {
              age -= 1; 
          }
      
          return age;
      }
      let ageUser = calculateAge(values)
      if(ageUser < 14 )alert("You are too young to enter. )")
        let newUser = {
            ...values,
            age : ageUser
        }
    
        console.log(newUser);
        
    
      fetch("http://localhost:3000/auth/register", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(newUser)
        })
    
        setActive(true)
        setAuthorization(true)
      }

  return (
    <>
      <Formik initialValues={initialValue} validationSchema={schema} onSubmit={mySubmit}>
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => {
                    return <form className="register slide-left" action="" onSubmit={handleSubmit}>
                        <div className="name">
                            <div className="input-div">
                                <input style={{ borderColor: (errors.first_name && touched.first_name ? "crimson" : "black") }} onChange={handleChange} onBlur={handleBlur} value={values.first_name} type="text" placeholder="first_name" name="first_name" id="fist_name" />
                                <span>{errors.first_name && touched.first_name ? errors.first_name : ""}</span>
                            </div>
                            <div className="input-div">
                                <input style={{ borderColor: (errors.last_name && touched.last_name ? "crimson" : "black") }} onChange={handleChange} onBlur={handleBlur} value={values.last_name} type="text" placeholder="last_name" name="last_name" id="last_name" />
                                <span>{errors.last_name && touched.last_name ? errors.last_name : ""}</span>
                            </div>
                        </div>
                        <div className="input-div">
                            <input style={{ borderColor: (errors.email && touched.email ? "crimson" : "black") }} onChange={handleChange} onBlur={handleBlur} type="email" placeholder="email" name="email" id="email" />
                            <span>{errors.email && touched.email ? errors.email : ""}</span>
                        </div>
                        <div className="age">
                            <div className="input-div">
                                <input style={{ borderColor: (errors.day && touched.day ? "crimson" : "black") }} onChange={handleChange} onBlur={handleBlur} value={values.day} type="number" placeholder="day" name="day" id="day" />
                                <span>{errors.day && touched.day ? errors.day : ""}</span>
                            </div>
                            <div className="input-div">
                                <input style={{ borderColor: (errors.month && touched.month ? "crimson" : "black") }} onChange={handleChange} onBlur={handleBlur} value={values.month} type="number" placeholder="month" name="month" id="month" />
                                <span>{errors.month && touched.month ? errors.month : ""}</span>
                            </div>
                            <div className="input-div">
                                <input style={{ borderColor: (errors.year && touched.year ? "crimson" : "black") }} onChange={handleChange} onBlur={handleBlur} value={values.year} type="number" placeholder="year" name="year" id="year" />
                                <span>{errors.year && touched.year ? errors.year : ""}</span>
                            </div>
                        </div>
                        <div className="input-div">
                            <input style={{ borderColor: (errors.password && touched.password ? "crimson" : "black") }} onChange={handleChange} onBlur={handleBlur} value={values.password} type="password" placeholder="password" name="password" id="password" />
                            <span>{errors.password && touched.password ? errors.password : ""}</span>
                        </div>
                        <div className="input-div">
                            <input style={{ borderColor: (errors.rpassword && touched.rpassword ? "crimson" : "black") }} onChange={handleChange} onBlur={handleBlur} value={values.rpassword} type="password" placeholder="password" name="rpassword" id="rpassword" />
                            <span>{errors.rpassword && touched.rpassword ? errors.rpassword : ""}</span>
                        </div>
                        <input className='scale-up-ver-center' disabled={!!Object.keys(errors).length} type="submit" value="Register"/>
                    </form>
                }}
            </Formik>
    </>
  )
}

export default SignUp