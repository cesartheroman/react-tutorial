import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import mockData from '../../utils/mockData';

const FilterableProductTable = () => {
  return (
    <div>
      <SearchBar />
      <ProductTable products={mockData} />
    </div>
  );
};

export default FilterableProductTable;
