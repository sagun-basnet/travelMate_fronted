import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillStar,AiFillClockCircle } from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";

export default function Packages() {
  const navigate = useNavigate();

  const [packageCardInfo, setPackageCardInfo] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/package/get");
        setPackageCardInfo(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

  // const packageCardInfo = [
  //   {
  //     id: 1,
  //     pac_name: "Pokhara",
  //     pac_description: "Places to visit:- Phewa Lake, World Peace Pagoda, Sarangkot, Davis Falls, Gupteshwor Mahadev Cave. Travelling time:- 4 days 3 nightLorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eaque sint cumque soluta beatae nemo ullam consequatur eveniet perspiciatis sed ducimus, doloribus, aliquid modi laudantium quas dolores. Cupiditate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate sed quibusdam porro explicabo nobis provident, iusto exercitationem magnam. Dolor.",
  //       mainImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/62/71/2c/the-heart-soul-of-pokhara.jpg?w=600&h=400&s=1",

  //       img2:"https://cdn.kimkim.com/files/a/content_articles/featured_photos/5a193d2d43b3703410525ad95ef9cd065c9d92c6/big-22755a386af7fb4c78c668c102c0397d.jpg",

  //       img3:"https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/j6ze4abox5oelzmmsv5uvhhts95t_1598529537_shutterstock_1629691447.jpg",
  //     cost: 8000,
  //     pac_booked: 4,
  //     star: 4,
  //     time: "3 Days - 4 Days",
  //   },
  //   {
  //     id: 2,
  //     pac_name: "Mustang",
  //     pac_description: "Places to visit:- Lo Manthang, Muktinath Temple, Kagbeni, Ghar Gompa, Dhumba Lake. Travelling time:- 7 days 6 nightLorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eaque sint cumque soluta beatae nemo ullam consequatur eveniet perspiciatis sed ducimus, doloribus, aliquid modi laudantium quas dolores. Cupiditate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate sed quibusdam porro explicabo nobis provident, iusto exercitationem magnam. Dolor.",
  //       mainImg:"https://www.nepalhighlandtreks.com/uploads/articles/images/upper-mustang.jpg",

  //       img2:"https://cdn.kimkim.com/files/a/content_articles/featured_photos/5a193d2d43b3703410525ad95ef9cd065c9d92c6/big-22755a386af7fb4c78c668c102c0397d.jpg",

  //       img3:"https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/j6ze4abox5oelzmmsv5uvhhts95t_1598529537_shutterstock_1629691447.jpg",
  //     cost: 12000,
  //     pac_booked: 9,
  //     star: 5,
  //     time: "3 Days - 4 Days",
  //   },
  //   {
  //     id: 3,
  //     pac_name: "Chitwan",
  //     pac_description: "Places to visit:- Chitwan National Park, Rapti River, Bishazari Tal. Travelling time:- 3 days 2 nightLorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eaque sint cumque soluta beatae nemo ullam consequatur eveniet perspiciatis sed ducimus, doloribus, aliquid modi laudantium quas dolores. Cupiditate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate sed quibusdam porro explicabo nobis provident, iusto exercitationem magnam. Dolor.",
  //       mainImg:"https://cdn2.wanderlust.co.uk/media/1037/cropped-dreamstime_xxl_68762448.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=131522023390000000",

  //       img2:"https://cdn.kimkim.com/files/a/content_articles/featured_photos/5a193d2d43b3703410525ad95ef9cd065c9d92c6/big-22755a386af7fb4c78c668c102c0397d.jpg",

  //       img3:"https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/j6ze4abox5oelzmmsv5uvhhts95t_1598529537_shutterstock_1629691447.jpg",
  //     cost: 5000,
  //     pac_booked: 6,
  //     star: 4.5,
  //     time: "3 Days - 4 Days",
  //   },    
  //   {
  //     id: 4,
  //     pac_name: "Mustang",
  //     pac_description: "Places to visit:- Chhoser Cave, Charang Village, Dhakmar Village, Mustang Caves, and the Upper Mustang Trek. Travelling time:- 9 days 8 nightLorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eaque sint cumque soluta beatae nemo ullam consequatur eveniet perspiciatis sed ducimus, doloribus, aliquid modi laudantium quas dolores. Cupiditate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate sed quibusdam porro explicabo nobis provident, iusto exercitationem magnam. Dolor.",
  //       mainImg:"https://www.thirdrockadventures.com/assets-back/images/blog/dhakmar-upper-mustang.jpgHc2.jpg",

  //       img2:"https://cdn.kimkim.com/files/a/content_articles/featured_photos/5a193d2d43b3703410525ad95ef9cd065c9d92c6/big-22755a386af7fb4c78c668c102c0397d.jpg",

  //       img3:"https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/j6ze4abox5oelzmmsv5uvhhts95t_1598529537_shutterstock_1629691447.jpg",
  //     cost: 14000,
  //     pac_booked: 8,
  //     star: 4.2,
  //     time: "3 Days - 4 Days",
  //   },
  //   {
  //     id: 5,
  //     pac_name: "Pokhara",
  //     pac_description: "Places to visit:- Bindhyabasini Temple, International Mountain Museum, Begnas Lake and Rupa Lake, Peaceful Pokhara Garden, Gupteshwor Mahadev Cave. Travelling time:- 4 days 3 nightLorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eaque sint cumque soluta beatae nemo ullam consequatur eveniet perspiciatis sed ducimus, doloribus, aliquid modi laudantium quas dolores. Cupiditate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate sed quibusdam porro explicabo nobis provident, iusto exercitationem magnam. Dolor.",
  //     mainImg: "https://youimg1.tripcdn.com/target/100v1f000001h1di6BCEF.jpg?proc=source%2Ftrip",

  //     img2: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/5a193d2d43b3703410525ad95ef9cd065c9d92c6/big-22755a386af7fb4c78c668c102c0397d.jpg",

  //     img3: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/j6ze4abox5oelzmmsv5uvhhts95t_1598529537_shutterstock_1629691447.jpg",
  //     cost: 7500,
  //     pac_booked: 6,
  //     star: 4.5,
  //     time: "3 Days - 4 Days",
  //   },
  //   {
  //     id: 6,
  //     pac_name: "Mustang",
  //     pac_description: "Places to visit:- Jomsom, Marpha Village, Tangey Village, Thubchen Monastery. Travelling time:- 3 days 2 nightLorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eaque sint cumque soluta beatae nemo ullam consequatur eveniet perspiciatis sed ducimus, doloribus, aliquid modi laudantium quas dolores. Cupiditate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate sed quibusdam porro explicabo nobis provident, iusto exercitationem magnam. Dolor.",
  //       mainImg:"https://www.muchbetteradventures.com/magazine/content/images/2018/07/23114614/Mustang-Nepal-.jpg",

  //       img2:"https://cdn.kimkim.com/files/a/content_articles/featured_photos/5a193d2d43b3703410525ad95ef9cd065c9d92c6/big-22755a386af7fb4c78c668c102c0397d.jpg",

  //       img3:"https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/j6ze4abox5oelzmmsv5uvhhts95t_1598529537_shutterstock_1629691447.jpg",
  //     cost: 8000,
  //     pac_booked: 7,
  //     star: 5,
  //     time: "3 Days - 4 Days",
  //   },
  //   {
  //     id: 7,
  //     pac_name: "Chitwan",
  //     pac_description: "Places to visit:- Chitwan National Park, Rapti River, Bishazari Tal. Travelling time:- 3 days 2 nightLorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eaque sint cumque soluta beatae nemo ullam consequatur eveniet perspiciatis sed ducimus, doloribus, aliquid modi laudantium quas dolores. Cupiditate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate sed quibusdam porro explicabo nobis provident, iusto exercitationem magnam. Dolor.",
  //       mainImg:"https://cdn2.wanderlust.co.uk/media/1037/cropped-dreamstime_xxl_68762448.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=131522023390000000",

  //       img2:"https://cdn.kimkim.com/files/a/content_articles/featured_photos/5a193d2d43b3703410525ad95ef9cd065c9d92c6/big-22755a386af7fb4c78c668c102c0397d.jpg",

  //       img3:"https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/j6ze4abox5oelzmmsv5uvhhts95t_1598529537_shutterstock_1629691447.jpg",
  //     cost: 5000,
  //     pac_booked: 6,
  //     star: 4.5,
  //     time: "3 Days - 4 Days",
  //   },  
  //   {
  //     id: 8,
  //     pac_name: "Pokhara",
  //     pac_description: "Places to visit:- Phewa Lake, World Peace Pagoda, Sarangkot, Davis Falls, Gupteshwor Mahadev Cave. Travelling time:- 4 days 3 nightLorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eaque sint cumque soluta beatae nemo ullam consequatur eveniet perspiciatis sed ducimus, doloribus, aliquid modi laudantium quas dolores. Cupiditate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate sed quibusdam porro explicabo nobis provident, iusto exercitationem magnam. Dolor.",
  //       mainImg:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/62/71/2c/the-heart-soul-of-pokhara.jpg?w=600&h=400&s=1",

  //       img2:"https://cdn.kimkim.com/files/a/content_articles/featured_photos/5a193d2d43b3703410525ad95ef9cd065c9d92c6/big-22755a386af7fb4c78c668c102c0397d.jpg",

  //       img3:"https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/j6ze4abox5oelzmmsv5uvhhts95t_1598529537_shutterstock_1629691447.jpg",
  //     cost: 8000,
  //     pac_booked: 4,
  //     star: 4,
  //     time: "3 Days - 4 Days",
  //   },
  // ]
  

  return (
    <div className='mainPackagesDiv'>
      <h1 style={{fontSize: "3.4rem", fontWeight: "bolder", color:"#8870E6"}} >Our Packages</h1>
      <div className="packagesDiv">
        {packageCardInfo.slice(0).reverse().map((myPackage) => (
          <div className="package" key={myPackage.id}>
            <div className="img">
              <img src={myPackage.mainImg} alt="" />
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
              {/* <Link to={`/package/${myPackage.id}`}> */}
                <button onClick={() => navigate(`/package/${myPackage.id}`, { state: packageCardInfo[myPackage.id - 1] })}>View More</button>
              {/* </Link> */}
            </div>
            {/* {console.log(packageCardInfo[myPackage.id])} */}
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
