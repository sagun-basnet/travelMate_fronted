import React, { useContext, useState } from 'react';
import esewaLogo from "../../img/esewa_logo.png";
import Logo from '../../img/logo4.png';
import "./package.css";
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import { BookingContext } from '../../context/bookingContex';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';

function EsewaPayment() {

    // for conformation
    const [openModal, setOpenModal] = useState(false)

    const navigate = useNavigate();

  const { bookingData } = useContext(BookingContext);
  const { currentUser } = useContext(AuthContext);

  const { id } = currentUser;

  // Access the booking data
  const { productId, cost, selectedDate } = bookingData;
  const offset = selectedDate.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
const adjustedDate = new Date(selectedDate.getTime() - offset);
const sqlFormattedDate = adjustedDate.toISOString().split('T')[0];
console.log("formatted date: " + sqlFormattedDate);

  const dateString = selectedDate;
  const dateFormate = new Date(dateString);
  // console.log(dateFormate);
  const handlePayment = async () => {
    // Create the data object to send to the server
    const data = {
      id,
      productId,
      cost,
      sqlFormattedDate,
    };

    try {
      // Make a POST request to the server with the data
      const response = await axios.post('http://localhost:5000/api/book', data);
      console.log(response.data); // You can handle the response as needed

      navigate('/package/afterBooking')
    } catch (error) {
      console.log(error.response.data); // Handle the error response
    }
  };

  return (
    <div className='paymentMainDiv'>
      <div className="paymentDiv">
        <h1>Easy Payment With Esewa.</h1>
        <form>
          <img src={esewaLogo} alt="" />
          <input type="number" placeholder='Enter your phone number' name='esewaNum' />
          <input type="password" placeholder='Enter your MPIN' name='esewaPassword' />
          <input type="number" name='esewaCost' value={cost} readOnly />
          <div className="paymentLine">
            <span>to</span>
          </div>
          <input type="number" name="myPhone" value="9812389459" readOnly />
          <div className="buttons">
            <button type="button" onClick={() => {setOpenModal(true)}}>Done</button>
            <Link style={{ textDecoration: "none" }} to="/package">
              <button className='cancelBtn'>Cancel</button>
            </Link>
          </div>
        </form>
      </div>
      {
        openModal &&
        <div className='modalBackground'>
          <div className="modalContainer">
            <img src={Logo} alt="" />
            <button className="modalCloseBtn" onClick={() => {setOpenModal(false)}}><AiOutlineClose style={{fontWeight:"bolder"}}/></button>
            <div className="modalBody">
              <h3>Are you sure want to Pay Rs. {cost} to 9812389459 ?</h3>
            </div>
            <div className="modalFooter">
              <button onClick={handlePayment}>Pay</button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default EsewaPayment;
