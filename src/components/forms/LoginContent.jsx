import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/authContext';

export default function LoginContent() {
  const [inputs, setInputs] = useState({
    email:"",
    password:"",
  })
  const [err, setErr] = useState(null);


  const handleChange = (e) => {
    // console.log(e.value);
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value }))
  };

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  const handleLogin = async (e) =>{
    e.preventDefault();
    try{
      await login(inputs);
      if(inputs.email === "superadmin@gmail.com"){
        navigate("/admin/dashboard ");
      }
      else{
        navigate("/");
      }

    }catch(err){
      // console.log(err.response);
      setErr(err.response.data);
    }
  }
  return (
    <div className='loginMainDiv'>
      <div className="loginDiv">
        <div className="left">
            <div className="imgDiv">
                <div className="dark">
                    <h2>Hello! Welcome to</h2>
                    <h1>TravelMate</h1>
                    <p>Hello there, Here you can access all of the exciting features and benefits of being a member. By logging in, you will be able to view your personalized travel itinerary, access exclusive deals and discounts, and easily manage your bookings. If you're a first-time user, you can create an account by clicking on the "sign up" link below. <br /> <br />
                    <span>Don't you have an account?</span>
                    </p>
                    <div className="regBtns">
                    <Link to="/signup">
                        <button className='regBtn'>Signup</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="right">
            <h2>Login</h2>
            <form action="">
                <input type="email" placeholder='Enter Email' name='email' onChange={handleChange}/>
                <input type="password" placeholder='Enter Password' name='password' onChange={handleChange}/>
                <h6 style={{color: "red"}}>{err && err}</h6>
                <input type="button" value='Login' onClick={handleLogin}/>
            </form>
        </div>
      </div>
    </div>
  )
}
