import React, { useState } from 'react';
import './styles.css/Market.css';
import BookFilter from '../components/BookCardSection/BookFilter/BookFilter';
import BookCard from '../components/BookCardSection/BookCard/BookCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const generateFakeBooks = (count) => {
  const genres = {
    Fiction: ['Literary Fiction', 'Historical Fiction', 'Science Fiction', 'Fantasy', 'Mystery', 'Thriller', 'Romance', 'Horror'],
    'Non-Fiction': ['Biography', 'Memoir', 'True Crime', 'History', 'Science', 'Travel', 'Philosophy', 'Essays'],
    'Self-Help': ['Personal Development', 'Motivation', 'Health and Wellness', 'Financial Advice', 'Relationship Guidance', 'Spirituality'],
    Kids: ['Picture Books', 'Early Readers', 'Middle Grade', 'Children\'s Fiction', 'Children\'s Non-Fiction', 'Young Adult Fiction', 'Young Adult Fantasy'],
    'Test Preparation': ['Study Guides', 'Exam Prep Books', 'Practice Tests', 'Textbooks for standardized tests (SAT, GRE, GMAT, etc.)', 'Educational Workbooks']
  };

  const books = [];
  for (let i = 0; i < count; i++) {
    const genreKeys = Object.keys(genres);
    const genre = genreKeys[Math.floor(Math.random() * genreKeys.length)];
    const subGenre = genres[genre][Math.floor(Math.random() * genres[genre].length)];

    const book = {
      id: i + 1,
      mainTitle: `Book ${i + 1}`,
      subtitle: `Subtitle ${i + 1}`,
      author: `Author ${i + 1}`,
      description: `Description for Book ${i + 1}`,
      price: Math.floor(Math.random() * 1000) + 1,
      images: `https://picsum.photos/200/300?random=${i + 1}`,
      genre: genre,
      subGenre: subGenre,
      condition: ['New', 'Used', 'Like New'][Math.floor(Math.random() * 3)],
      category: 'Books'
    };
    books.push(book);
  }
  return books;
};

const Market = () => {
  const fakeBooks = generateFakeBooks(30);

  const [books, setBooks] = useState(fakeBooks);
  const [filteredBooks, setFilteredBooks] = useState(fakeBooks);

  const handleFilter = (filters) => {
    const filtered = books.filter((book) => (
      (filters.genre === '' || book.genre === filters.genre) &&
      (filters.subGenre === '' || book.subGenre === filters.subGenre)
    ));
    setFilteredBooks(filtered);
  };

  return (
    <>
    <Navbar/>
    <h2 className='market-heading'>HOME / PRODUCTS</h2>
    <div className="market">
      <BookFilter onFilter={handleFilter} />
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Market;
