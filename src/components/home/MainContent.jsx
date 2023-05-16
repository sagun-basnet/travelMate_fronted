import React from 'react';
import PoolImg from '../../img/pool.avif'
import HomeImgDivs from './HomeImgDivs';
import BackImg from './BackImg';
import HomeSliders from './HomeSliders';

export default function MainContent() {
  return (
    <div>
      <div className="mainBody">
        <HomeImgDivs class="mainImgDiv indonesia" heading="D"/>
        <HomeImgDivs class="mainImgDiv france" heading="R"/>
        <HomeImgDivs class="mainImgDiv spain" heading="E"/>
        <HomeImgDivs class="mainImgDiv nepal" heading="A"/>
        <HomeImgDivs class="mainImgDiv germany" heading="M"/>
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
