import React from 'react'
import Map from './Map'

export default function ContactContent() {
  
  return (
    <div>
       <section id="contact">
        <div className="contact_div container">
          <h1 className="con_heading">Lets Talk</h1>
          <div className="contact_info">
            <div className="box">
              <div className="icon">
                <i className="fa fa-map-marker" aria-hidden="true" />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>Itahari, Sunsari, Nepal</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-phone" aria-hidden="true" />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>9812389459</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>travelmate@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact_form">
            <div className="image">
              {/* <img src="./svg/contact.svg" alt="" /> */}
            </div>
            <div className="form">
              <form id="form" action="https://formspree.io/f/xzbqqoga" method="POST">
                <h2>Send Message</h2>
                <div className="inputBox">
                  <input type="text" name="name" required="required" id="name" />
                  <span>Full Name</span>
                </div>
                <div className="inputBox">
                  <input type="text" name="email" required="required" id="email"/>
                  <span id="text">Email</span>
                </div>
                <div className="inputBox">
                  <textarea required="required" id="message" name='message' />
                  <span>Type your Message......</span>
                </div>
                <div className="inputBox buttonBox btn btn-primary">
                  <input type="submit" defaultValue="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="map">
        <h1 className="con_heading">Visit Us</h1>
        <div className="mapMainDiv container">
          <Map/>
        </div>
        </div>
      </section>
    </div>
  )
}
