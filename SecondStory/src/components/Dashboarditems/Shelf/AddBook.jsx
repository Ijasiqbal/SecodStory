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
} from '@chakra-ui/react';
import styles from './AddBook.module.css';

const AddBook = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleFileChange = (e) => {
    setPhotos(Array.from(e.target.files));
  };

  const handleSave = () => {
    // Handle save action
    console.log({ title, author, price, description, photos });
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
