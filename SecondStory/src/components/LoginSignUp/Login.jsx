// src/components/Login.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../Redux/userSlice';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import logo from '../../assets/SECOND.png';
import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';
import linkedin from '../../assets/linkedin.png';
import { apiEndPoint } from '../../api/apiEndpoint';
import axios from 'axios';
import Cookies from 'js-cookie';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here

    try {
      console.log(`Logging in user at api ${apiEndPoint}user/login:`, { identifier, password });
      const response = await axios.post(
        `${apiEndPoint}user/login`,
        { identifier, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      Cookies.set('token', response.data.token, { path: '/' });

      console.log('Login successful:', response.data);
      dispatch(setUser(response.data.data.user));
      console.log('User in redux',user)
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      if (error.response) {
        console.error('Login failed (response):', error.response);
      } else if (error.request) {
        console.error('Login failed (request):', error.request);
      } else {
        console.error('Login failed (general):', error.message);
      }
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginFormContainer}>
        <img src={logo} alt="SecondStory" className={styles.SecondStoryLogo} />
        <h2>SIGN IN</h2>
        <div className={styles.socialLogin}>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon} aria-label="Login with Facebook">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Login with LinkedIn">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Login with Google">
              <img src={google} alt="Gmail" />
            </a>
          </div>
          <p>Or login with:</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className={styles.loginEmail}
              aria-label="Email"
            />
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.loginPassword}
              aria-label="Password"
            />
            <div className={styles.passwordContainer}>
              <div className={styles.showPasswordContainer}>
                <div className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                    aria-label="Show Password"
                  />
                  <label htmlFor="showPassword" className={styles.showPasswordText}>RememberMe</label>
                </div>
              </div>
              <a href="/forgot-password" className={styles.forgotPassword}>Forgot Password?</a>
            </div>
            <button type="submit" className={styles.loginButton}>Login</button>
            <button type="button" className={styles.registerButton} onClick={() => { navigate('/create-account') }}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
