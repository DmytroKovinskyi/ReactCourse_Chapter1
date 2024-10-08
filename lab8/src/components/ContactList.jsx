import React from 'react';
import ContactItem from './AddressTable';

const ContactList = ({ contacts, handleEdit, handleDelete }) => {
  return contacts.length === 0 ? (
    <p>No data to display</p>
  ) : (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
