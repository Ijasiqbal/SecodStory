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
import useUpdateUser from '../../../utils/useUpdateUser';


const AddBook = ({ category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState({ main_title: '', sub_title: '' });
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState({ main_image: '', image1: '', image2: '' });
  const [genre, setGenre] = useState('');
  const [subgenre, setSubgenre] = useState('');
  const {updateUser, loading , error} = useUpdateUser();

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

  const handleSave = async () => {
    const formData = {
      title,
      author,
      description,
      price,
      images,
      genres: genre,
      category,
    };
    try {
      console.log('Adding book:', formData);
      const response = await axiosInstance.post(`book/addBook`, formData);
      console.log('Book added successfully:', response.data);
      updateUser();
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
              <label htmlFor="main_image">Main Image URL</label>
              <Input
                id="main_image"
                value={images.main_image}
                onChange={(e) => setImages({ ...images, main_image: e.target.value })}
                placeholder="Enter main image URL"
              />
            </Box>
            <Box mb={4}>
              <label htmlFor="image1">Image 1 URL</label>
              <Input
                id="image1"
                value={images.image1}
                onChange={(e) => setImages({ ...images, image1: e.target.value })}
                placeholder="Enter image 1 URL"
              />
            </Box>
            <Box mb={4}>
              <label htmlFor="image2">Image 2 URL</label>
              <Input
                id="image2"
                value={images.image2}
                onChange={(e) => setImages({ ...images, image2: e.target.value })}
                placeholder="Enter image 2 URL"
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
