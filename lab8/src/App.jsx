// src/App.jsx
import React, { useState } from 'react';
import AddressForm from './components/AddressForm';
import AddressTable from './components/AddressTable';
import Book from './models/Book';

const App = () => {
  const [contacts, setContacts] = useState([]);
  let nextId = contacts.length + 1;

  const addContact = (data) => {
    const newContact = new Book(nextId++, data.firstName, data.lastName, data.phone);
    setContacts((prev) => [...prev, newContact]);
  };

  const editContact = (id, updatedData) => {
    setContacts((prev) => 
      prev.map(contact => 
        contact.id === id 
          ? { ...contact, ...updatedData } 
          : contact
      )
    );
  };

  return (
    <div>
      <h1>Address Book</h1>
      <AddressForm onAdd={addContact} />
      <AddressTable contacts={contacts} onEdit={editContact} />
    </div>
  );
};

export default App;
