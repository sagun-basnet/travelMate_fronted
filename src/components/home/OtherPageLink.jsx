import React from 'react'
import './home.css';
import gettingStarted from '../../img/gettingStarted.svg'
import homeAbout from '../../img/homeAbout.svg'
import homePackage from '../../img/homePackage.svg'
import { NavLink } from 'react-router-dom'

export default function OtherPageLink() {
    return (
        <div>
            <div className="mainCardContainer">
                <NavLink className='homeLinks' to="/signup">
                    <div className="infoCard card1">
                        <h2>Getting Started</h2>
                        <img src={gettingStarted} alt="" />
                    </div>
                </NavLink>
                <NavLink className='homeLinks' to="/about">
                    <div className="infoCard card2">
                        <h2>About Us</h2>
                        <img src={homeAbout} alt="" />
                    </div>
                </NavLink>
                <NavLink className='homeLinks' to="/package">
                    <div className="infoCard card3">
                        <h2>Our plans/packages</h2>
                        <img src={homePackage} alt="" />
                    </div>
                </NavLink>


            </div>
        </div>
    )
}
