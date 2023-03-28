import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import PRODUCTS from '../../utils/products';

const FilterableProductTable = () => {
  return (
    <div>
      <SearchBar />
      <ProductTable products={PRODUCTS} />
    </div>
  );
};

export default FilterableProductTable;
