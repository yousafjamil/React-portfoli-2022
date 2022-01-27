import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return <div>


    <nav className="navbar navbar-expand-sm fixed-top navbar-light  navbar">
      <Link className="navbar-brand" to='/'><img src='imges/mylogo.png' className='logo' /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon bg-danger"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item active">
            <Link className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">About us</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/resume">Resume</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/Service">Service</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white " to="/expertise">Expertise</Link>
          </li>
        </ul>

      </div>
    </nav>


  </div>;
}

export default Navbar;
