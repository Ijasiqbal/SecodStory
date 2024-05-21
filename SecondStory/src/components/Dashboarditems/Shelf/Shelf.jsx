import React from 'react'
import styles from './Shelf.module.css'
import shelf from '../../../assets/shelf.jpg'
import shelf1 from '../../../assets/singleshelf.jpg'
import shelf2 from '../../../assets/shelf2.jpg'
import shelf3 from '../../../assets/shelf3.jpg'
import AddBook from './AddBook'

export default function Shelf() {
  return (
    <div className={styles.base}>
      <div className={styles.shelf1}>
        <img src={shelf1} alt='shelf1' className={styles.shelf1img} />
        <div className={styles.row}>
          <AddBook />
        </div>
      </div>
      <div className={styles.shelf1}>
        <img src={shelf2} alt='shelf1' className={styles.shelf1img} />
        <div className={styles.row}>
          <AddBook />
        </div>
      </div>
      <div className={styles.shelf1}>
        <img src={shelf3} alt='shelf1' className={styles.shelf1img} />
        <div className={styles.row}>
          <AddBook />
        </div>
      </div>
      
    </div>
  )
}