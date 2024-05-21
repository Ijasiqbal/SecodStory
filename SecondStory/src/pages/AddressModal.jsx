// src/components/AddressModal.js
import React, { useState } from 'react';
import './styles.css/AddressModal.css';

const AddressModal = ({ onClose, onSave, currentAddress }) => {
  const [address, setAddress] = useState(currentAddress);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(address);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Change Address</h2>
        <div className="modal-body">
          <label>
            Address Line 1:
            <input type="text" name="line1" value={address.line1} onChange={handleChange} />
          </label>
          <label>
            Address Line 2:
          <input type="text" name="line2" value={address.line2} onChange={handleChange} />
          </label>   
          <label>
            City:
            <input type="text" name="city" value={address.city} onChange={handleChange} />
          </label>
          <label>
            State:
            <input type="text" name="state" value={address.state} onChange={handleChange} />
          </label>
          <label>
            Postal Code:
            <input type="text" name="postalCode" value={address.postalCode} onChange={handleChange} />
          </label>
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="button">Cancel</button>
          <button onClick={handleSave} className="button save-button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
