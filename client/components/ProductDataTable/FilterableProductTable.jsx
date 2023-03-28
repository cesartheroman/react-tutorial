import React, { useEffect, useState } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = () => {
  const [searchText, setSearchText] = useState('');
  const [inStockOnly, setinStockOnly] = useState(false);
  const [products, setProducts] = useState();

  const fetchProducts = async () => {
    const { data } = await (await fetch('/api/products')).json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <div>
      <SearchBar
        searchText={searchText}
        inStockOnly={inStockOnly}
        onSearchTextChange={setSearchText}
        onInStockOnlyChange={setinStockOnly}
      />
      {products && (
        <ProductTable
          products={products}
          searchText={searchText}
          inStockOnly={inStockOnly}
        />
      )}
    </div>
  );
};

export default FilterableProductTable;
