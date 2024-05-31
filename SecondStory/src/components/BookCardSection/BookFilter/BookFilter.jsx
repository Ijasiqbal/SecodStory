import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import './BookFilter.css';

const BookFilter = ({ onFilter }) => {
  const [genre, setGenre] = useState('');
  const [subGenre, setSubGenre] = useState('');
  const [showGenre, setShowGenre] = useState(false);
  const [showSubGenre, setShowSubGenre] = useState(false);

  useEffect(() => {
    onFilter({ genre, subGenre });
  }, [genre, subGenre, onFilter]);

  const genreOptions = [
    { value: 'Fiction', label: 'Fiction' },
    { value: 'Non-Fiction', label: 'Non-Fiction' },
    { value: 'Self-Help', label: 'Self-Help' },
    { value: 'Kids', label: 'Kids' },
    { value: 'Test Preparation', label: 'Test Preparation' }
  ];

  const subGenreOptions = {
    Fiction: [
      { value: 'Literary Fiction', label: 'Literary Fiction' },
      { value: 'Historical Fiction', label: 'Historical Fiction' },
      { value: 'Science Fiction', label: 'Science Fiction' },
      { value: 'Fantasy', label: 'Fantasy' },
      { value: 'Mystery', label: 'Mystery' },
      { value: 'Thriller', label: 'Thriller' },
      { value: 'Romance', label: 'Romance' },
      { value: 'Horror', label: 'Horror' }
    ],
    'Non-Fiction': [
      { value: 'Biography', label: 'Biography' },
      { value: 'Memoir', label: 'Memoir' },
      { value: 'True Crime', label: 'True Crime' },
      { value: 'History', label: 'History' },
      { value: 'Science', label: 'Science' },
      { value: 'Travel', label: 'Travel' },
      { value: 'Philosophy', label: 'Philosophy' },
      { value: 'Essays', label: 'Essays' }
    ],
    'Self-Help': [
      { value: 'Personal Development', label: 'Personal Development' },
      { value: 'Motivation', label: 'Motivation' },
      { value: 'Health and Wellness', label: 'Health and Wellness' },
      { value: 'Financial Advice', label: 'Financial Advice' },
      { value: 'Relationship Guidance', label: 'Relationship Guidance' },
      { value: 'Spirituality', label: 'Spirituality' }
    ],
    Kids: [
      { value: 'Picture Books', label: 'Picture Books' },
      { value: 'Early Readers', label: 'Early Readers' },
      { value: 'Middle Grade', label: 'Middle Grade' },
      { value: 'Children\'s Fiction', label: 'Children\'s Fiction' },
      { value: 'Children\'s Non-Fiction', label: 'Children\'s Non-Fiction' },
      { value: 'Young Adult Fiction', label: 'Young Adult Fiction' },
      { value: 'Young Adult Fantasy', label: 'Young Adult Fantasy' }
    ],
    'Test Preparation': [
      { value: 'Study Guides', label: 'Study Guides' },
      { value: 'Exam Prep Books', label: 'Exam Prep Books' },
      { value: 'Practice Tests', label: 'Practice Tests' },
      { value: 'Textbooks for standardized tests', label: 'Textbooks for standardized tests (SAT, GRE, GMAT, etc.)' },
      { value: 'Educational Workbooks', label: 'Educational Workbooks' }
    ]
  };

  const handleGenreChange = (selectedOption) => {
    setGenre(selectedOption.value);
    setSubGenre('');
    setShowSubGenre(true);
  };

  const filteredSubGenreOptions = genre ? subGenreOptions[genre] : [];

  return (
    <>
     <div className="dropdown-container">
  <div className="filter-header" onMouseEnter={() => setShowGenre(true)} onMouseLeave={() => setShowGenre(false)}>
    <FontAwesomeIcon icon={faSliders} className="filter-icon" />
    <h3 className='filter-heading'>Filter Books</h3>
  </div>
  {showGenre && (
    <div className="dropdown genre-dropdown" onMouseEnter={() => setShowGenre(true)} onMouseLeave={() => setShowGenre(false)}>
      <ul>
        {genreOptions.map((option) => (
          <li key={option.value} onClick={() => handleGenreChange(option)}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )}
  {showSubGenre && (
    <div className="dropdown subgenre-dropdown" onMouseEnter={() => setShowSubGenre(true)} onMouseLeave={() => setShowSubGenre(false)}>
      <ul>
        {filteredSubGenreOptions.map((option) => (
          <li key={option.value} onClick={() => setSubGenre(option.value)}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

    </>
  );
};

export default BookFilter;
