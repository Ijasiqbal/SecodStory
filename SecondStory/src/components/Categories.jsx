import React from 'react'
import styles from './style.css/Categories.module.css'
import Cate1 from '../assets/cate1.jpg'
import Cate2 from '../assets/cate2.jpg'
import Cate3 from '../assets/cate3.jpg'
import Cate4 from '../assets/cate4.jpg'
import Cate5 from '../assets/cate5.jpg'

export default function Categories() {
  return (
    <div className={styles.base}>
        <div className={styles.row}>
            <div className={styles.col1}>
                <img src={Cate1} alt="category1" />
                <div className={styles.imageText}>Fiction & and Fantasy</div>
            </div>
            <div className={ `${styles.col} ${styles.txtBox}`}>
                <h2>Explore our top categories</h2>
                <div className={styles.btn}>View all</div>
            </div>
            <div className={styles.col1}>
                <img src={Cate2} alt="category2" />
                <div className={styles.imageText}>Religion & Spirituality</div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col1}>
                <img src={Cate3} alt="category3" />
                <div className={styles.imageText}>Finance Books</div>
            </div>
            <div className={styles.col2}>
                <img src={Cate4} alt="category4" />
                <div className={styles.imageText}>Engineering Books</div>
            </div>
            <div className={styles.col1}>
                <img src={Cate5} alt="category5" />
                <div className={styles.imageText}>Commerce books</div>
            </div>
        </div>
    </div>
  )
}