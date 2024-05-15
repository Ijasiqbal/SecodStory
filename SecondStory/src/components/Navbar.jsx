import React from 'react'
import './style.css/Navbar.css'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    
  return (
    <div className='base'>
      <div className="brand"><i><img src={logo} alt="logo" /></i>SecondStory</div>
        <div className='nav'>
                <ul>Home</ul>
                <ul>Community</ul>
                <ul>Market</ul>
        </div>
        <div className="search">
            <p>Search for books</p>
            <i><FontAwesomeIcon icon={faSearch} /></i>
        </div>
        <div className="icons">
            <i><FontAwesomeIcon icon={faHeart} /></i>  {/* Wishlist icon */}
            <i><FontAwesomeIcon icon={faShoppingCart} /></i>  {/* Cart icon */}
            <i><FontAwesomeIcon icon={faUser} /></i>  {/* Profile icon */}
        </div>
    </div>
  )
}