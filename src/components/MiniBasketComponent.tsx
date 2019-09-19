import React from 'react';
import '../styles/MiniBasket.css';
import IBasket from '../types/Basket';
import IProduct from '../types/Product';
import strToUpper from '../utils/strToUpper';

interface MiniBasketComponentProps {
  basket: IBasket;
}
export const renderMiniBasket = (products: IProduct[]) => {
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

const MiniBasketComponent: React.FC<MiniBasketComponentProps> = (props) => {
  return (
    <div className="mini-basket">
      <ul className="list-group">
        <li className="list-group-item">Your Basket:</li>
        {renderMiniBasket(props.basket.products)}
      </ul>
    </div>
  )
}

export default MiniBasketComponent