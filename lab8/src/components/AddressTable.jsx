// src/components/AddressTable.jsx
import React from 'react';

const AddressTable = ({ contacts, onEdit }) => {
  if (contacts.length === 0) {
    return <div>No data to display</div>;
  }

  return (
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
          <tr key={contact.id}>
            <td>{contact.id}</td>
            <td>
              <input 
                type="text" 
                defaultValue={contact.firstName} 
                onBlur={(e) => onEdit(contact.id, { firstName: e.target.value })}
              />
            </td>
            <td>
              <input 
                type="text" 
                defaultValue={contact.lastName} 
                onBlur={(e) => onEdit(contact.id, { lastName: e.target.value })}
              />
            </td>
            <td>
              <input 
                type="text" 
                defaultValue={contact.phone} 
                onBlur={(e) => onEdit(contact.id, { phone: e.target.value })}
              />
            </td>
            <td>
              <button onClick={() => onEdit(contact.id)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AddressTable;
