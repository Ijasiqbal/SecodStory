import React, { useState } from 'react';
import './SignUp.css';
import logo from '../../assets/SECOND.png';
import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';
import linkedin from '../../assets/linkedin.png';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className='signup-container'>
      <div className="signup-form-container">
        <img src={logo} alt="SecondStory" className='SecondStory-logo'/>
        <h2>SIGN UP</h2>
        <div className="social-login">
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Sign up with Facebook">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#" className="social-icon" aria-label="Sign up with LinkedIn">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="#" className="social-icon" aria-label="Sign up with Google">
              <img src={google} alt="Google" />
            </a>
          </div>
          <p>Or sign up with:</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-group-names">
              <div className='form-group-column'>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required value={firstName} onChange={(e) => setFirstName(e.target.value)} aria-label="First Name"/>
              </div>
              <div className='form-group-column'>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required value={lastName} onChange={(e) => setLastName(e.target.value)} aria-label="Last Name"/>
              </div>
            </div>
            <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)}aria-label="Username"/>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email"/>
              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" name="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} aria-label="Phone"/>
              
              <label htmlFor="password">Password:</label>
              <input type={showPassword ? 'text' : 'password'} id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} aria-label="Password"/>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type={showPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} aria-label="Confirm Password"/>
              
                <div className="show-password-container">
                  <div className='checkbox-container'>
                    <input type="checkbox" id="show-password" checked={showPassword} onChange={togglePasswordVisibility} aria-label="Show Password"/>
                    <label htmlFor="show-password" className='show-password-text'>Show Password</label>
                  </div>
                </div>
              
            
            <button type="submit" className='signup-button'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
