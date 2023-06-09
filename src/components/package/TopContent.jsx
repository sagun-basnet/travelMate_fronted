import React from 'react';
import './package.css';
import { FcSearch } from "react-icons/fc";
import {useTypewriter, Cursor} from 'react-simple-typewriter';
// import goDown from '../../img/goDown.gif'

export default function TopContent() {
    const [text] = useTypewriter({
        words: ['Find yourself through travel.','Escape. Experience. Enjoy.', 'Discover the magic of new places.'],
        loop: {},
        typeSpeed: 70,
        deleteSpeed: 60,
    });

  return (
    <div className='topPackageContainer'>
        <div className="heading">
            <h1>Nepal's Coolest Travel Community</h1>
            <h2>
            <span>
                {text}
            </span>
            <span>
                <Cursor cursorStyle='|'/>
            </span>
            </h2>
        </div>
        <div className="search">
            <input type="text" name="search" id="search" placeholder='Enter your destination' />
            <div className="icon">
                <FcSearch className='searchBtn'/>
            </div>
        </div>
        <div className="scroll">
            <span>Scroll Down</span>
            <img src="https://lagoonservice.com/static.lagoonservice.com/img/icon/go-down-gif.gif" alt="" />

        </div>

        <div className="circlesContainerRight">
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
            <div className="circle circle4"></div>
            <div className="circle circle5"></div>
            <div className="circle circle6"></div>
            <div className="circle circle7"></div>
        </div>
        <div className="circlesContainerLeft">
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
            <div className="circle circle4"></div>
            <div className="circle circle5"></div>
            <div className="circle circle6"></div>
            <div className="circle circle7"></div>
        </div>
    </div>
  )
}
