import React from 'react';
import products from '../../data/products';

interface ProductsContext {

}

const ProductsContext = React.createContext({
  products: products
});

export default ProductsContext;
