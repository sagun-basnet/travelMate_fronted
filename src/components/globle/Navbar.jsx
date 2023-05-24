import React from 'react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../img/logo4.png';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
import { RxDashboard } from "react-icons/rx";
import { AiOutlineDown } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";

export default function Navbar() {

  const [openProfile, setOpenProfile] = useState(false);


  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser.role);

  return (
    <div>
      <nav id='navBar'>
        <div className="logo">
          <div className="nav_logo">
            <NavLink to="/" className="nav_links"><img src={Logo} alt=" " /></NavLink>

          </div>
        </div>
        {/* <h2>{currentUser.user_name}</h2> */}
        <div className="links links_container">
          <ul>
            <NavLink to="/">
              <li>
                <NavLink to="/" className="nav_links"><i className="uil uil-home" /> Home</NavLink>
              </li>
            </NavLink>
            {currentUser.user_name === "superadmin" ?
              <></>
              :
              <li>
                <NavLink to="/about" className="nav_links" ><i className="uil uil-lightbulb-alt" /> About</NavLink>
              </li>

            }

            <li>
              <NavLink to="/package" className="nav_links" ><i className="uil uil-package" /> Package</NavLink>
            </li>
            {currentUser.user_name === "superadmin" ?
              <li>
                <NavLink to="/dashboard" className="nav_links" ><RxDashboard className='dash' /> Dashboard</NavLink>
              </li>
              :
              <li>
                <NavLink to="/contact" className="nav_links" ><i className="uil uil-envelope" /> Contact</NavLink>
              </li>
            }

            <li>
              <NavLink to="/feedback" className="nav_links" ><i className="uil uil-feedback" /> Feedback</NavLink>
            </li>
            {currentUser.user_name.length === 0 ?
              <Link to="/login" ><button className="login btn">Login</button></Link>
              :
              <div className='userInfo' onClick={() => setOpenProfile((prev) =>!prev)}>
              {/* <div className='userInfo' onClick={userinfo}> */}
                <div className="userName">
                  <h1>{currentUser.user_name.charAt(0).toUpperCase()}</h1>
                </div>
                <AiOutlineDown className='down' />
              </div>
            }

          </ul>
        </div>
      </nav>
      {
        openProfile &&
          <div className="logoutDiv">
            <div className="name">
              <h5>{currentUser.user_name}</h5>
            </div>
            {/* <hr /> */}
            <div className="setting">
            <h5><AiFillSetting/> setting</h5>
            </div>
            {/* <hr /> */}
            <div className="logout">
                <h5><AiOutlineLogout className='logoutIcon'/> logout</h5>
            </div>
          </div> 
      }
    </div>
  )
}
