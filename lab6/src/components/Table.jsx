import React, { useState } from 'react';

const Table = ({ todos, removeTodo, updateTodo }) => {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [error, setError] = useState('');

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.title);
    setError(''); 
  };

  const saveEdit = (id) => {
    if (editText.trim() === '') {
      setError('Title is required.'); 
      return;
    }
    updateTodo(id, editText); 
    setEditingId(null);
    setError('');
  };

  return (
    <ul style={{ listStyleType: 'none', padding: '0', width: '100%', maxWidth: '500px' }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#444',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          {editingId === todo.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              style={{
                flex: 1,
                padding: '8px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '1px solid #777',
                backgroundColor: '#555',
                color: 'white',
                marginRight: '10px',
              }}
            />
          ) : (
            <span style={{ flex: 1 }}>{todo.title}</span>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {editingId === todo.id ? (
              <button
                onClick={() => saveEdit(todo.id)}
                style={{
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => startEdit(todo)}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
              >
                Edit
              </button>
            )}
            <button
              onClick={() => removeTodo(todo.id)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 12px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              Remove
            </button>
          </div>
         
          {editingId === todo.id && error && (
            <div style={{ color: 'red', marginTop: '10px', flex: '1 0 100%' }}>{error}</div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Table;
