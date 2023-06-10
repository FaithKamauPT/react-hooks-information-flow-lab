import React from 'react';

const Filter = ({ onCategoryChange }) => {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <select onChange={handleCategoryChange}>
      <option value="">All</option>
      <option value="Category 1">Category 1</option>
      <option value="Category 2">Category 2</option>
      {/* Add more options for different categories */}
    </select>
  );
};

export default Filter;
