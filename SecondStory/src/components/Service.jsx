import React from 'react';
import styles from './style.css/Services.module.css'; // Import the CSS module
import sell from '../assets/Sell.png'
import buy from '../assets/Buy.png'
import borrow from '../assets/Borrow.png'
import lend from '../assets/Lend.png'

export default function Service() {
  return (
    <>
    <div className={styles.main}>
      <h3 className={styles.heading}>Services</h3>
    <div className={styles.container}>
        <div data-text="Buy" style={{ '--r': '-15' }} className={styles.glass}>
          <img src={buy} alt="" />
        </div>
        <div data-text="Sell" style={{ '--r': '5' }} className={styles.glass}>
          <img src={sell} alt="sell.png" />
        </div>
        <div data-text="Borrow" style={{ '--r': '25' }} className={styles.glass}>
          <img src={borrow} alt="" />
        </div>
        <div data-text="Lend" style={{ '--r': '35' }} className={styles.glass}>
          <img src={lend} alt="" />
        </div>
      </div>
    </div>
    </>
  );
}
