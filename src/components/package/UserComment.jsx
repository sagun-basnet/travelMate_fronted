import React, { useEffect, useState } from 'react'
import './package.css';
import axios from 'axios';
import Star from './Star';

export default function UserComment({productId}) {
  const [allReview, setAllReview] = useState([]);
  // console.log(allReview);
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/allReview/get");
    setAllReview(response.data);
  };
  const formatDateTime = (isoDateTime) => {
    const dateObj = new Date(isoDateTime);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    return dateObj.toLocaleString("en-US", options);
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredReviews = allReview.filter((myReview) => myReview.packageId === productId);

  return (
    <div className='userCmt'>
      <h1>Your's Feedback</h1>
      <div className="commentDiv">
        {
          filteredReviews.length > 0 ? (

            filteredReviews.slice(0).reverse().map((myReview) => (
            <div className="cmt" key={myReview.id}>
              <div className="top">
                <div className="cmtLeft">
                  <div className="userName">
                    <div className="userpp">
                      {myReview.name.charAt(0).toUpperCase()}
                    </div>
                    <span>
                      {myReview.name}
                    </span>
                  </div>
                  <div className="date">
                    <span>{formatDateTime(myReview.time)}</span>
                  </div>
                </div>
                <div className="verticalLine"/>
                <div className="cmtRight userMess">
                  <p>{myReview.message}</p>
                </div>
              </div>
              <div className="down">
                <span>Rating :-</span>
                <div className="ratings">
                  <Star starCount={myReview.star}/>
                </div>
              </div>
            </div>
            ))
          ) : (
            <div className="noDataDiv" style={{height:"100%", display:"flex", alignItems:"center"}}>
              <h2 style={{textAlign:"center", width:"100%",fontWeight:"bolder",color:"rgb(127 127 127)"}}>No reviews Available at the Moment.</h2>
            </div>
          )
        }
      </div>
    </div>
  )
}
