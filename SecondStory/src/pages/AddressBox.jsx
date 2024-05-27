
import React, { useState } from 'react';
import AddressModal from './AddressModal';
import './styles.css/AddressBox.css';

const AddressBox = () => {
  const [address, setAddress] = useState({
    line1: '123 Main St',
    city: 'Springfield',
    state: 'IL',
    postalCode: '62704',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveAddress = (newAddress) => {
    setAddress(newAddress);
    setIsModalOpen(false);
  };

  return (
    <div className="address-box"> 
    <div className='address-container'>
        <h2>Delivery Address</h2>
        <p>{address.line1}</p>
        <p>{address.city}, {address.state} {address.postalCode}</p>
      </div> 
      <div className='button-box'>
         <button className="button" onClick={handleOpenModal}>Change Address</button>
         {isModalOpen && <AddressModal onClose={handleCloseModal} onSave={handleSaveAddress} currentAddress={address} />}
      </div> 
    </div>
  );
};

export default AddressBox; 
