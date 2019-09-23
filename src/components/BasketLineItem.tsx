import React from "react";
import { IBasketContext } from "../context/basket/basketContext";
import IProduct from "../types/IProduct";
import { integerToUnitPrice } from "../utils/financial";
import strToUpper from "../utils/strToUpper";
import RemoveProductButton from "./RemoveProductButton";

export interface IBasketLineItemProps {
  product: IProduct;
  basket: IBasketContext;
  symbol: string;
  exchangeRate: number;
}

export default class BasketLineItem extends React.PureComponent<IBasketLineItemProps> {
  public render() {
    const { basket, product, exchangeRate } = this.props;
    const subTotal = integerToUnitPrice(product.price, exchangeRate, product.qty);
    return (
      <li className="list-group-item border border-0 d-flex align-items-center" key={product.name}>
        <span className="product-name">{strToUpper(product.name)}</span>
        <div className="ml-auto d-flex align-items-center">
          <button
            className="btn btn-primary"
            name={product.name}
            onClick={(e) => basket.addProductToBasket(e)}>
            +
          </button>
          <RemoveProductButton
            basket={basket}
            product={product}
          />
          <span className="ml-auto mr-5">Qty: {product.qty}</span>
          <div className="price--subtotal d-flex align-items-center">
            <span className="price--subtotal-label font-weight-bold mr-auto">Subtotal: </span><span className="price--subtotal-value">{this.props.symbol}{subTotal}</span>
          </div>
        </div>
      </li>
    );
  }
}
