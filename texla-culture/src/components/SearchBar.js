import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    const searchText = e.target.value;
    onSearch(searchText);
  };

  return (
    <TextField
      label="Search client or invoice number..."
      variant="outlined"
      size="small"
      onChange={handleSearch}
      fullWidth
      margin="normal"
    />
  );
};

export default SearchBar;
