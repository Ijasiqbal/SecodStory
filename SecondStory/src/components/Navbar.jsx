import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css/Navbar.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/">
          <h2>SecondStory</h2>
        </Link>
      </div>
      <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/community">Community</Link>
        <Link to="/product">Market</Link>
      </div>
      <div className="searchInput">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for books"
          style={{ textAlign: "center" }}
        />
      </div>
      <div className="icon-grp">
        <Link to="/wishlist" className="mobileNone">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
        <Link to="/dashboard" className="mobileNone">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
      <div className="menu">
        <FontAwesomeIcon
          icon={click ? faTimes : faBars}
          onClick={handleClick}
        />
      </div>
      <div className="">
        <div className={click ? "openNav" : "none1"}>
          <Link to="/">Home</Link>
          <Link to="/community">Community</Link>
          <Link to="/product">Market</Link>
          <Link to="/">Wishlist</Link>
          <Link to="/dashboard">Profile</Link>
          <Link to="/">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
