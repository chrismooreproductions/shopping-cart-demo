import React from 'react';
import '../styles/Products.css';
import '../styles/App.css';
import ICommonProps from '../types/Common';
import IBasket from '../types/Basket';

import IProduct from '../types/Product';
import ProductComponent from '../components/ProductComponent';
import MiniBasketComponent from '../components/MiniBasketComponent';

interface IProductsProps extends ICommonProps {
  basket: IBasket
}

export default class Products extends React.Component<IProductsProps, {}> {
  renderProducts(products: IProduct[]): JSX.Element[] {
    return products.map(product => {
      return <ProductComponent
              product={product}
              key={products.indexOf(product)}
              addProductToBasket={this.props.addProductToBasket} 
              removeProductFromBasket={this.props.removeProductFromBasket}
              deleteProductFromBasket={this.props.deleteProductFromBasket}
            />
    })
  }

  render() {
    const { setActivePage, products } = this.props;
    return (
      <div className="row">
        <div className="col-md-9">
          <div className="products main-content-wrapper mb-4">
            <h1 className="mb-4">Here's what we have in store...</h1>
            <div className="row">
              {this.renderProducts(products)}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <MiniBasketComponent
            basket={this.props.basket}
          />
        </div>
      </div>
    )
  }
}
