const Table = ({ todos, removeTodo }) => {
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
  );
};

export default Table;
