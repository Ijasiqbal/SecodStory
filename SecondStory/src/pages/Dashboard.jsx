import React, { useState } from 'react';
import './styles.css/Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser, faEdit, faHeart, faMapMarkerAlt, faBox, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Shelf from '../components/Dashboarditems/Shelf/Shelf';
import Navbar from '../components/Navbar';
import Profile from '../components/Dashboarditems/Profile/Profile';
import Address from '../components/Dashboarditems/Address/Address';
import { Link } from 'react-router-dom'; // Import Link component
import PasswordManager from '../components/Dashboarditems/PasswordManager/PasswordManager';
import Orders from '../components/Dashboarditems/Orders/MyOrders/Orders';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../Redux/userSlice';
import Cookies from 'js-cookie';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('Shelf');

  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <nav className="dashboard-sidebar" aria-labelledby="nav-title-dashboard">
          <ul>
            <li>
              <h2 id="nav-title-dashboard">Dashboard</h2>
            </li>
            <li>
              <Link to="#" onClick={() => setActiveSection('Shelf')} className={activeSection === 'Shelf' ? 'activeLiFirst' : ''}>
                <i><FontAwesomeIcon icon={faBook} /></i>
                Shelf
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setActiveSection('Profile')} className={activeSection === 'Profile' ? 'activeLi' : ''}>
                <i><FontAwesomeIcon icon={faUser} /></i>
                Profile
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setActiveSection('ChangePassword')} className={activeSection === 'ChangePassword' ? 'activeLi' : ''}>
                <i><FontAwesomeIcon icon={faEdit} /></i>
                Change Password
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setActiveSection('Wishlist')} className={activeSection === 'Wishlist' ? 'activeLi' : ''}>
                <i><FontAwesomeIcon icon={faHeart} /></i>
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setActiveSection('Address')} className={activeSection === 'Address' ? 'activeLi' : ''}>
                <i><FontAwesomeIcon icon={faMapMarkerAlt} /></i>
                Address
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setActiveSection('Orders')} className={activeSection === 'Orders' ? 'activeLi' : ''}>
                <i><FontAwesomeIcon icon={faBox} /></i>
                My Orders
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => {
                setActiveSection('Logout')
                //clear cookies
                Cookies.remove('token', { path: '/' });
                dispatch(setUser(null))
              }} className={activeSection === 'Logout' ? 'activeLi' : ''}>
                <i><FontAwesomeIcon icon={faSignOutAlt} /></i>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <div className={`content-section ${activeSection === 'Shelf' ? 'active' : ''}`}>
            <h1 className='shelf-content'>My Shelf</h1>
            <Shelf />
          </div>
          <div className={`content-section ${activeSection === 'Profile' ? 'active' : ''}`}>
            <h1 className='shelf-content'>Profile Content</h1>
            <Profile />
          </div>
          <div className={`content-section ${activeSection === 'ChangePassword' ? 'active' : ''}`}>
            <h1 className='shelf-content'>Password Manager</h1>
            <PasswordManager />
          </div>
          <div className={`content-section ${activeSection === 'Wishlist' ? 'active' : ''}`}>
            <h1 className='shelf-content'>Wishlist Content</h1>
          </div>
          <div className={`content-section ${activeSection === 'Address' ? 'active' : ''}`}>
            <h1 className='shelf-content'>Address Content</h1>
            <div className='address-manager-container'><Address /></div>
          </div>
          <div className={`content-section ${activeSection === 'Orders' ? 'active' : ''}`}>
            <h1 className='shelf-content'>My Orders</h1>
            <Orders />
          </div>
          <div className={`content-section ${activeSection === 'Logout' ? 'active' : ''}`}>
            <h1 className='shelf-content'>Logout Content</h1>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
