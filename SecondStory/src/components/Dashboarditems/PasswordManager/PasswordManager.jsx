import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './PasswordManager.css';
import axios from 'axios';
import { apiEndPoint } from '../../../api/apiEndpoint';
import Cookies from 'js-cookie';

function PasswordManager() {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError(''); // Clear the error message on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      setError('New password and confirm password do not match.');
    } else {
      setError('');
      try {
        const token = Cookies.get('token');
        console.log('Resetting password:', {
          password: form.newPassword,
          passwordConfirm: form.confirmPassword,
        })
        const response = await axios.post(
          `${apiEndPoint}user/resetPassword/${token}`,
          {
            password: form.newPassword,
            passwordConfirm: form.confirmPassword,
          },
        );
        console.log('Password updated successfully');
        // Handle successful password update here, like showing a success message
      } catch (error) {
        console.error('Error updating password:', error);
        setError('Failed to update password. Please try again.');
      }
    }
  };

  return (
    <div className='password-manager-container'>
      <div className="password-manager">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Current Password</label>
            <div className="password-input-container">
              <input
                type={showCurrentPassword ? 'text' : 'password'}
                name="currentPassword"
                placeholder="Enter current password"
                value={form.currentPassword}
                onChange={handleChange}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                <FontAwesomeIcon icon={showCurrentPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          <div className="form-group">
            <label>New Password</label>
            <div className="password-input-container">
              <input
                type={showNewPassword ? 'text' : 'password'}
                name="newPassword"
                placeholder="Enter new password"
                value={form.newPassword}
                onChange={handleChange}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          <div className="form-group py-0">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {error && <div className="alert">{error}</div>}
          <button type="submit" className="update-password-button">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordManager;    
