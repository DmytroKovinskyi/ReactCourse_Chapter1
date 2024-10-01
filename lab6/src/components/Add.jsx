const Add = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Add new todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        style={{
          padding: '12px',
          fontSize: '16px',
          width: '250px',
          borderRadius: '12px',
          border: '2px solid #666',
          backgroundColor: '#282828',
          color: '#eee',
          marginRight: '12px',
          transition: 'border-color 0.3s ease',
        }}
      />
      <button
        onClick={addTodo}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
      >
        Add
      </button>
    </div>
  );
};

export default Add;