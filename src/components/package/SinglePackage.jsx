// Admin ra guide lai package book garna nadena hai 
import Logo from '../../img/logo4.png';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsFillChatLeftTextFill, BsFillBookmarkCheckFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import RatingSection from './RatingSection';
import UserReview from './UserReview';
import UserComment from './UserComment';
import { AuthContext } from '../../context/authContext';
import { BookingContext } from '../../context/bookingContex';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { AiOutlineClose } from "react-icons/ai";

export default function SinglePackage() {
  const [bookedData, setBookedData] = useState([]);
  // console.log(bookedData);

  const loadDatabooked = async () => {
    const response = await axios.get("http://localhost:5000/api/bookedDetail/get");
    setBookedData(response.data);
  };

  useEffect(() => {
    loadDatabooked();
  }, []);

  


  //for opening Modal
  const [openModal, setOpenModal] = useState(false);
  const { updateBookingData } = useContext(BookingContext);
  const navigate = useNavigate();
  const location = useLocation();
  const products = location.state;
  const { currentUser } = useContext(AuthContext);

  // Use state for changing image in main image
  const [mainImg, setMainImg] = useState(products.mainImg);

  // Use state for datePicker
  const [selectedDate, setSelectedDate] = useState(null);

  // For maximum selectable date
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 10);

  const isDateDisabled = currentUser === null;

  // Check if the book button should be disabled and change its text accordingly
  const getButtonText = () => {
    if (selectedDate === null) {
      return "Book";
    }
    if (currentUser === null) {
      return "Book";
    } else {
      const isBooked = allInfo.some(info => info.user_id === currentUser?.id && info.package_id === products.id);
      return isBooked ? "Cancel" : "Book";
    }
  };

  // Check if the book button should be disabled
  // Handle button click
  const handleButtonClick = () => {
    if (selectedDate === null) {
      return;
    }
    if (currentUser === null) {
      navigate('/login');
    } else {

      const isBooked = allInfo.some(info => {
        // console.log('info', info);
        // console.log('info.user_id:', info.user_id);
        // console.log('currentUser?.id:', currentUser?.id);
        // console.log('info.pac_id:', info.pac_id);
        // console.log('products.id:', products.id);

        return info.user_id === currentUser?.id && info.package_id === products.id;
      });
      // console.log("isBooking: "+ isBooked);
      if (isBooked) {
        axios.put(`http://localhost:5000/api/packages/${products.id}`, { status: null })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
        navigate('/');
      } else {
        updateBookingData(products.id, products.cost, selectedDate, products.pac_name, products.time);
        navigate('/package/esewa/payment');
      }
    }
  };

  //getting user, package, booking information from backend
  const [allInfo, setAllInfo] = useState([]);
  // console.log(allInfo);
  //package is booked or not
  const isPackageBooked = allInfo.some(info => info.status === 'booked' && products.id === info.package_id);

  const isThisUserBook = allInfo.some(info => info.user_id === currentUser?.id);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/allDetail/get");
    setAllInfo(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);


  //checking if this user have booked this package or not
  const isThisUserBooked = bookedData.some(info => {

    return info.id === currentUser?.id && info.pac_id === products.id;

  })
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
              currentUser && !isPackageBooked ?
                <span style={{ marginTop: "-0.6rem", color: "red" }}> <span style={{ fontWeight: "bolder", color: 'black' }}>Note:</span> Please select Date to book your package</span>
                :
                <></>
            }
            <div className="singlePageBtns">
              <div className="leftBtns">
                {
                  isPackageBooked && !isThisUserBook ?
                    <span style={{fontWeight:"bolder",textAlign:"center",color:"red"}}>This package has alreaady been booked. Sorry for the inconvenience</span>
                    :
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
                      <button className='myBtns' type='submit' onClick={handleButtonClick} disabled={currentUser?.role === 'admin' || currentUser?.role === 'guide'}>
                        <BsFillBookmarkCheckFill /> {getButtonText()}
                      </button>
                    </form>
                }

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
        <UserComment productId={products.id}/>
      </div>
      {isThisUserBooked ? <UserReview productId={products.id}/> : null}
      {
        openModal &&
        <div className='modalBackground'>
          <div className="modalContainer">
            <img src={Logo} alt="" />
            <button className="modalCloseBtn" onClick={() => { setOpenModal(false) }}><AiOutlineClose style={{ fontWeight: "bolder" }} /></button>
            {/* <div className="modalTitle">
              <h1>Are you Sure?</h1>
            </div> */}
            <div className="modalBody">
              <h3>Are you sure want to Cancel Booking?</h3>
            </div>
            <div className="modalFooter">
              <button /*onClick={handleLogout}*/>Yes</button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
