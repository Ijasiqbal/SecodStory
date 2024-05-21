import React from 'react'
import styles from './AddBook.module.css'
import { FaPlus } from 'react-icons/fa'


export default function AddBook() {
  return (
    <div className={styles.base}>
        <div className={styles.plus}>
            <FaPlus />
        </div>
    </div>
  )
}
