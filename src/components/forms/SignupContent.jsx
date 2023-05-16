import React from 'react';
import { Link } from 'react-router-dom';

export default function SignupContent() {
  return (
    <div className='loginMainDiv'>
      <div className="loginDiv">
        <div className="right">
            <h2>Register</h2>
            <form action="">
                <input type="text" placeholder='Enter Your Full Name' />
                <input type="number" placeholder='Enter Your Phone Number' />
                <input type="email" placeholder='Enter Your Email'/>
                <input type="password" placeholder='Enter Your Password'/>
                <input type="button" value='Signup'/>
            </form>
        </div>
        <div className="left">
            <div className="imgDivReg">
                <div className="dark">
                    <h2>Hello! Welcome to</h2>
                    <h1>TravelMate</h1>
                    <p>Hello there, Here you can access all of the exciting features and benefits of being a member. By logging in, you will be able to view your personalized travel itinerary, access exclusive deals and discounts, and easily manage your bookings. If you're a first-time user, you can create an account by clicking on the "sign up" link below. <br /> <br />
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
