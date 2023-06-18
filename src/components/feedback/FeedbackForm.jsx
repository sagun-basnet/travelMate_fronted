import React, { useState } from "react";
import svg from '../../img/feedbackForm.svg'
import { AiFillStar } from "react-icons/ai";
import StarRating from "../package/StarRating";

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  
  return (
    <div className="formMainDiv container">
      <div className="svgDiv">
        <img src={svg} alt="" />
      </div>
      <div className="formDiv">
        <form action="">
            <input type="text" name="uname" id="" placeholder="Enter your nick name to display in comment" />
            <textarea name="feedback" id="" cols="30" rows="8" placeholder="Enter message here.."></textarea>
            <h4>Rating :-</h4>
            <div className="rating">
                <StarRating rating={rating} onRating={(rate) => setRating(rate)}/>
      
              
            </div>
            <input type="button" value="Done" className="DoneBtn"/>
        </form>
      </div>
    </div>
  );
}
