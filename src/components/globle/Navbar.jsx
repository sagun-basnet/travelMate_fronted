import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo2.png';

export default function Navbar() {
  return (
    <div>
      <nav id='navBar'>
        <div className="logo">
          <div className="nav_logo">
          <Link to="/" className="nav_links"><img src={Logo} alt=" " /></Link>
            
          </div>
        </div>
        <div className="links links_container">
          <ul>
            <li>
              <Link to="/home" className="nav_links"><i className="uil uil-home" /> Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav_links" target="_blank"><i className="uil uil-lightbulb-alt" /> About</Link>
            </li>
            <li>
              <Link to="/package" className="nav_links" target="_blank"><i className="uil uil-package" /> Package</Link>
            </li>
            <li>
              <Link to="/contact" className="nav_links" target="_blank"><i className="uil uil-envelope" /> Contact</Link>
            </li>
            <li>
              <Link to="/feedback" className="nav_links" target="_blank"><i className="uil uil-feedback" /> Feedback</Link>
            </li>
            <Link to="/login" target="_blank"><button className="login btn">Login</button></Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}
