import React from "react";
import feedback from "../../img/feedback.svg";
import { MdFeedback } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import stars from "../../img/5-Star-Rating-PNG-File.png";
import UserComment from "./UserComment";
import FeedbackForm from "./FeedbackForm";

export default function FeedbackContent() {
  return (
    <div>
      <section id="feedback">
        <div className="feedback_header">
          <div className="left">
            <div className="content_div">
              <h2>WE WANT YOUR</h2>
              <h1>
                <span>FEEDBACK</span>
              </h1>
              <p>
                We hope that you have enjoyed the content that we have provided
                so far. As we strive to continuously improve, we would greatly
                appreciate your feedback. Your thoughts and opinions are
                important to us and will help us to better understand what you
                enjoy and what areas we can improve upon. Whether it's positive
                or constructive criticism, we welcome all feedback. Please take
                a moment to share your thoughts with us so that we can continue
                to provide you with the best possible content. Thank you for
                your time and support.
              </p>
              <br />
              <br />
              <br />
              <a href="#feedback_container">
                <button className="btn feedback_btn">Go Down</button>
              </a>
              <a href="#feedback_review" style={{marginLeft: "1.2rem"}}>
                <button className="btn feedback_btn">Review</button>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="img_div">
              <img src={feedback} alt="" />
            </div>
          </div>
        </div>
        <h1 className="feedback_slogan">
          Create <span>Memories</span> That Last for a <span>Lifetime</span>.
        </h1>
        <section id="background_photo">
          <div className="photoDiv"></div>
        </section>
        <section id="feedback_container">
          <div className="feedback_comment ">
            <h1>
              User <span>reviews</span>
            </h1>
            <p style={{fontSize: "1.3rem"}}>
              fell free to review our services. Following are the reviews given
              by other users
            </p>
            <div className="totalRevDiv container">
              <div className="totalUserDiv samebg">
                <h4>Total User</h4>
                <FaUsers className="users" />
                <span>512</span>
              </div>
              <div className="avgStarsDiv samebg">
                <h4>Average ratting</h4>
                <div className="stars">
                  <img
                    src={stars}
                    alt=""
                    style={{ height: "100%", width: "70%" }}
                  />
                </div>
                <span>5/5</span>
              </div>
              <div className="totalFeedDiv samebg">
                <h4>Total feedback</h4>
                <MdFeedback className="feed" />
                <span>28</span>
              </div>
            </div>
            <div className="userCommentDiv container">
              {/* <h1>
                User's <span>comments</span> / feedback
              </h1> */}
              <div className="commentDiv">
              <UserComment/>
              <UserComment/>
              <UserComment/>
              <UserComment/>
              <UserComment/>
              <UserComment/>
              <UserComment/>
              <UserComment/>
              <UserComment/>
              <UserComment/>
              <UserComment/>
              <UserComment/>
              <UserComment/>
              <UserComment/>
              </div>
            </div>
          </div>
          <div className="feedback_review" id="feedback_review">
            <h1>
              Provide Us <span>Feedback</span>
            </h1>
            <FeedbackForm/>
          </div>
        </section>
      </section>
      <div className="godownFeedback">
        <h5>scroll down</h5>
        <img
          src="https://lagoonservice.com/static.lagoonservice.com/img/icon/go-down-gif.gif"
          alt=""
        />
      </div>
    </div>
  );
}
