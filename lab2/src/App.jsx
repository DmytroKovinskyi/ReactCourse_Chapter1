import { useState } from 'react'
import './App.css'
import PageTitle from './components/PageTitle'
import Search from './components/Search'
import Add from './components/Add'
import Table from './components/Table'

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'delectus aut autem' },
    { id: 2, title: 'quis ut nam facilis et officia qui' },
  ])
  const [newTodo, setNewTodo] = useState('')
  const [search, setSearch] = useState('')

  const addTodo = () => {
    if (newTodo.trim() === '') return
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1
    setTodos([...todos, { id: newId, title: newTodo }])
    setNewTodo('')
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div
      style={{
        padding: '40px 20px',
        backgroundColor: '#222',
        color: 'white',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px' }}>ToDo App</h1>

      <input
        type="text"
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '12px',
          fontSize: '16px',
          width: '300px',
          borderRadius: '8px',
          border: '1px solid #444',
          backgroundColor: '#333',
          color: 'white',
          marginBottom: '20px',
        }}
      />

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Add new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{
            padding: '12px',
            fontSize: '16px',
            width: '300px',
            borderRadius: '8px',
            border: '1px solid #444',
            backgroundColor: '#333',
            color: 'white',
            marginRight: '10px',
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: '12px 20px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyleType: 'none', padding: '0', width: '100%', maxWidth: '500px' }}>
        {filteredTodos.map((todo) => (
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
            <span>{todo.title}</span>
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
          </li>
        ))}
      </ul>
    </div>
  );
};



export default App
