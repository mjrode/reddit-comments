import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange, value }) => (
  <input
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
    value={value}
  />
);
