const Add = ({ newTodo, setNewTodo, addTodo }) => {
    return (
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
    )
  }
  
  export default Add
  