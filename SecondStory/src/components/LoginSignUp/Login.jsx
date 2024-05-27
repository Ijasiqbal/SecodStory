import React, { useState } from 'react';
import styles from './Login.module.css';
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
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
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
            <button type="button" className={styles.registerButton}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
