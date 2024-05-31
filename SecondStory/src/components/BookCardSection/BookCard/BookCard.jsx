import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import './BookCard.css';

const BookCard = ({ book }) => {
  return (
    <div className='book-card'>
      <div className="image-card">
        <img src={book.images} className='book-image' alt={`${book.mainTitle} cover`} />
      </div>
      <button className="wishlist-button" title="Add to Wishlist">
        <FontAwesomeIcon icon={farHeart} />
      </button>
      <h3 className='book-card-subtitle'>{book.subtitle}</h3>
      <p className='book-card-author'>{book.author}</p>
      <p className='book-card-price'>Rs.{book.price}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default BookCard;
