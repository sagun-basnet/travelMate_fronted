import React from 'react';
import { FaStar,FaStarHalf } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Star({starCount}) {
  //for displaying star according to user ratting.
  const ratingStar = Array.from({length: 5}, (elem, index) =>{
    let number = index + 0.5;

    return (
      <span key={index}>
          {
              starCount >= index + 1 ? (
                  <FaStar className='starIcon'/>
              ) : starCount >= number ? (
                  <FaStarHalf className='starIcon'/>
              ) : (
                  <AiOutlineStar className='starIconO'/>
              )
          }
      </span>
    )
  });

  return (
        <div className="icon-style">
            {ratingStar}
        </div>
  )


}

export default Star
