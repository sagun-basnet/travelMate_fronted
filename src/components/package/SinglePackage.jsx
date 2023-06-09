import React from 'react';
import { useContext,useState } from 'react';
import { BsFillChatLeftTextFill, BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdRateReview } from "react-icons/md";
import RatingSection from './RatingSection';
import UserReview from './UserReview';
import UserComment from './UserComment';
import { AuthContext } from '../../context/authContext';

export default function SinglePackage() {

  const { currentUser } = useContext(AuthContext);

  
  

  const products = [
    {
      id: 1,
      pac_name: "Mustang",
      img: [
        "https://www.muchbetteradventures.com/magazine/content/images/2018/07/23114614/Mustang-Nepal-.jpg",

        "https://cdn.kimkim.com/files/a/content_articles/featured_photos/5a193d2d43b3703410525ad95ef9cd065c9d92c6/big-22755a386af7fb4c78c668c102c0397d.jpg",

        "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,q_auto/v1/filestore/j6ze4abox5oelzmmsv5uvhhts95t_1598529537_shutterstock_1629691447.jpg"
      ],
      pac_description: "Places to visit:- Phewa Lake, World Peace Pagoda, Sarangkot, Davis Falls, Gupteshwor Mahadev Cave. Travelling time:- 4 days 3 nightLorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eaque sint cumque soluta beatae nemo ullam consequatur eveniet perspiciatis sed ducimus, doloribus, aliquid modi laudantium quas dolores. Cupiditate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate sed quibusdam porro explicabo nobis provident, iusto exercitationem magnam. Dolor.",
      star: 5,
      pac_booked: 7,
      cost: 12000,
      time: "3Days - 4Days"
    }
  ]

  //use state for changing image in main image
  const [mainImg, setMainImg] = useState(products[0].img[0]);
  // console.log(products[0].img);

  return (
    <div style={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
      <div className="singlePackMainDiv">
        <h1>Adventure awaits around every corner.</h1>
        <div className="imgdesDiv">
          <div className="images">
                <div className="optionImg">
                  <div className="option option1" onClick={() => setMainImg(products[0].img[0])}>
                    <img src={products[0].img[0]} alt="" />
                  </div>
                  <div className="option option2" onClick={() => setMainImg(products[0].img[1])}>
                    <img src={products[0].img[1]} alt="" />
                  </div>
                  <div className="option option3" onClick={() => setMainImg(products[0].img[2])}>
                    <img src={products[0].img[2]} alt="" />
                  </div>
                </div>
            <div className="mainImg">
              <img src={mainImg} alt="" />
            </div>
          </div>
          <div className="vert-line"></div>
          <div className="singleDescription">
            <h1>Mustang</h1>
            <p>Places to visit:- Phewa Lake, World Peace Pagoda, Sarangkot, Davis Falls, Gupteshwor Mahadev Cave. Travelling time:- 4 days 3 nightLorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eaque sint cumque soluta beatae nemo ullam consequatur eveniet perspiciatis sed ducimus, doloribus, aliquid modi laudantium quas dolores. Cupiditate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate sed quibusdam porro explicabo nobis provident, iusto exercitationem magnam. Dolor.</p>
            <div className="costDiv">
              <div>
                <span>Total Cost:</span> <p>Rs. 8000</p> <br />
              </div>
              <div>
                <span>Time: </span> <p>3Days - 4Days</p>

              </div>
            </div>
            <div className="singlePageBtns">
              <div className="leftBtns">
                <button className='myBtns'><BsFillBookmarkCheckFill /> Book</button>
                <button className='myBtns'><MdRateReview /> Review</button>
              </div>
              <div className="rightBtn">
                <button ><BsFillChatLeftTextFill style={{ fontSize: "1.4rem" }} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overalRating">
        <RatingSection />
        <UserComment />
      </div>
      {
        currentUser?.role === "user" ?
          <UserReview />
          :
          <></>
      }
    </div>
  )
}
