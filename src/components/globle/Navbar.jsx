import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../img/logo2.png';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';

export default function Navbar() {

  const {currentUser} = useContext(AuthContext);

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
            <li>
              <NavLink to="/" className="nav_links"><i className="uil uil-home" /> Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav_links" ><i className="uil uil-lightbulb-alt" /> About</NavLink>
            </li>
            <li>
              <NavLink to="/package" className="nav_links" ><i className="uil uil-package" /> Package</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav_links" ><i className="uil uil-envelope" /> Contact</NavLink>
            </li>
            <li>
              <NavLink to="/feedback" className="nav_links" ><i className="uil uil-feedback" /> Feedback</NavLink>
            </li>
            
            
            <Link to="/login" ><button className="login btn">Login</button></Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}
