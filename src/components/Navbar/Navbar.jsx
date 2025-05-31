import React from 'react';
import './Navbar.scss';
const Navbar=()=>{
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo"><a href ="#">Logo</a></div>
        <ul className="nav-links">
          <li>< a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Products</a></li>

          <li>< a href="#">Services &#9660;</a>
          <ul className="drop-down">
            <li><a href="#">Engage</a></li>
            <li><a href="#">Pontificate</a></li>
            <li><a href="#">Synergize</a></li>
          </ul>
          </li>
        </ul>
         <div className="search-box">
          <input type="text" placeholder="Search"/>
          <button>Search</button>
         </div>
      </div>
    </nav>
  );
};
export default Navbar;