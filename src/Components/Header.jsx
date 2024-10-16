import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="head">
      <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="logo" />
      <ul className="list">
      <li><Link to="/home">Home</Link></li>
        <li><Link to="/electronics">Electronics</Link></li>
        <li><Link to="/clothing">Clothing</Link></li>
        <li><Link to="/kitchen">Kitchen</Link></li>
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>

        
      </ul>
    </div>
  );
}

export default Header;
