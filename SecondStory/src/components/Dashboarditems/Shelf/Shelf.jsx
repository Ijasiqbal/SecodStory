import React from 'react';
import styles from './Shelf.module.css';


const books = [
  { img: 'https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg', alt: 'Win Friends and Influence People' },
  { img: 'https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg', alt: 'The Subtle Art of Not Giving a F*ck' },
  { img: 'https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg', alt: 'Rich Dad Poor Dad' },
  { img: 'https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg', alt: 'The Intelligent Investor' },
];

const Shelf = () => {
  return (
    <div className={styles.bookshelf}>
      {['To sell', 'To lend', 'To keep'].map((label, index) => (
        <div key={index} className={styles.shelf}>
          <div className={styles.label}>{label}</div>
          <div className={styles.navArrow}>&lt;</div>
          <div className={styles.books}>
            {books.map((book, idx) => (
              <div key={idx} className={styles.book}>
                <img src={book.img} alt={book.alt} />
              </div>
            ))}
            <div className={styles.placeholder}>+</div>
          </div>
          <div className={styles.navArrow}>&gt;</div>
        </div>
      ))}
    </div>
  );
};

export default Shelf;
