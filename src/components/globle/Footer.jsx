import React from 'react'

export default function Footer() {
  return (
      <footer>
        <div className="footer_containerTop">
          <div className="footer_about">
            <div className="logo">
              <h2><a href="/">travelMate</a></h2>
            </div>
            <div className="about">
              <p>
                Welcome to travelMate! We are thrilled that you are
                considering us as your guide for exploring the world. <br />
                At our tourism website, we are passionate about sharing the most
                beautiful and unique destinations that the world has to offer. Our
                team of experienced travel experts has traveled extensively and
                can provide you with invaluable insights into various
                destinations, accommodations, and activities.
              </p>
            </div>
          </div>
          <div className="quick_links">
            <ul>
              <li>
                <a href="/" className="nav_links"><i className="uil uil-home" /> Home</a>
              </li>
              <li>
                <a href="/" className="nav_links"><i className="uil uil-lightbulb-alt" /> About</a>
              </li>
              <li>
                <a href="/" className="nav_links"><i className="uil uil-package" /> Package</a>
              </li>
              <li>
                <a href="/" className="nav_links"><i className="uil uil-envelope" /> Contact</a>
              </li>
              <li>
                <a href="/" className="nav_links"><i className="uil uil-feedback" /> Feedback</a>
              </li>
            </ul>
          </div>
          <div className="footer_contact">
            <div className="address fot_con">
              <i className="uil uil-location-pin-alt" />
              <div className="myDiv">
                <h2>Address</h2>
                <p>Sunsari, Nepal</p>
              </div>
            </div>
            <div className="phone fot_con">
              <i className="uil uil-phone" />
              <div className="myDiv">
                <h2>Phone</h2>
                <p>9812389459</p>
              </div>
            </div>
            <div className="email fot_con">
              <i className="uil uil-envelope" />
              <div className="myDiv">
                <h2>Email</h2>
                <p>travelmate@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="line" />
        <div className="footer_containerBot">
          <div className="copyright myDiv">
            <h4>Copyright © 2023 | travelMate.</h4>
          </div>
          <div className="social myDiv">
            <a href="/"><i className="uil uil-facebook" /></a>
            <a href="/"><i className="uil uil-twitter" /></a>
            <a href="/"><i className="uil uil-instagram-alt" /></a>
            <a href="/"><i className="uil uil-whatsapp-alt" /></a>
            <a href="/"><i className="uil uil-envelope" /></a>
          </div>
          <div className="goto myDiv">
            <a href="#navBar"><button className="topBtn" id="nav_toggle-open"><i className="uil uil-arrow-up" /></button></a>
            <p>Goto top</p>
          </div>
        </div>
      </footer>
  )
}
