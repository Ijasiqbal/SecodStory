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
import axiosInstance from '../../../api/axiosInstance';

const AddBook = ({ category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState({ main_title: '', sub_title: '' });
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState({ main_image: '', image1: '', image2: '' });
  const [genre, setGenre] = useState('');
  const [subgenre, setSubgenre] = useState('');

  const genres = [
    { value: 'Fiction', label: 'Fiction' },
    { value: 'Non-fiction', label: 'Non-Fiction' },
    // Add more genres here
  ];

  const subgenres = {
    Fiction: [
      { value: 'fantasy', label: 'Fantasy' },
      { value: 'sci-fi', label: 'Science Fiction' },
      // Add more subgenres for fiction here
    ],
    'Non-fiction': [
      { value: 'biography', label: 'Biography' },
      { value: 'self-help', label: 'Self Help' },
      // Add more subgenres for non-fiction here
    ],
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length >= 3) {
      setImages({
        main_image: URL.createObjectURL(files[0]), // Replace with your actual upload logic
        image1: URL.createObjectURL(files[1]), // Replace with your actual upload logic
        image2: URL.createObjectURL(files[2]), // Replace with your actual upload logic
      });
    }
  };

  const handleSave = async () => {
    const formData = {
      title,
      author,
      description,
      price,
      images,
      genres: genre,
      category: category === 'To Sell' ? 'sell' : 'lend',
    };
    try {
      console.log('Adding book:', formData)
      const response = await axiosInstance.post(`book/addBook`, formData);
      console.log('Book added successfully:', response.data);
    } catch (error) {
      console.error('Error adding book:', error);
    }
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
              <label htmlFor="main_title">Main Title</label>
              <Input
                id="main_title"
                value={title.main_title}
                onChange={(e) => setTitle({ ...title, main_title: e.target.value })}
                placeholder="Enter main title"
              />
            </Box>
            <Box mb={4}>
              <label htmlFor="sub_title">Sub Title</label>
              <Input
                id="sub_title"
                value={title.sub_title}
                onChange={(e) => setTitle({ ...title, sub_title: e.target.value })}
                placeholder="Enter sub title"
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
