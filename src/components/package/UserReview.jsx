import React from 'react';
import FeedbackForm from "../feedback/FeedbackForm";

export default function UserReview({productId}) {
  return (
    <div className='userReview'>
      <div className="feedback_review" id="feedback_review">
            <h1>
              Provide Us <span>Feedback</span>
            </h1>
            <FeedbackForm productId={productId}/>
          </div>
    </div>
  )
}
