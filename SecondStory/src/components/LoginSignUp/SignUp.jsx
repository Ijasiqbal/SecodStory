import React, { useState } from 'react';
import styles from './SignUp.module.css';
import logo from '../../assets/SECOND.png';
import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';
import linkedin from '../../assets/linkedin.png';
import { apiEndPoint } from '../../api/apiEndpoint'; // Import the API endpoint constant
import axios from 'axios'; // Import axios for making HTTP requests

function SignUp() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Prepare the user data
    const userData = {
      username,
      firstName,
      lastName,
      email,
      phone,
      password,
    };

    try {
      console.log('Registering user:', userData);
      // Make a POST request to the API endpoint to register the user
      const response = await axios.post(`${apiEndPoint}/signin`, userData);
      console.log('Registration successful:', response.data);
      // Optionally, you can redirect the user to a different page or show a success message
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      // Handle the registration error, e.g., show an error message to the user
    }
  };

  return (
    <div className={styles['signup-container']}>
      <div className={styles['signup-form-container']}>
        <img src={logo} alt="SecondStory" className={styles['SecondStoryLogo']} />
        <h2>SIGN UP</h2>
        <div className={styles['social-SignUp']}>
          <div className={styles['socialIcons']}>
            <a href="#" className={styles['socialIcon']} aria-label="Sign up with Facebook">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#" className={styles['socialIcon']} aria-label="Sign up with LinkedIn">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="#" className={styles['socialIcon']} aria-label="Sign up with Google">
              <img src={google} alt="Google" />
            </a>
          </div>
          <p>Or sign up with:</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} aria-label="Username" className={styles['Signup-username']} />
              <div className={styles['form-group-names']}>
                <div className={styles['form-group-column']}>
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" required value={firstName} onChange={(e) => setFirstName(e.target.value)} aria-label="First Name" className={styles['Signup-firstName']} />
                </div>
                <div className={styles['form-group-column']}>
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" required value={lastName} onChange={(e) => setLastName(e.target.value)} aria-label="Last Name" className={styles['Signup-lastName']} />
                </div>
              </div>

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" className={styles['Signup-email']} />
              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" name="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} aria-label="Phone" className={styles['Signup-phone']} />

              <label htmlFor="password">Password:</label>
              <input type={showPassword ? 'text' : 'password'} id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} aria-label="Password" className={styles['Signup-password']} />
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type={showPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} aria-label="Confirm Password" className={styles['Signup-confirmPassword']} />

              <div className={styles['show-password-container']}>
                <div className={styles['checkbox-container']}>
                  <input type="checkbox" id="show-password" checked={showPassword} onChange={togglePasswordVisibility} aria-label="Show Password" />
                  <label htmlFor="show-password" className={styles['show-password-text']}>RememberMe</label>
                </div>
              </div>

              <button type="submit" className={`${styles['signup-button']} ${styles['Signup-submitButton']}`}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
