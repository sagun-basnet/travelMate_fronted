import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginContent() {
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
                <input type="email" placeholder='Enter Email'/>
                <input type="password" placeholder='Enter Password'/>
                <input type="button" value='Login'/>
            </form>
        </div>
      </div>
    </div>
  )
}
