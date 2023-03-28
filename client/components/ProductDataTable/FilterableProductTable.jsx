import React, { useState } from 'react';

import PRODUCTS from '../../utils/products';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = () => {
  const [searchText, setSearchText] = useState('');
  const [inStockOnly, setinStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        searchText={searchText}
        inStockOnly={inStockOnly}
        onSearchTextChange={setSearchText}
        onInStockOnlyChange={setinStockOnly}
      />
      <ProductTable
        products={PRODUCTS}
        searchText={searchText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;
