import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './BookFilter.css';

const BookFilter = ({ onFilter }) => {
  const [genre, setGenre] = useState('');
  const [subGenre, setSubGenre] = useState('');

  // Effect to trigger filtering when genre or subgenre changes
  useEffect(() => {
    onFilter({ genre, subGenre });
  }, [genre, subGenre, onFilter]);

  const genreOptions = [
    { value: '', label: 'Select Genre' },
    { value: 'Fiction', label: 'Fiction' },
    { value: 'Non-Fiction', label: 'Non-Fiction' },
    { value: 'Kids', label: 'Kids' },
    { value: 'Textbooks', label: 'Textbooks' }
  ];

  const subGenreOptions = {
    Fiction: [
      { value: 'Fantasy', label: 'Fantasy' },
      { value: 'Thriller', label: 'Thriller' }
    ],
    'Non-Fiction': [
      { value: 'Cooking', label: 'Cooking' },
      { value: 'Health', label: 'Health' },
      { value: 'Hobbies', label: 'Hobbies' }
    ],
    Kids: [
      { value: 'Bedtime Stories', label: 'Bedtime Stories' }
    ],
    Textbooks: [
      { value: 'Mathematics', label: 'Mathematics' },
      { value: 'Science', label: 'Science' }
    ]
  };

  const handleGenreChange = (selectedOption) => {
    setGenre(selectedOption.value);
    // Reset subgenre if genre changes
    setSubGenre('');
  };

  // Get subgenre options based on selected genre
  const filteredSubGenreOptions = genre ? subGenreOptions[genre] : [];

  return (
    <form className="filter-form">
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <Select
          id="genre"
          value={genreOptions.find(option => option.value === genre)}
          onChange={handleGenreChange}
          options={genreOptions}
          className="select-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="subGenre">Subgenre</label>
        <Select
          id="subGenre"
          value={filteredSubGenreOptions.find(option => option.value === subGenre)}
          onChange={(selectedOption) => setSubGenre(selectedOption ? selectedOption.value : '')}
          options={filteredSubGenreOptions}
          isDisabled={!genre}
          className="select-input"
        />
      </div>
    </form>
  );
};

export default BookFilter;
