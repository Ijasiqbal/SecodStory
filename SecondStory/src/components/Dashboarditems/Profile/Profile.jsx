import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faEdit } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';

function Profile() {
  const [editingField, setEditingField] = useState(null);
  const [profile, setProfile] = useState({
    username: 'prabhas_user',
    firstname: 'Prabhas',
    lastname: 'Raju',
    email: 'prabhas@example.com',
    phone: '123-456-7890',
    image: 'https://images.filmibeat.com/img/popcorn/profile_photos/prabhas-20231013142131-4221.jpg',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({
          ...profile,
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = (field) => {
    setEditingField(field === editingField ? null : field);
  };

  const handleSave = (field) => {
    setEditingField(null);
    // Handle save logic here, if necessary
    console.log(`${field} saved:`, profile[field]);
  };

  return (
    <div className="profile-container">
      <h1>{profile.firstname + " " + profile.lastname}</h1>
      <div className='profile-container-image'>
        <div className="profile-image">
          <img src={profile.image} alt='Profile' />
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
        <label htmlFor='username'>Username:</label>
        {editingField === 'username' ? (
          <>
            <input
              type='text'
              id='username'
              name='username'
              value={profile.username}
              onChange={handleChange}
            />
            <button onClick={() => handleSave('username')} className="save-button">Save</button>
          </>
        ) : (
          <p>{profile.username}</p>
        )}
        {editingField !== 'username' && (
          <FontAwesomeIcon
            icon={faEdit}
            className="edit-icon"
            onClick={() => toggleEdit('username')}
          />
        )}
      </div>
      <div className="profile-field">
        <label htmlFor='firstname'>First Name:</label>
        {editingField === 'firstname' ? (
          <>
            <input
              type='text'
              id='firstname'
              name='firstname'
              value={profile.firstname}
              onChange={handleChange}
            />
            <button onClick={() => handleSave('firstname')} className="save-button">Save</button>
          </>
        ) : (
          <p>{profile.firstname}</p>
        )}
        {editingField !== 'firstname' && (
          <FontAwesomeIcon
            icon={faEdit}
            className="edit-icon"
            onClick={() => toggleEdit('firstname')}
          />
        )}
      </div>
      <div className="profile-field">
        <label htmlFor='lastname'>Last Name:</label>
        {editingField === 'lastname' ? (
          <>
            <input
              type='text'
              id='lastname'
              name='lastname'
              value={profile.lastname}
              onChange={handleChange}
            />
            <button onClick={() => handleSave('lastname')} className="save-button">Save</button>
          </>
        ) : (
          <p>{profile.lastname}</p>
        )}
        {editingField !== 'lastname' && (
          <FontAwesomeIcon
            icon={faEdit}
            className="edit-icon"
            onClick={() => toggleEdit('lastname')}
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
              value={profile.email}
              onChange={handleChange}
            />
            <button onClick={() => handleSave('email')} className="save-button">Save</button>
          </>
        ) : (
          <p>{profile.email}</p>
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
              value={profile.phone}
              onChange={handleChange}
            />
            <button onClick={() => handleSave('phone')} className="save-button">Save</button>
          </>
        ) : (
          <p>{profile.phone}</p>
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
