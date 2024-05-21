// Login.js
import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/SECOND.png';
import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';
import linkedin from '../../assets/linkedin.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='login-container'>
      <div className="login-form-container">
        <img src={logo} alt="SecondStory" className='SecondStory-logo'/>
        <h2>SIGN IN</h2>
        <div className="social-login">
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Login with Facebook">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#" className="social-icon" aria-label="Login with LinkedIn">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="#" className="social-icon" aria-label="Login with Google">
              <img src={google} alt="Gmail" />
            </a>
          </div>
          <p>Or login with:</p>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
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
              aria-label="Password"
            />
            <div className="password-container">
              <div className="show-password-container">
                <div className='checkbox-container'>
                  <input 
                    type="checkbox" 
                    id="show-password" 
                    checked={showPassword} 
                    onChange={togglePasswordVisibility} 
                    aria-label="Show Password"
                  />
                  <label htmlFor="show-password" className='show-password-text'>Remember Me</label>
                </div>
              </div>
              <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className='login-button'>Login</button>
            <button type="button" className='register-button'>Register</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
