import React, { useState } from 'react';
import './Address.css';

function Address() {
  const [addresses, setAddresses] = useState([]);
  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    pincode: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: ''
  });
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = () => {
    if (editIndex !== null) {
      // No need for update logic, as we're only adding new addresses
      setEditIndex(null);
    } else {
      // Add new address
      setAddresses([...addresses, form]);
      setForm({
        fullName: '',
        phoneNumber: '',
        pincode: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: ''
      });
      setShowForm(false); // Hide the form after adding a new address
    }
  };

  const handleEdit = (index) => {
    setForm(addresses[index]);
    setEditIndex(index);
    setShowForm(false); // Hide the main form when editing individual address
  };

  const handleDelete = (index) => {
    const updatedAddresses = addresses.filter((_, addrIndex) => addrIndex !== index);
    setAddresses(updatedAddresses);
  };

  const handleIndividualEditChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAddresses = addresses.map((addr, addrIndex) =>
      addrIndex === index ? { ...addr, [name]: value } : addr
    );
    setAddresses(updatedAddresses);
  };

  const handleIndividualEditSave = () => {
    setEditIndex(null);
  };

  return (
    <>
      <h1>Manage Addresses</h1>
      <div className="address-container">
        < div className="form">
        <button className="add-a-new-address" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Hide Form' : 'ADD A NEW ADDRESS'}
        </button>
        {showForm && (
          <div >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={form.phoneNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
            />
            <input
              type="text"
              name="addressLine1"
              placeholder="Address Line 1"
              value={form.addressLine1}
              onChange={handleChange}
            />
            <input
              type="text"
              name="addressLine2"
              placeholder="Address Line 2"
              value={form.addressLine2}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
            />
            <button className="add-address" onClick={handleAdd}>
              Add Address
            </button>
          </div>
        )}
        </div>
        <div className="address-list">
          {addresses.map((addr, index) => (
            <div key={index} className="address-item">
              {editIndex !== index && (
              <div>
                <h4>{addr.fullName} {addr.phoneNumber}</h4>
                <p>{addr.addressLine1} {addr.addressLine2} {addr.city} {addr.state} - {addr.pincode}</p>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
              )}
              {editIndex === index && (
                <div className="individual-form">
                  <input
                    type="text"
                    name="fullName"
                    value={addr.fullName}
                    onChange={(e) => handleIndividualEditChange(index, e)}
                  />
                  <input
                    type="text"
                    name="phoneNumber"
                    value={addr.phoneNumber}
                    onChange={(e) => handleIndividualEditChange(index, e)}
                  />
                  <input
                    type="text"
                    name="pincode"
                    value={addr.pincode}
                    onChange={(e) => handleIndividualEditChange(index, e)}
                  />
                  <input
                    type="text"
                    name="addressLine1"
                    value={addr.addressLine1}
                    onChange={(e) => handleIndividualEditChange(index, e)}
                  />
                  <input
                    type="text"
                    name="addressLine2"
                    value={addr.addressLine2}
                    onChange={(e) => handleIndividualEditChange(index, e)}
                  />
                  <input
                    type="text"
                    name="city"
                    value={addr.city}
                    onChange={(e) => handleIndividualEditChange(index, e)}
                  />
                  <input
                    type="text"
                    name="state"
                    value={addr.state}
                    onChange={(e) => handleIndividualEditChange(index, e)}
                  />
                  <button onClick={handleIndividualEditSave}>Save</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Address;
