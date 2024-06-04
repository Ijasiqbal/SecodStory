// src/components/Profile.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../Redux/userSlice';
import axiosInstance from '../../../api/axiosInstance';
import { apiEndPoint } from '../../../api/apiEndpoint';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faEdit } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';

function Profile() {
  const [editingField, setEditingField] = useState(null);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUser({
      ...user,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setUser({
          ...user,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = (field) => {
    setEditingField(field === editingField ? null : field);
  };

  const handleSave =async (field) => {
    try {
      const response = await axiosInstance.patch(`${apiEndPoint}user/profile`, { [field]: user[field] }, { withCredentials: true });
    } catch (error) {
      console.error(`${field} save failed:`, error);
      
      
    }
    setEditingField(null);
    // Handle save logic here, if necessary
    console.log(`${field} saved:`, user[field]);
  };

  const fetchProfile = async () => {
    try {
      const response = await axiosInstance.get(`${apiEndPoint}user/profile`, { withCredentials: true });
      console.log('Profile fetched:', response.data.data.user);
      dispatch(setUser(response.data.data.user));
    } catch (error) {
      console.error('Profile fetch failed:', error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Return null or a loading indicator if user is not available yet
  }

  return (
    <div className="profile-container">
      <h1>{user.firstName + " " + user.lastName}</h1>
      <div className='profile-container-image'>
        <div className="profile-image">
          {user.image && <img src={user.image} alt='Profile' />}
          <div>
            <input
              type='file'
              id='fileInput'
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <label htmlFor='fileInput' className="upload-icon">
              <FontAwesomeIcon icon={faUpload} />
            </label>
          </div>
        </div>
      </div>
      <div className='profile-text-container'>
        <div className="profile-field">
          <label htmlFor='userName'>Username:</label>
          {editingField === 'userName' ? (
            <>
              <input
                type='text'
                id='userName'
                name='userName'
                value={user.userName || ''}
                onChange={handleChange}
              />
              <button onClick={() => handleSave('userName')} className="save-button">Save</button>
            </>
          ) : (
            <span className='span-text'>{user.userName}</span>
          )}
          {editingField !== 'userName' && (
            <FontAwesomeIcon
              icon={faEdit}
              className="edit-icon"
              onClick={() => toggleEdit('userName')}
            />
          )}
        </div>
        <div className="profile-field">
          <label htmlFor='firstName'>First Name:</label>
          {editingField === 'firstName' ? (
            <>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={user.firstName || ''}
                onChange={handleChange}
              />
              <button onClick={() => handleSave('firstName')} className="save-button">Save</button>
            </>
          ) : (
            <span className='span-text'>{user.firstName}</span>
          )}
          {editingField !== 'firstName' && (
            <FontAwesomeIcon
              icon={faEdit}
              className="edit-icon"
              onClick={() => toggleEdit('firstName')}
            />
          )}
        </div>
        <div className="profile-field">
          <label htmlFor='lastName'>Last Name:</label>
          {editingField === 'lastName' ? (
            <>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={user.lastName || ''}
                onChange={handleChange}
              />
              <button onClick={() => handleSave('lastName')} className="save-button">Save</button>
            </>
          ) : (
            <span className='span-text'>{user.lastName}</span>
          )}
          {editingField !== 'lastName' && (
            <FontAwesomeIcon
              icon={faEdit}
              className="edit-icon"
              onClick={() => toggleEdit('lastName')}
            />
          )}
        </div>
        <div className="profile-field">
          <label htmlFor='email'>Email:</label>
          {editingField === 'email' ? (
            <>
              <input
                type='email'
                id='email'
                name='email'
                value={user.email || ''}
                onChange={handleChange}
              />
              <button onClick={() => handleSave('email')} className="save-button">Save</button>
            </>
          ) : (
            <span className='span-text'>{user.email}</span>
          )}
          {editingField !== 'email' && (
            <FontAwesomeIcon
              icon={faEdit}
              className="edit-icon"
              onClick={() => toggleEdit('email')}
            />
          )}
        </div>
        <div className="profile-field">
          <label htmlFor='phone'>Phone Number:</label>
          {editingField === 'phone' ? (
            <>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={user.phone?.phoneNumber || ''}
                onChange={handleChange}
              />
              <button onClick={() => handleSave('phone')} className="save-button">Save</button>
            </>
          ) : (
            <span className='span-text'>{user.phone?.countryCode + ' ' + user.phone?.phoneNumber}</span>
          )}
          {editingField !== 'phone' && (
            <FontAwesomeIcon
              icon={faEdit}
              className="edit-icon"
              onClick={() => toggleEdit('phone')}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
