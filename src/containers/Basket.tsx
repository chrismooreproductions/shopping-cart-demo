import React from 'react';
import ICommonProps from '../types/Common';
import Pages from '../constants/index';
import IBasket from '../types/Basket';
import IProduct from '../types/Product';
import strToUpper from '../utils/strToUpper';

interface BasketProps extends ICommonProps {
  basket: IBasket
}

const renderMiniBasket = (products: IProduct[]) => {
  return products.map(product => {
    if (product.qty > 0) {
      return (
        <li className="list-group-item">
          <span className="product-name">{strToUpper(product.name)}</span>
          <span className="ml-auto">Qty: {product.qty}</span>
        </li>
      )
    }
  })
}

export default class Basket extends React.Component<BasketProps, {}> {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="main-content-wrapper">
            <h2>Your basket</h2>
            {renderMiniBasket(this.props.basket.products)}
          </div>
        </div>
      </div>
    )
  }
}