import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

export default function BookDetailsModal({ isOpen, onClose, bookData }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Book Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {bookData ? (
            <div>
              <img src={bookData.images.main_Image} alt={bookData.title.main_title} />
              <h2>{bookData.title.main_title}</h2>
              <p>Author: {bookData.author}</p>
              <p>{bookData.description}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
