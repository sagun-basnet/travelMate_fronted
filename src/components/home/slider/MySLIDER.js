import React from "react";
import Slider from "react-slick";
import SliderCard from "../SliderCard";

export default function MySLIDER() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div className="mySlider">
      <Slider {...settings}>
        <div className="sliderCardDiv">
          <SliderCard 
          place="France"
          source="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          />
        </div>
        <div className="sliderCardDiv">
          <SliderCard 
          place="Thailand"
          source="https://d240vg222euz94.cloudfront.net/media/uploads/images/a5981c45-4f4d-44b8-a581-d9b10985fcb7.jpeg"
          />
        </div>
        <div className="sliderCardDiv">
          <SliderCard 
          place="Indonesia"
          source="https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg"
          />
        </div>
        <div className="sliderCardDiv">
          <SliderCard 
          place="Switzerland"
          source="https://cdn.britannica.com/65/162465-050-9CDA9BC9/Alps-Switzerland.jpg"
          />
        </div>
        <div className="sliderCardDiv">
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
        </div>
        
      </Slider>
    </div>
  );
}
