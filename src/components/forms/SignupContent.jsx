import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useFormik } from 'formik';
import { signUpSchema } from '../../schemas';

const initialValues = {
  name: "",
  phone: "",
  email: "",
  password: "",
}


export default function SignupContent() {
  const [inputs, setInputs] = useState({});
  const [err, setErr] = useState(null);

  const navigate = useNavigate();


  const handleClick = async e =>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:5000/api/auth/register", inputs)
      navigate("/login");  
    }catch(err){
      setErr(err.response.data);
    }
  }
  const {values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      setInputs({
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
      });
      // console.log(values);
    },
  });

  const handleMyChange = (e) =>{
    // handleChange(e);
    // if()
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  
  
  
  // console.log(inputs);
  return (
    <div className='loginMainDiv'>
      <div className="loginDiv">
        <div className="right">
          <h2 style={{}}>Register</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Your Full Name' name='name' value={values.name}  onChange={(e) =>{
              handleChange(e);
              handleMyChange(e);
            }} onBlur={handleBlur} />
            <span style={{ height: "1.6rem", color: "red", marginLeft: "1rem"}}>{errors.name && touched.name ? (errors.name) : null}</span>
            <input type="text" placeholder='Enter Your Phone Number' name='phone' value={values.phone}   onChange={(e) =>{
              handleChange(e);
              handleMyChange(e);
            }} onBlur={handleBlur} />
            <span style={{ height: "1.6rem", color: "red", marginLeft: "1rem"}}>{errors.phone && touched.phone ? (errors.phone) : null}</span>
            <input type="email" placeholder='Enter Your Email' name='email' value={values.email}  onChange={(e) =>{
              handleChange(e);
              handleMyChange(e);
            }} onBlur={handleBlur} />
            <span style={{ height: "1.6rem", color: "red", marginLeft: "1rem"}}>{errors.email && touched.email ? (errors.email) : null}</span>
            <input type="password" placeholder='Enter Your Password' name='password' value={values.password} onChange={(e) =>{
              handleChange(e);
              handleMyChange(e);
            }} onBlur={handleBlur} />
            <span style={{ height: "1.6rem", color: "red", marginLeft: "1rem"}}>{errors.password && touched.password ? (errors.password) : null}</span>
            <span className='existError'>{err && <h6 style={{ color: "red" }}>{err}</h6>}</span>
            
            
            <input type="submit" value='Signup' onClick={handleClick}/>
          </form>
        </div>
        <div className="left">
          <div className="imgDivReg">
            <div className="dark">
              <h2>Hello! Welcome to</h2>
              <h1>TravelMate</h1>
              <p style={{textAlign: "justify"}}>Hello there, By creating an account with us, you'll have access to a range of exclusive features and benefits. You'll be able to create a personalized travel itinerary, save your favorite destinations and attractions, and receive special offers and discounts that are tailored to your interests. <br /> <br />
                <span>Already have an account?</span>
              </p>
              <div className="regBtns">
                <Link to="/login">
                  <button className='regBtn'>Login</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
