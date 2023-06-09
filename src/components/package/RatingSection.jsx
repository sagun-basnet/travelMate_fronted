import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
import './package.css';

export default function RatingSection() {
    return (
        <div className='ratingMainDiv'>
            <div className="ratingTopDiv">
                <h4>What others think about the Package</h4>
                <div className="avgStarCount">
                    <div className="starTop">
                        <AiFillStar className='star' /> <span>4.2</span>
                    </div>
                    <div className="starDown">
                        <p>
                            Average Customer Rating

                        </p>
                    </div>
                </div>
            </div>
            <div className="ratingSearchBar">
                <input type="text" placeholder='Search topics and reviews'/>
                <FcSearch className='search'/>
            </div>

            <div className="ratingOveralDiv">
                <span>Rating</span>
                <div className="star5 starRate">
                    5 <AiFillStar className='star'/>
                    <div className="bar">
                        <div className="fill">

                        </div>
                    </div>
                    
                    102
                </div>
                <div className="star4 starRate">
                    4 <AiFillStar className='star'/>
                    <div className="bar">
                        <div className="fill">

                        </div>
                    </div>
                    
                    32
                </div>
                <div className="star3 starRate">
                    3 <AiFillStar className='star'/>
                    <div className="bar">
                        <div className="fill">

                        </div>
                    </div>
                    
                    0
                </div>
                <div className="star2 starRate">
                    2 <AiFillStar className='star'/>
                    <div className="bar">
                        <div className="fill">

                        </div>
                    </div>
                    
                    0
                </div>
                <div className="star1 starRate">
                    1 <AiFillStar className='star'/>
                    <div className="bar">
                        <div className="fill">

                        </div>
                    </div>
                    
                    0
                </div>
            </div>
        </div>
    )
}
