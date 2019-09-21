import React from 'react';
import IProduct from '../types/Product';
import strToUpper from '../utils/strToUpper';

export interface IBasketLineItemComponentProps {
  product: IProduct;
  symbol: any;
  exchangeRate: number;
}

export default class BasketLineItemComponent extends React.PureComponent<IBasketLineItemComponentProps> {
  render() {
    const { product } = this.props;
    return (
      <li className="list-group-item border border-0 d-flex">
        <span className="product-name">{strToUpper(product.name)}</span>
        <span className="ml-auto">Qty: {product.qty}</span>
        <span className="price">{this.props.symbol.symbol}</span>
      </li>
    )
  }
}