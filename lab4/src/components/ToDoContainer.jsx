import React, { useState, useEffect } from 'react';
import Search from './Search';
import Add from './Add';
import Table from './Table';
import useGetAllToDo from '../hooks/useGetAllToDo';

const ToDoContainer = () => {
  const { isLoading, data } = useGetAllToDo();

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!isLoading) {
      setTodos(data.slice(0, 10)); 
    }
  }, [isLoading, data]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    setTodos([...todos, { id: newId, title: newTodo }]);
    setNewTodo('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

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
      <Search search={search} setSearch={setSearch} />
      <Add newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      {isLoading ? (
        <div style={{ marginTop: '20px' }}>Loading...</div>
      ) : (
        <Table todos={filteredTodos} removeTodo={removeTodo} />
      )}
    </div>
  );
};

export default ToDoContainer;
