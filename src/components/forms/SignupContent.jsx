import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function SignupContent() {
  const [inputs, setInputs] = useState({
    user_name: "",
    email:"",
    password:"",
    user_phone:"",
  })
  const [err, setErr] = useState(null);


  const handleChange = e => {
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value }))
  };

  const handleClick = async e=>{
    e.preventDefault();

    try{
      await axios.post("http://localhost:5000/api/auth/register", inputs)
    }catch(err){
      setErr(err.response.data);
    }
  }

  console.log(err);
  return (
    <div className='loginMainDiv'>
      <div className="loginDiv">
        <div className="right">
            <h2 style={{position: "fixed", top: "15rem"}}>Register</h2>
            <form action="">
                <input type="text" placeholder='Enter Your Full Name' name='user_name' onChange={handleChange}/>
                <input type="text" placeholder='Enter Your Phone Number' name='user_phone' onChange={handleChange} />
                <input type="email" placeholder='Enter Your Email' name='email' onChange={handleChange}/>
                <input type="password" placeholder='Enter Your Password' name='password' onChange={handleChange}/>
                <h6 style={{color: "red"}}>{err && err}</h6>
                <input type="button" value='Signup' onClick={handleClick}/>
            </form>
        </div>
        <div className="left">
            <div className="imgDivReg">
                <div className="dark">
                    <h2>Hello! Welcome to</h2>
                    <h1>TravelMate</h1>
                    <p>Hello there, By creating an account with us, you'll have access to a range of exclusive features and benefits. You'll be able to create a personalized travel itinerary, save your favorite destinations and attractions, and receive special offers and discounts that are tailored to your interests. <br /> <br />
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
