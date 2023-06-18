// Admin ra guide lai package book garna nadena hai 

import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsFillChatLeftTextFill, BsFillBookmarkCheckFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import RatingSection from './RatingSection';
import UserReview from './UserReview';
import UserComment from './UserComment';
import { AuthContext } from '../../context/authContext';
import { BookingContext } from '../../context/bookingContex';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function SinglePackage() {
  const { updateBookingData } = useContext(BookingContext);
  const navigate = useNavigate();
  const location = useLocation();
  const products = location.state;
  const { currentUser } = useContext(AuthContext);

  // Use state for changing image in main image
  const [mainImg, setMainImg] = useState(products.mainImg);

  // Use state for datePicker
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(selectedDate);

  // For maximum selectable date
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 10);

  const isDateDisabled = currentUser === null;

  // Check if the book button should be disabled
  const isButtonDisabled = () => {
    if (selectedDate === null){
      return true;
    }
    if (currentUser === null) {
      navigate('/login');
    }else {
      updateBookingData(products.id, products.cost, selectedDate, products.pac_name, products.time);
      navigate('/package/esewa/payment');
    }
  };

  return (
    <div style={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
      <div className="singlePackMainDiv">
        <h1>Adventure awaits around every corner.</h1>
        <div className="imgdesDiv">
          <div className="images">
            <div className="optionImg">
              <div className="option option1" onClick={() => setMainImg(products.mainImg)}>
                <img src={products.mainImg} alt="" />
              </div>
              <div className="option option2" onClick={() => setMainImg(products.img2)}>
                <img src={products.img2} alt="" />
              </div>
              <div className="option option3" onClick={() => setMainImg(products.img3)}>
                <img src={products.img3} alt="" />
              </div>
            </div>
            <div className="mainImg">
              <img src={mainImg} alt="" />
            </div>
          </div>
          <div className="vert-line"></div>
          <div className="singleDescription">
            <h1>{products.pac_name}</h1>
            <p>{products.pac_description}</p>
            <div className="costDiv">
              <div>
                <span>Total Cost:</span> <p>Rs. {products.cost}</p> <br />
              </div>
              <div>
                <span>Time: </span> <p>{products.time}</p>
              </div>
            </div>
            {
              currentUser ? 
                  <span style={{marginTop:"-0.6rem", color:"red"}}> <span style={{fontWeight:"bolder",color:'black'}}>Note:</span> Please select Date to book your package</span>
                  :
                  <></>
            }
            <div className="singlePageBtns">
              <div className="leftBtns">
                <form action="" className='bookingDateForm'>
                  <ReactDatePicker
                    className='datePicker'
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date()}
                    maxDate={maxDate}
                    placeholderText='Select Date'
                    disabled={isDateDisabled}
                    required
                  />
                  <SlCalender className='calenderIcon' />
                  <button className='myBtns' type='submit' onClick={isButtonDisabled} disabled={currentUser?.role === 'admin' || currentUser?.role === 'guide'}><BsFillBookmarkCheckFill /> Book</button>
                </form>
              </div>
              <div className="rightBtn">
                <button><BsFillChatLeftTextFill style={{ fontSize: "1.4rem" }} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overalRating">
        <RatingSection totalStar={products.star} />
        <UserComment />
      </div>
      {currentUser?.role === "user" ? <UserReview /> : null}
    </div>
  );
}
