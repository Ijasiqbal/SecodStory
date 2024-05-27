import React, { useState } from 'react';
import './styles.css/Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser, faEdit, faHeart, faMapMarkerAlt, faBox, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Shelf from '../components/Dashboarditems/Shelf/Shelf'
import Navbar from '../components/Navbar';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('Shelf');

  return (
    <>
    <Navbar />
    <div className="dashboard-container">
      {/* <div className="sidebar dashboard-nav">
      <nav aria-labelledby="nav-title-social" className='dashboard-nav'>
        <ul>
          <li>
            <h2 id="nav-title-social">Alvaro's Social Media</h2>
          </li>
          <li>
            <a href="" target="_blank">
              Website
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alvaromontoro/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://front-end.social/@alvaromontoro" target="_blank">
              <i class="fa-brands fa-mastodon" aria-hidden="true"></i>
              Mastodon
            </a>
          </li>
          <li>
            <a href="https://twitter.com/alvaro_montoro" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/c/alvaromontorocss" target="_blank">
              YouTube
            </a>
          </li>
          <li>
            <a href="https://codepen.io/alvaromontoro" target="_blank">
              CodePen
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/3695983/alvaro-montoro" target="_blank">
              StackOverflow
            </a>
          </li>
          <li>
            <a href="https://es.stackoverflow.com/users/250/alvaro-montoro" target="_blank">
              StackOverflow (Espa&ntilde;ol)
            </a>
          </li>
        </ul>
      </nav>
      </div> */}
      <div className="sidebar">
        <button onClick={() => setActiveSection('Shelf')} className={activeSection === 'Shelf' ? 'active' : ''}><i><FontAwesomeIcon icon={faBook} /></i> Shelf</button>
        <button onClick={() => setActiveSection('Profile')} className={activeSection === 'Profile' ? 'active' : ''}><i><FontAwesomeIcon icon={faUser} /></i>Profile</button>
        <button onClick={() => setActiveSection('EditProfile')} className={activeSection === 'EditProfile' ? 'active' : ''}><i><FontAwesomeIcon icon={faEdit} /></i>Edit Profile</button>
        <button onClick={() => setActiveSection('Wishlist')} className={activeSection === 'Wishlist' ? 'active' : ''}><i><FontAwesomeIcon icon={faHeart} /></i>Wishlist</button>
        <button onClick={() => setActiveSection('Address')} className={activeSection === 'Address' ? 'active' : ''}><i><FontAwesomeIcon icon={faMapMarkerAlt} /></i> Address</button>
        <button onClick={() => setActiveSection('Orders')} className={activeSection === 'Orders' ? 'active' : ''}><i><FontAwesomeIcon icon={faBox} /></i> Orders</button>
        <button onClick={() => setActiveSection('Logout')} className={activeSection === 'Logout' ? 'active' : ''}><i><FontAwesomeIcon icon={faSignOutAlt} /></i>Logout</button>
      </div>
      <div className="content">
        <div className={`content-section  ${activeSection === 'Shelf' ? 'active' : ''}`}>
          <h1 className='shelf-content'>My Shelf</h1>
          <Shelf/>
        </div>
        <div className={`content-section ${activeSection === 'Profile' ? 'active' : ''}`}>
          <h1 className='shelf-content'>Profile Content</h1>
        </div>
        <div className={`content-section ${activeSection === 'EditProfile' ? 'active' : ''}`}>
          <h1 className='shelf-content'>Edit Profile Content</h1>
        </div>
        <div className={`content-section ${activeSection === 'Wishlist' ? 'active' : ''}`}>
          <h1 className='shelf-content'>Wishlist Content</h1>
        </div>
        <div className={`content-section ${activeSection === 'Address' ? 'active' : ''}`}>
          <h1 className='shelf-content'>Address Content</h1>
        </div>
        <div className={`content-section ${activeSection === 'Orders' ? 'active' : ''}`}>
          <h1 className='shelf-content'>Orders Content</h1>
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
