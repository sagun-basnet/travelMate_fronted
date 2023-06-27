import React, { useContext, useState } from "react";
import svg from '../../img/feedbackForm.svg'
import StarRating from "../package/StarRating";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/authContext';
// import { BookingContext } from '../../context/bookingContex';

export default function FeedbackForm({productId}) {
  //to know current user
  const { currentUser } = useContext(AuthContext);

  const [rating, setRating] = useState(0);

  const [inputs, setInputs] = useState({
    uname: '',
    feedback: '',
    rating: 0
  });

  const [err, setErr] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/addReview", {
        ...inputs,
        productId: productId, // Include the productId in the inputs object
        userId: currentUser?.id,
      });
      toast.success('Review has been added!');
    }  catch (err) {
      setErr(err.response.data.message);
    }
    setInputs({
      uname: '',
      feedback: '',
      rating: 0
    });
  };

  const handleMyChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="formMainDiv container">
      <div className="svgDiv">
        <img src={svg} alt="" />
      </div>
      <div className="formDiv">
        <form action="">
          <input
            type="text"
            name="uname"
            placeholder="Enter your nickname to display in comment"
            onChange={handleMyChange}
            value={inputs.uname}
          />
          <textarea
            name="feedback"
            cols="30"
            rows="8"
            placeholder="Enter message here.."
            onChange={handleMyChange}
            value={inputs.feedback}
          ></textarea>
          <h4>Rating :-</h4>
          <div className="rating">
            <StarRating
              name="rating"
              rating={inputs.rating}
              onRating={(rate) => {
                setRating(rate);
                setInputs((prev) => ({
                  ...prev,
                  rating: rate,
                }));
              }}
            />
          </div>
          {err && <div className="error" style={{textAlign:"center", color:"red"}}>{err}</div>}
          <input type="button" value="Send" className="DoneBtn" onClick={handleClick} />
        </form>
        <ToastContainer />

      </div>
    </div>
  );
}
