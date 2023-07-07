import React from "react";
import Slider from "react-slick";
import SliderCard from "../SliderCard";

export default function MySLIDER() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="mySlider">
      <Slider {...settings}>
        <div className="sliderCardDiv">
          <SliderCard 
          place="Chitwan"
          source="https://nomadicated.com/wp-content/uploads/2022/11/Things-to-Do-in-Chitwan-1-1024x683.jpg"
          />
        </div>
        <div className="sliderCardDiv">
          <SliderCard 
          place="Pokhara"
          source="https://youimg1.tripcdn.com/target/100v1f000001h1di6BCEF.jpg?proc=source%2Ftrip"
          />
        </div>
        <div className="sliderCardDiv">
          <SliderCard 
          place="Mustang"
          source="https://www.muchbetteradventures.com/magazine/content/images/2018/07/23114614/Mustang-Nepal-.jpg"
          />
        </div>
        <div className="sliderCardDiv">
          <SliderCard 
          place="Comming soon"
          source=" "
          />
        </div>
        <div className="sliderCardDiv">
          <SliderCard 
          place="Comming soon"
          source=" "
          />
        </div>
        {/* <div className="sliderCardDiv">
          <SliderCard 
          place="Italy"
          source="https://cdn.pixabay.com/photo/2016/04/15/13/30/fassa-valley-1331004_960_720.jpg"
          />
        </div>
        <div className="sliderCardDiv">
          <SliderCard 
          place="Spain"
          source="https://www.travelanddestinations.com/wp-content/uploads/2019/06/Seville-Places-to-visit-in-Spain.jpg"
          />
        </div>
        <div className="sliderCardDiv">
          <SliderCard 
          place="Nepal"
          source="https://www.state.gov/wp-content/uploads/2019/04/Nepal-2123x1406.jpg"
          />
        </div>
        <div className="sliderCardDiv">
          <SliderCard 
          place="India"
          source="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg"
          />
        </div>
        <div className="sliderCardDiv">
          <SliderCard 
          place="China"
          source="https://www.planetware.com/wpimages/2020/01/china-in-pictures-beautiful-places-to-photograph-the-great-wall.jpg"
          />
        </div> */}
        
      </Slider>
    </div>
  );
}
