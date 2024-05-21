import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className='profile-container'>
      <h1>User Profile</h1>
      <div className='profile-row'>
        <div className='profile-image'>
          <img src='https://images.filmibeat.com/img/popcorn/profile_photos/prabhas-20231013142131-4221.jpg' alt='Profile' />
        </div>
        <div className='profile-field'>
          <label htmlFor='username'>Username:</label>
          <input type='text' id='username' name='username' />
        </div>
      </div>
      <div className='profile-row'>
        <div className='profile-field'>
          <label htmlFor='firstname'>First Name:</label>
          <input type='text' id='firstname' name='firstname' />
        </div>
        <div className='profile-field'>
          <label htmlFor='lastname'>Last Name:</label>
          <input type='text' id='lastname' name='lastname' />
        </div>
      </div>
      <div className='profile-row'>
        <div className='profile-field'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' />
        </div>
        <div className='profile-field'>
          <label htmlFor='phone'>Phone Number:</label>
          <input type='tel' id='phone' name='phone' />
        </div>
      </div>
    </div>
  );
}

export default Profile;
