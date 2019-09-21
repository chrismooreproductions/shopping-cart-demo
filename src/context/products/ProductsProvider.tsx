import React from 'react';

import products from '../../data/products';
import ProductsContext from './productsContext';

export class Products extends React.Component<{}, {}> {
  render() {
    return (
      <ProductsContext.Provider value={{
        products: products
      }}>
        {this.props.children}
      </ProductsContext.Provider>
    )
  }
}