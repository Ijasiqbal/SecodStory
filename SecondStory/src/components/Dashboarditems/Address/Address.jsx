import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, Paper } from '@mui/material';

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
      setEditIndex(null);
    } else {
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
      setShowForm(false);
    }
  };

  const handleEdit = (index) => {
    setForm(addresses[index]);
    setEditIndex(index);
    setShowForm(false);
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
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Manage Addresses
      </Typography>
      <Paper>
      <Box mb={2}>
        <Button variant="contained" color="primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Hide Form' : 'ADD A NEW ADDRESS'}
        </Button>
      </Box>
      {showForm && (
        <Typography elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Pincode"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Address Line 1"
            name="addressLine1"
            value={form.addressLine1}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Address Line 2"
            name="addressLine2"
            value={form.addressLine2}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="City"
            name="city"
            value={form.city}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="State"
            name="state"
            value={form.state}
            onChange={handleChange}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Add Address
          </Button>
        </Typography>
      )}
      </Paper>
      <div className="address-list">
        {addresses.map((addr, index) => (
          <Paper key={index} elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
            {editIndex !== index && (
              <Box>
                <Typography variant="h6">{addr.fullName + " " + addr.phoneNumber}</Typography>
                <Typography variant="body1">{addr.addressLine1 + ", " + addr.addressLine2 + ", " + addr.city + ", " + addr.state}</Typography>
                <Typography variant="body1">{addr.pincode}</Typography>
                <Button variant="contained" color="primary" onClick={() => handleEdit(index)}>
                  Edit
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(index)} style={{ marginLeft: '8px' }}>
                  Delete
                </Button>
              </Box>
            )}
            {editIndex === index && (
              <Box className="individual-form">
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={addr.fullName}
                  onChange={(e) => handleIndividualEditChange(index, e)}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  value={addr.phoneNumber}
                  onChange={(e) => handleIndividualEditChange(index, e)}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Pincode"
                  name="pincode"
                  value={addr.pincode}
                  onChange={(e) => handleIndividualEditChange(index, e)}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Address Line 1"
                  name="addressLine1"
                  value={addr.addressLine1}
                  onChange={(e) => handleIndividualEditChange(index, e)}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Address Line 2"
                  name="addressLine2"
                  value={addr.addressLine2}
                  onChange={(e) => handleIndividualEditChange(index, e)}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={addr.city}
                  onChange={(e) => handleIndividualEditChange(index, e)}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="State"
                  name="state"
                  value={addr.state}
                  onChange={(e) => handleIndividualEditChange(index, e)}
                  margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handleIndividualEditSave}>
                  Save
                </Button>
              </Box>
            )}
          </Paper>
        ))}
      </div>
    </Container>
  );
}

export default Address;
