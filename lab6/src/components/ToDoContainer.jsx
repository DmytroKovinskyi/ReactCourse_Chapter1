import React, { useState } from 'react';
import Search from './Search';
import Add from './Add';
import Table from './Table';
import useGetAllToDo from '../hooks/useGetAllToDo';
import Loader from './Loader'; 

const ToDoContainer = () => {
  const { isLoading, data, setData: setTodos } = useGetAllToDo();
  const [newTodo, setNewTodo] = useState('');
  const [search, setSearch] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    setTodos([...data, { id: newId, title: newTodo }]);
    setNewTodo('');
  };

  const removeTodo = (id) => {
    setTodos(data.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTitle) => {
    setTodos(
      data.map((todo) => (todo.id === id ? { ...todo, title: updatedTitle } : todo))
    );
  };

  const filteredTodos = data.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: '40px 20px',
        backgroundColor: '#1e1e1e',
        color: '#fff',
        minHeight: '100vh',
        fontFamily: 'Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        transition: 'all 0.3s ease',
      }}
    >
      <h1 style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: '30px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
      }}>ToDo App</h1>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <Search search={search} setSearch={setSearch} />
        <Add newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      </div>

      <Loader isLoading={isLoading}>
        <Table todos={filteredTodos} removeTodo={removeTodo} updateTodo={updateTodo} />
      </Loader>
    </div>
  );
};

export default ToDoContainer;
