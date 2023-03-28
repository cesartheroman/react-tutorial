import React from 'react';

const SearchBar = ({
  searchText,
  inStockOnly,
  onSearchTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
