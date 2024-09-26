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
      width: '300px',
      borderRadius: '8px',
      border: '1px solid #444',
      backgroundColor: '#333',
      color: 'white',
      marginBottom: '20px',
    }}
  />
  )
}

export default Search
