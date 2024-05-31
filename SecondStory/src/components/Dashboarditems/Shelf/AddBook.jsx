import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import {
  Box,
  Button,
  Input,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Select,
} from '@chakra-ui/react';
import styles from './AddBook.module.css';

const AddBook = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState([]);
  const [genre, setGenre] = useState('');
  const [subgenre, setSubgenre] = useState('');

  const genres = [
    { value: 'fiction', label: 'Fiction' },
    { value: 'non-fiction', label: 'Non-Fiction' },
    // Add more genres here
  ];

  const subgenres = {
    fiction: [
      { value: 'fantasy', label: 'Fantasy' },
      { value: 'sci-fi', label: 'Science Fiction' },
      // Add more subgenres for fiction here
    ],
    'non-fiction': [
      { value: 'biography', label: 'Biography' },
      { value: 'self-help', label: 'Self Help' },
      // Add more subgenres for non-fiction here
    ],
  };

  const handleFileChange = (e) => {
    setPhotos(Array.from(e.target.files));
  };

  const handleSave = () => {
    // Handle save action
    console.log({ title, author, price, description, photos, genre, subgenre });
    onClose();
  };

  return (
    <>
      <Box className={styles.base} onClick={onOpen}>
        <Box className={styles.plus}>
          <FaPlus />
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Book</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box mb={4}>
              <label htmlFor="title">Title</label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter book title"
              />
            </Box>
            <Box mb={4}>
              <label htmlFor="author">Author</label>
              <Input
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter book author"
              />
            </Box>
            <Box mb={4}>
              <label htmlFor="price">Price</label>
              <Input
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter book price"
              />
            </Box>
            <Box mb={4}>
              <label htmlFor="description">Description</label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter book description"
              />
            </Box>
            <Box mb={4}>
              <label htmlFor="photos">Photos</label>
              <Input
                id="photos"
                type="file"
                multiple
                onChange={handleFileChange}
              />
            </Box>
            <Box mb={4}>
              <label htmlFor="genre">Genre</label>
              <Select
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="Select genre"
              >
                {genres.map((genre) => (
                  <option key={genre.value} value={genre.value}>
                    {genre.label}
                  </option>
                ))}
              </Select>
            </Box>
            <Box mb={4}>
              <label htmlFor="subgenre">Subgenre</label>
              <Select
                id="subgenre"
                value={subgenre}
                onChange={(e) => setSubgenre(e.target.value)}
                placeholder="Select subgenre"
                isDisabled={!genre}
              >
                {genre &&
                  subgenres[genre].map((subgenre) => (
                    <option key={subgenre.value} value={subgenre.value}>
                      {subgenre.label}
                    </option>
                  ))}
              </Select>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddBook;
