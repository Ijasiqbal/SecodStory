import React from 'react'
import styles from './ShelfBook.module.css'
import book1 from '../../../assets/f3.jpg'

export default function ShelfBook({book}) {
  return (
    <div className={styles.addbookBase}>
        <img src={book.image} alt="" />
    </div>
  )
}
