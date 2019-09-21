import React from 'react';
import '../styles/MiniBasket.css';

import IProduct from '../types/Product';
import strToUpper from '../utils/strToUpper';

import { BasketContext } from '../context/basket/BasketProvider';

interface MiniBasketComponentProps {}
export const renderMiniBasket = (products: IProduct[]) => {
  return products.map(product => {
    if (product.qty > 0) {
      return (
        <li className="list-group-item" key={product.name}>
          <span className="product-name">{strToUpper(product.name)}</span>
          <span className="ml-auto">Qty: {product.qty}</span>
        </li>
      )
    }
    return null
  })
}

const MiniBasketComponent: React.FC<MiniBasketComponentProps> = (props) => {
  return (
    <BasketContext.Consumer>
      {basket => (
        <div className="mini-basket">
          <ul className="list-group">
            <li className="list-group-item">Your Basket: {basket.products.length > 0 ? '' : 'Empty'}</li>
            {renderMiniBasket(basket.products)}
          </ul>
        </div>
      )}
    </BasketContext.Consumer>
  )
}

export default MiniBasketComponent
