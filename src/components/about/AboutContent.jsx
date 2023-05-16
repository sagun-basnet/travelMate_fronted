import React from 'react'

export default function AboutContent() {
  return (
    <div>
       <section id="about">
        <h1>Discover a world of <span>Adventure</span></h1>
        <div className="about_main_div">
          <div className="intro_div">
            <div className="intro_para">
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
              We offer a wide range of services to ensure that your trip is as
              smooth and enjoyable as possible. From <span>accommodation</span> options and
              transportation services to guided tours and activities, we provide
              everything you need to make the most of your trip.
              <br />
              If you have any questions or would like to book your next trip,
              please don't <span>hesitate</span> to contact us. We're here to help you plan the
              perfect getaway and create <span>memories</span> that will last a lifetime. Thank
              you for choosing us as your travel partner.
              <br />
              <a href="/contact"><button className="btn">Contact</button></a>
            </div>
            <div className="intro_img">
              {/* <img src="./img/family.png" alt=""> */}
            </div>
            {/* <div class="back">
                
            </div> */}
          </div>
          <h1><span>Our</span> Mission</h1>
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
              <a href="/package"><button className="btn">Package</button></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
