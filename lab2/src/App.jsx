import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [search, setSearch] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), title: newTodo }]);
      setNewTodo('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ToDo App</h1>
      
      <div style={styles.inputSection}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new ToDo"
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>Add</button>
      </div>

      <div style={styles.searchSection}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title"
          style={styles.input}
        />
      </div>

      <ul style={styles.todoList}>
        {filteredTodos.map(todo => (
          <li key={todo.id} style={styles.todoItem}>
            <span>{todo.title}</span>
            <button onClick={() => removeTodo(todo.id)} style={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    margin: '0 auto',
    width: '100%',
    maxWidth: '600px',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#1e1e1e',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    minHeight: '100vh',
  },
  title: {
    fontSize: '42px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  inputSection: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
    gap: '10px',
  },
  searchSection: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  input: {
    padding: '15px',
    width: '70%',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#333',
    color: 'white',
    fontSize: '16px',
  },
  addButton: {
    padding: '15px 20px',
    borderRadius: '8px',
    backgroundColor: '#00aaff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background-color 0.2s',
  },
  addButtonHover: {
    backgroundColor: '#008ecc',
  },
  todoList: {
    listStyleType: 'none',
    padding: '0',
    marginTop: '20px',
  },
  todoItem: {
    backgroundColor: '#444',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    padding: '10px 15px',
    fontWeight: 'bold',
  },
};

export default App;