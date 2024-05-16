import React from 'react'
import styles from './style.css/LoginIntro.module.css'
import loginPic from '../assets/loginPic2.jpg'

export default function LoginIntro() {
  return (
    <div className={styles.base}>
      <div className={styles.lhs}>
        <h4>Buy, Sell, Lend & borrow with our website....</h4>
        <p>Login to our platform to buy, sell, lend, and borrow books with ease. Create an account to list items for sale, set lending terms, and browse for items to purchase or borrow. Our secure and user-friendly system allows you to communicate directly with other users to negotiate prices and finalize deals. Join our community to connect with people who share your interests and enjoy a seamless trading experience. Sign up today and start trading on a platform that values your needs and ensures safe transactions.</p>
        <p></p>
        <div className={styles.btn}>Login</div>
      </div>
      <div className={styles.rhs}>

        <img src={loginPic} alt="pic2" />
      </div>
      
    </div>
  )
}
