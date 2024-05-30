import React, { useState } from 'react';
import './styles.css/Market.css';
import BookFilter from '../components/BookCardSection/BookFilter/BookFilter';
import BookCard from '../components/BookCardSection/BookCard/BookCard';

const Market = () => {
  const generateFakeBooks = (count) => {
    const books = [];
    for (let i = 0; i < count; i++) {
      const book = {
        mainTitle: `Book ${i + 1}`,
        subtitle: `Subtitle ${i + 1}`,
        author: `Author ${i + 1}`,
        description: `Description for Book ${i + 1}`,
        price: Math.floor(Math.random() * 1000) + 1,
        images: `https://picsum.photos/200/300?random=${i + 1}`,
        genre: ['Fiction', 'Non-Fiction', 'Kids', 'Textbooks'][Math.floor(Math.random() * 4)],
        subGenre: ['Fantasy', 'Cooking', 'Thriller', 'Health', 'Hobbies', 'Bedtime Stories', 'Mathematics', 'Science'][Math.floor(Math.random() * 8)],
        condition: ['New', 'Used', 'Like New'][Math.floor(Math.random() * 3)],
        category: 'Books'
      };
      books.push(book);
    }
    return books;
  };

  const fakeBooks = generateFakeBooks(1000);

  const [books, setBooks] = useState((fakeBooks));
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleFilter = (filters) => {
    const filtered = books.filter((book) => (
      (filters.genre === '' || book.genre === filters.genre) &&
      (filters.subGenre === '' || book.subGenre === filters.subGenre)
    ));
    setFilteredBooks(filtered);
  };

  return (
    <div className="market">
      <h1>Book Marketplace</h1>
      <BookFilter onFilter={handleFilter} />
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default Market;
