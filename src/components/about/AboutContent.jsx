import React from 'react'
import {Link} from 'react-router-dom'
export default function AboutContent() {
  return (
    <div>
       <section id="about">
        
        <div className="about_main_div">
          <div className="intro_div">
            <div className="intro_para">
            <h1>Discover a world of<br /><span className='mySpan'> Adventure</span></h1>
            <p>
              Welcome to travelMate, your ultimate guide to some of the
              most exciting and beautiful destinations around the world. Our aim
              is to provide you with an exceptional travel experience that will
              leave you with <span>unforgettable</span> memories. <br />
              Our company was founded with a passion for travel and a desire to
              share the joy of discovering new places and cultures with others. We
              have a team of experienced travel experts who have traveled
              <span>extensively</span> to different parts of the world and have a wealth of
              knowledge to share with you. <br />
              At our website, you will find a comprehensive guide to the
              <span>destinations</span> we promote, including details on their history,
              culture, cuisine, attractions, and more. Whether you're looking for
              a relaxing beach vacation or an <span>adventurous</span> trek through the
              mountains, we have something to offer for everyone. <br />
            </p>
              <div className="btns">
                <Link to="/contact"><button className="btnes">Contact</button></Link>
                <Link to="/package"><button className="btnes">Package</button></Link>

              </div>
              <br />
            </div>
            <div className="intro_img">
            </div>
          </div>
          <h1 style={{fontWeight: "bolder"}}>Our <span>Mission</span></h1>
          <div className="mission_div">
            <div className="mis_img">
              {/* <img src="./img/family.png" alt=""> */}
            </div>
            <div className="mis_para">
              Our mission at vis<span>T</span>our is to inspire and inform
              travelers from around the world, to help them discover the unique
              beauty and culture of our destination. We strive to provide
              comprehensive and up-to-date information about local attractions,
              events, and activities, as well as practical information such as
              transportation options and visa requirements. <br /> We are committed to
              promoting responsible and sustainable tourism practices, supporting
              local businesses, and reducing our environmental impact. We believe
              in the power of travel to bring people together, to foster
              understanding and appreciation for different cultures, and to create
              lifelong memories. <br /> Our goal is to provide exceptional customer
              service, to answer traveler's questions promptly, and to provide the
              support they need to plan and book their trip. We encourage
              travelers to engage with local communities, to learn about their
              culture and way of life, and to make a positive impact during their
              visit. <br /> At vis<span>T</span>our, we are dedicated to promoting our
              destination as a world-class travel destination, and to helping
              travelers create unforgettable experiences that they will cherish
              for a lifetime. <br />
              <a href="/package"><button className="btnes">Package</button></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
