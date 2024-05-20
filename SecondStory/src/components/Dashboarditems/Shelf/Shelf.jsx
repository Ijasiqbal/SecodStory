import React, { useState } from 'react';
import styles from './Shelf.module.css';

const Shelf = () => {
  const [toSellBooks, setToSellBooks] = useState([]);
  const [toLendBooks, setToLendBooks] = useState([]);
  const [toKeepBooks, setToKeepBooks] = useState([]);
  const [newToSellBook, setNewToSellBook] = useState({ img: '', alt: '' });
  const [newToLendBook, setNewToLendBook] = useState({ img: '', alt: '' });
  const [newToKeepBook, setNewToKeepBook] = useState({ img: '', alt: '' });
  const [showAddToSell, setShowAddToSell] = useState(false);
  const [showAddToLend, setShowAddToLend] = useState(false);
  const [showAddToKeep, setShowAddToKeep] = useState(false);

  const handleAddBook = (shelf) => {
    let newBook;
    if (shelf === 'toSell') {
      newBook = newToSellBook;
      setToSellBooks([...toSellBooks, newBook]);
      setNewToSellBook({ img: '', alt: '' });
      setShowAddToSell(false);
    } else if (shelf === 'toLend') {
      newBook = newToLendBook;
      setToLendBooks([...toLendBooks, newBook]);
      setNewToLendBook({ img: '', alt: '' });
      setShowAddToLend(false);
    } else if (shelf === 'toKeep') {
      newBook = newToKeepBook;
      setToKeepBooks([...toKeepBooks, newBook]);
      setNewToKeepBook({ img: '', alt: '' });
      setShowAddToKeep(false);
    }
  };

  const handleInputChange = (e, shelf) => {
    const { name, value } = e.target;
    if (shelf === 'toSell') {
      setNewToSellBook((prevBook) => ({ ...prevBook, [name]: value }));
    } else if (shelf === 'toLend') {
      setNewToLendBook((prevBook) => ({ ...prevBook, [name]: value }));
    } else if (shelf === 'toKeep') {
      setNewToKeepBook((prevBook) => ({ ...prevBook, [name]: value }));
    }
  };

  return (
    <div className={styles.bookshelf}>
      {/* To Sell Shelf */}
      <div className={styles.shelf}>
        <div className={styles.label}>To Sell</div>
        <div className={styles.navArrow}>&lt;</div>
        <div className={styles.books}>
          {toSellBooks.map((book, idx) => (
            <div key={idx} className={styles.book}>
              <img src={book.img} alt={book.alt} />
            </div>
          ))}
          <div className={styles.placeholder} onClick={() => setShowAddToSell(true)}>+</div>
        </div>
        <div className={styles.navArrow}>&gt;</div>
        {showAddToSell && (
          <div className={styles.form}>
            <input
              type="text"
              name="img"
              placeholder="Image URL"
              value={newToSellBook.img}
              onChange={(e) => handleInputChange(e, 'toSell')}
            />
            <input
              type="text"
              name="alt"
              placeholder="Alt text"
              value={newToSellBook.alt}
              onChange={(e) => handleInputChange(e, 'toSell')}
            />
            <button onClick={() => handleAddBook('toSell')}>Add to Sell</button>
          </div>
        )}
      </div>

      {/* To Lend Shelf */}
      <div className={styles.shelf}>
        <div className={styles.label}>To Lend</div>
        <div className={styles.navArrow}>&lt;</div>
        <div className={styles.books}>
          {toLendBooks.map((book, idx) => (
            <div key={idx} className={styles.book}>
              <img src={book.img} alt={book.alt} />
            </div>
          ))}
          <div className={styles.placeholder} onClick={() => setShowAddToLend(true)}>+</div>
        </div>
        <div className={styles.navArrow}>&gt;</div>
        {showAddToLend && (
          <div className={styles.form}>
            <input
              type="text"
              name="img"
              placeholder="Image URL"
              value={newToLendBook.img}
              onChange={(e) => handleInputChange(e, 'toLend')}
            />
            <input
              type="text"
              name="alt"
              placeholder="Alt text"
              value={newToLendBook.alt}
              onChange={(e) => handleInputChange(e, 'toLend')}
            />
            <button onClick={() => handleAddBook('toLend')}>Add to Lend</button>
          </div>
        )}
      </div>

      {/* To Keep Shelf */}
      <div className={styles.shelf}>
        <div className={styles.label}>To Keep</div>
        <div className={styles.navArrow}>&lt;</div>
        <div className={styles.books}>
          {toKeepBooks.map((book, idx) => (
            <div key={idx} className={styles.book}>
              <img src={book.img} alt={book.alt} />
            </div>
          ))}
          <div className={styles.placeholder} onClick={() => setShowAddToKeep(true)}>+</div>
        </div>
        <div className={styles.navArrow}>&gt;</div>
        {showAddToKeep && (
          <div className={styles.form}>
            <input
              type="text"
              name="img"
              placeholder="Image URL"
              value={newToKeepBook.img}
              onChange={(e) => handleInputChange(e, 'toKeep')}
            />
            <input
              type="text"
              name="alt"
              placeholder="Alt text"
              value={newToKeepBook.alt}
              onChange={(e) => handleInputChange(e, 'toKeep')}
            />
            <button onClick={() => handleAddBook('toKeep')}>Add to Keep</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shelf;
