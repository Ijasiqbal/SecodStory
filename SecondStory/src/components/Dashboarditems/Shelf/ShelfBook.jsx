import React, { useEffect, useState } from 'react';
import styles from './ShelfBook.module.css';
import axiosInstance from '../../../api/axiosInstance';
import BookDetailsModal from './BookDetailsModal';

export default function ShelfBook({ book }) {
  const [bookData, setBookData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchBook = async () => {
    try {
      console.log('Fetching book');
      const response = await axiosInstance.get(`/book/getBookById/${book}`);
      console.log('Each book', response.data);
      setBookData(response.data);
    } catch (error) {
      console.error('Error fetching book:', error);
    }
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (book) {
      fetchBook();
      console.log('Book ID:', book);
    }
  }, [book]);

  return (
    <div>
      {isModalOpen && bookData && (
        <BookDetailsModal isOpen={isModalOpen} onClose={handleCloseModal} bookData={bookData} />
      )}
      <div className={styles.addbookBase} onClick={handleClick}>
        {bookData ? (
          <img src={bookData.images.main_Image} alt="Book" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
