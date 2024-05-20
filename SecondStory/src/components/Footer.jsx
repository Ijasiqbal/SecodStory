import React from 'react'
import logo from '../assets/logo.png'
import styles from './style.css/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <>
        <div className={styles.base}>
        <div className={styles.lhs}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
                <div className={styles.logoName}>SecondStory</div>
            </div>
            <div className={styles.socialMedia}>
                <FontAwesomeIcon className={styles.indIcon} icon={faFacebookF} />
                <FontAwesomeIcon className={styles.indIcon} icon={faTwitter} />
                <FontAwesomeIcon className={styles.indIcon} icon={faInstagram} />
            </div>
        </div>
        <div className={styles.rhs}>
            <div className={styles.col}>
                <h5>Information</h5>
                <a href="">About</a>
                <a href="">Product</a>
                <a href="">Blog</a>
            </div>
            <div className={styles.col}>
                <h5>Company</h5>
                <a href="">Community</a>
                <a href="">Career</a>
                <a href="">Our Story</a>
            </div>
            <div className={styles.col}>
                <h5>Contact</h5>
                <a href="">Privacy policy</a>
                <a href="">Help</a>
                <a href="">Terms & conditions</a>
            </div>
        </div>
        
    </div>
    <div className={styles.copyright}>
        <p>© Copyright 2024 tsstechnologies. All rights reserved.</p>
    </div>

    </>
  )
}