const Search = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search todos..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: '12px',
        fontSize: '16px',
        width: '250px',
        borderRadius: '12px',
        border: '2px solid #666',
        backgroundColor: '#282828',
        color: '#eee',
        transition: 'border-color 0.3s ease',
      }}
    />
  );
};

export default Search;