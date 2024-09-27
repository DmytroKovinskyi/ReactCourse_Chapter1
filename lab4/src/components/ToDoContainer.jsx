import React, { useState, useEffect } from 'react';
import Search from './Search';
import Add from './Add';
import Table from './Table';
import useGetAllToDo from '../hooks/useGetAllToDo';

const ToDoContainer = () => {
  const { isLoading, data , setData: setTodos} = useGetAllToDo(); // Отримання даних із хуку

  const [newTodo, setNewTodo] = useState('');
  const [search, setSearch] = useState('');



  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    setTodos([...data, { id: newId, title: newTodo }]); // Оновлення стану з новим todo
    setNewTodo('');
  };

  const removeTodo = (id) => {
    setTodos(data.filter((todo) => todo.id !== id)); // Оновлення стану з видаленим todo
  };

  const filteredTodos = data.filter((todo) =>
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
