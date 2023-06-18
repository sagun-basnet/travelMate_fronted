import React from 'react';
import './style.css';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../img/logo4.png';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
import { RxDashboard } from "react-icons/rx";
import { AiOutlineDown } from "react-icons/ai";
import { AiFillSetting,AiOutlineClose } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";

export default function Navbar() {
  //to navigate the page from 1 page to another
  // const navigate = useNavigate();

  //to know error
  // const [err, setErr] = useState(null);

  //for knowing current user
  const { currentUser, logout } = useContext(AuthContext);


  //for opening logout option while clicking on profile
  const [openProfile, setOpenProfile] = useState(false);

  const handleLogout = () => {
    logout(); // Call the original logout function
    setOpenProfile(false); // Set openProfile to false after logout
    setOpenModal(false)
  };

  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <nav id='navBar'>
        <div className="logo">
          <div className="nav_logo">
            <NavLink to="/" className="nav_links"><img src={Logo} alt=" " /></NavLink>

          </div>
        </div>
        <div className="links links_container">
          <ul>
            <li>
              <NavLink to="/" className="nav_links"><i className="uil uil-home" /> Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav_links" ><i className="uil uil-lightbulb-alt" /> About</NavLink>
            </li>

            <li>
              <NavLink to="/package" className="nav_links" ><i className="uil uil-package" /> Package</NavLink>
            </li>
            {
              currentUser?.role === "admin" ?
                <li>
                  <NavLink to="/admin/dashboard" className="nav_links" target="_blank"><RxDashboard className='dash' /> Dashboard</NavLink>
                </li>
                :
                currentUser?.role === "guide" ?
                  <li>
                    <NavLink to="/guide/dashboard" className="nav_links" target="_blank"><RxDashboard className='dash' /> Dashboard</NavLink>
                  </li>

                  :
                  <li>
                    <NavLink to="/contact" className="nav_links" ><i className="uil uil-envelope" /> Contact</NavLink>
                  </li>
            }
            {
              currentUser ?
                <div className='userInfo' onClick={() => setOpenProfile((prev) => !prev)}>
                  <div className="userName">
                    <h1>{currentUser.name.charAt(0).toUpperCase()}</h1>
                  </div>
                  <AiOutlineDown className='down' />
                </div> :
                <Link to="/login" ><button className="login btn">Login</button></Link>

            }


          </ul>
        </div>
      </nav>
      {
        openProfile &&
        <div className="logoutDiv">
          <div className="name">
            <h5>{currentUser?.name}</h5>
          </div>
          <div className="setting">
            <h5><AiFillSetting /> setting</h5>
          </div>
          <div className="logout">
            <h5 onClick={() => {setOpenModal(true)}} ><AiOutlineLogout className='logoutIcon' /> logout</h5>
          </div>
        </div>
      }
      {
        openModal &&
        <div className='modalBackground'>
          <div className="modalContainer">
            <img src={Logo} alt="" />
            <button className="modalCloseBtn" onClick={() => {setOpenModal(false)}}><AiOutlineClose style={{fontWeight:"bolder"}}/></button>
            {/* <div className="modalTitle">
              <h1>Are you Sure?</h1>
            </div> */}
            <div className="modalBody">
              <h3>Are you sure want to logout from travelMate?</h3>
            </div>
            <div className="modalFooter">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
