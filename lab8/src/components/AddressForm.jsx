// src/components/AddressForm.jsx
import React, { useState } from 'react';

const AddressForm = ({ onAdd }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!firstName) newErrors.firstName = 'The first name is required';
    if (!lastName) newErrors.lastName = 'The last name is required';
    if (!phone) newErrors.phone = 'The phone is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAdd({ firstName, lastName, phone });
    setFirstName('');
    setLastName('');
    setPhone('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
          />
          {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
        </label>
      </div>
      <div>
        <label>
          Last Name
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
          />
          {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
        </label>
      </div>
      <div>
        <label>
          Phone
          <input 
            type="text" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
          />
          {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
        </label>
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddressForm;
