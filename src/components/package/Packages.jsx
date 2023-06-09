import React from 'react';
import { AiFillStar,AiFillClockCircle } from "react-icons/ai";
import {Link} from "react-router-dom";

export default function Packages() {

  const packageCardInfo = [
    {
      id: 1,
      pac_name: "Pokhara",
      pac_description: "Places to visit:- Phewa Lake, World Peace Pagoda, Sarangkot, Davis Falls, Gupteshwor Mahadev Cave. Travelling time:- 4 days 3 night",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/62/71/2c/the-heart-soul-of-pokhara.jpg?w=600&h=400&s=1",
      cost: 8000,
      pac_booked: 4,
      star: 4,
      time: "3D - 4D",
    },
    {
      id: 2,
      pac_name: "Mustang",
      pac_description: "Places to visit:- Lo Manthang, Muktinath Temple, Kagbeni, Ghar Gompa, Dhumba Lake. Travelling time:- 7 days 6 night",
      image: "https://www.nepalhighlandtreks.com/uploads/articles/images/upper-mustang.jpg",
      cost: 12000,
      pac_booked: 9,
      star: 5,
      time: "3D - 4D",
    },
    {
      id: 3,
      pac_name: "Chitwan",
      pac_description: "Places to visit:- Chitwan National Park, Rapti River, Bishazari Tal. Travelling time:- 3 days 2 night",
      image: "https://cdn2.wanderlust.co.uk/media/1037/cropped-dreamstime_xxl_68762448.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=131522023390000000",
      cost: 5000,
      pac_booked: 6,
      star: 4.5,
      time: "3D - 4D",
    },    
    {
      id: 4,
      pac_name: "Mustang",
      pac_description: "Places to visit:- Chhoser Cave, Charang Village, Dhakmar Village, Mustang Caves, and the Upper Mustang Trek. Travelling time:- 9 days 8 night",
      image: "https://www.thirdrockadventures.com/assets-back/images/blog/dhakmar-upper-mustang.jpgHc2.jpg",
      cost: 14000,
      pac_booked: 8,
      star: 4.2,
      time: "3D - 4D",
    },
    {
      id: 5,
      pac_name: "Pokhara",
      pac_description: "Places to visit:- Bindhyabasini Temple, International Mountain Museum, Begnas Lake and Rupa Lake, Peaceful Pokhara Garden, Gupteshwor Mahadev Cave. Travelling time:- 4 days 3 night",
      image: "https://youimg1.tripcdn.com/target/100v1f000001h1di6BCEF.jpg?proc=source%2Ftrip",
      cost: 7500,
      pac_booked: 6,
      star: 4.5,
      time: "3D - 4D",
    },
    {
      id: 6,
      pac_name: "Mustang",
      pac_description: "Places to visit:- Jomsom, Marpha Village, Tangey Village, Thubchen Monastery. Travelling time:- 3 days 2 night",
      image: "https://images.squarespace-cdn.com/content/v1/55d729cfe4b00ab3960e7989/1521854517507-NDA8CCDYZ3JP4LP3LP9Q/Bento+U+Mustang6-min.jpg?format=1000w",
      cost: 8000,
      pac_booked: 7,
      star: 5,
      time: "3D - 4D",
    },
    {
      id: 7,
      pac_name: "Chitwan",
      pac_description: "Places to visit:- Chitwan National Park, Rapti River, Bishazari Tal. Travelling time:- 3 days 2 night",
      image: "https://cdn2.wanderlust.co.uk/media/1037/cropped-dreamstime_xxl_68762448.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=131522023390000000",
      cost: 5000,
      pac_booked: 6,
      star: 4.5,
      time: "3D - 4D",
    },  
    {
      id: 8,
      pac_name: "Pokhara",
      pac_description: "Places to visit:- Phewa Lake, World Peace Pagoda, Sarangkot, Davis Falls, Gupteshwor Mahadev Cave. Travelling time:- 4 days 3 night",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/62/71/2c/the-heart-soul-of-pokhara.jpg?w=600&h=400&s=1",
      cost: 8000,
      pac_booked: 4,
      star: 4,
      time: "3D - 4D",
    },
    
  ]

  return (
    <div className='mainPackagesDiv'>
      <h1 style={{fontSize: "3.4rem", fontWeight: "bolder", color:"#8870E6"}} >Our Packages</h1>
      <div className="packagesDiv">
        {packageCardInfo.slice(0).reverse().map((myPackage) => (
          <div className="package" key={myPackage.id}>
            <div className="img">
              <img src={myPackage.image} alt="" />
            </div>
            <h1>{myPackage.pac_name}</h1>
            <div className="line"/>
            <div className="information">
              <span className='desc'> <span className='subheading'>Description:</span> {myPackage.pac_description.slice(0, 80)}...</span>
              <span className='cost'> <span className="subheading">Cost: </span>Rs.  {myPackage.cost}</span>
              <span className="time" style={{width: "100%",display: "flex", alignItems:"center"}}>
                <AiFillClockCircle style={{color: "#8870E6", fontSize: "1.2rem"}}/>:&nbsp;&nbsp;  {myPackage.time}
              </span>
              <span className="rating">
                <AiFillStar style={{color: "gold", fontSize: "1.2rem"}}/> {myPackage.star} ({myPackage.pac_booked})</span>
            </div>
            <div className="detailBtn">
              <Link to={`/package/${myPackage.id}`}>
                <button>View More</button>
              </Link>
            </div>
          </div>
        ))}
        <div className="nextBtn">
          <button>previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  )
}
