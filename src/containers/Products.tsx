import React from 'react';
import '../styles/Products.css';
import '../styles/App.css';
import ICommonProps from '../types/Common';

import ProductComponent from '../components/ProductComponent';
import MiniBasketComponent from '../components/MiniBasketComponent';
import ProductsContext from '../context/products/productsContext';

interface IProductsProps extends ICommonProps {}

export default class Products extends React.Component<IProductsProps, {}> {
  render() {
    return (
      <ProductsContext.Consumer>{products => (
          <div className="row">
            <div className="col-md-9">
              <div className="products main-content-wrapper mb-4">
                <h1 className="mb-4">Here's what we have in store...</h1>
                <div className="row">
                  { products.products.map(product => {
                      return (
                        <ProductComponent
                          product={product}
                          key={products.products.indexOf(product)}
                        />
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <MiniBasketComponent />
            </div>
          </div>
      )}</ProductsContext.Consumer>
    )
  }
}
