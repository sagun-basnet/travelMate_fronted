import '../home.css';
import React from 'react';


import PoolImg from '../../../img/pool.avif'
import HomeImgDivs from '../HomeImgDivs';
import BackImg from '../BackImg';
import HomeSliders from '../HomeSliders';
import cloud1 from '../../../img/Cloud-PNG-2.png';
import cloud2 from '../../../img/Cloud-PNG-9.png';
import cloud3 from '../../../img/Cloud-PNG-10.png';
import cloud4 from '../../../img/Cloud-PNG-12.png';
import Ballon1 from '../../../img/balloon1.avif'
import Ballon2 from '../../../img/balloon2.avif'

export default function UserHome() {
  return (
    <div>
      <div className="mainBody">
        <div className="cloud">
          <img src={cloud1} alt="" style={{"--i":"1"}}/>
          <img src={cloud3} alt="" style={{"--i":"2"}}/>
          <img src={cloud2} alt="" style={{"--i":"3"}}/>
          <img src={cloud4} alt="" style={{"--i":"4"}}/>
          <img src={cloud1} alt="" style={{"--i":"5"}}/>
          <img src={cloud2} alt="" style={{"--i":"6"}}/>
          <img src={cloud4} alt="" style={{"--i":"7"}}/>
        </div>
        <div className="ballon1">
          <img src={Ballon1} alt="" />
        </div>
        
        <HomeImgDivs class="mainImgDiv indonesia" heading="D"
        />
        <HomeImgDivs class="mainImgDiv france" heading="R"
        />
        <HomeImgDivs class="mainImgDiv spain" heading="E"/>
        <HomeImgDivs class="mainImgDiv nepal" heading="A"/>
        <HomeImgDivs class="mainImgDiv germany" heading="M"/>
      </div>
      <div className="ballon2">
          <img src={Ballon2} alt="" />
        </div>
      <div className="pool">
        <img src={PoolImg} alt="" />
      </div>
      <BackImg/>
      <div className="">
        <HomeSliders heading="Popular"/>
        <HomeSliders heading="Recent"/>
        {/* <MySLIDER/> */}
      </div>
    </div>
  )
}
