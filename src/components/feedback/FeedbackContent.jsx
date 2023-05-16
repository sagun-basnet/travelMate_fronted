import React from 'react';
import feedback from '../../img/feedback.svg'

export default function FeedbackContent() {
    return (
        <div>
            <section id="feedback">
                <div className="feedback_header">
                    <div className="left">
                        <div className="content_div">
                            <h2>WE WANT YOUR</h2>
                            <h1><span>FEEDBACK</span></h1>
                            <p>We hope that you have enjoyed the content that we have provided so far. As we strive to continuously improve, we would greatly appreciate your feedback. Your thoughts and opinions are important to us and will help us to better understand what you enjoy and what areas we can improve upon. Whether it's positive or constructive criticism, we welcome all feedback. Please take a moment to share your thoughts with us so that we can continue to provide you with the best possible content. Thank you for your time and support.</p>
                            <br /><br /><br />
                            <a href="#feedback_container"><button className="btn feedback_btn">Go Down</button></a>
                        </div>
                    </div>
                    <div className="right">
                        <div className="img_div">
                            <img src={feedback} alt="" />
                        </div>
                    </div>
                </div>
                <h1 className="feedback_slogan">Create <span>Memories</span> That Last for a <span>Lifetime</span>.</h1>
                <section id="background_photo">
                    <div className="photoDiv">
                    </div>
                </section>
                <section id="feedback_container">
                    <div className="feedback_container container">
                        <h1>Provide Us <span>Feedback</span></h1>
                    </div>
                </section>
            </section>
            <div className="godownFeedback">
                <h5>scroll down</h5>
                <img src="https://lagoonservice.com/static.lagoonservice.com/img/icon/go-down-gif.gif" alt="" />
            </div>
        </div>
    )
}
