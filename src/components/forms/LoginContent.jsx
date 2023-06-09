import React, {  useContext, useState } from 'react';
import { useFormik } from 'formik';
// import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { signUpSchema } from '../../schemas';
import { AuthContext } from '../../context/authContext';

// import { AuthContext } from '../../context/authContext';

const initialValues = {
  email: "",
  password: "",
}

export default function LoginContent() {
  const [inputs, setInputs] = useState({});
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  

  const handleMyChange = (e) =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async e =>{
    e.preventDefault();
    try{
      await login(inputs)
      navigate("/");  
    }catch(err){
      setErr(err.response.data);
    }
  }

  const {values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      setInputs({
        email: values.email,
        password: values.password,
      });
      // console.log(values);
    },
  });

  

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
            <form action="" onSubmit={handleSubmit}>
                <input type="email" placeholder='Enter Email' name='email' onChange={(e) =>{
              handleChange(e);
              handleMyChange(e);
            }} onBlur={handleBlur} value={values.email}/>
                <span className='loginErrorMessage'>
                {errors.email && touched.email ? (errors.email) : null}
                </span>
                <input type="password" placeholder='Enter Password' name='password' onChange={(e) =>{
              handleChange(e);
              handleMyChange(e);
            }} onBlur={handleBlur} value={values.password}/>
                <span className='loginErrorMessage'>
                {errors.password && touched.password ? (errors.password) : null}
                </span>
                <input type="submit" value='Login' onClick={handleClick}/>
                <span className='incorrectError'>{err && <h6> {err}</h6>}</span>
            </form>
        </div>
      </div>
    </div>
  )
}
