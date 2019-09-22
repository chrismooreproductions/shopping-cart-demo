import React from "react";
import { ISymbols } from "../types/Currency";
import IProduct from "../types/Product";
import strToUpper from "../utils/strToUpper";

export interface IBasketLineItemComponentProps {
  product: IProduct;
  symbol: {
    symbol: ISymbols;
  };
  exchangeRate: number;
}

export default class BasketLineItemComponent extends React.PureComponent<IBasketLineItemComponentProps> {
  public render() {
    const { product } = this.props;
    return (
      <li className="list-group-item border border-0 d-flex" key={product.name}>
        <span className="product-name">{strToUpper(product.name)}</span>
        <span className="ml-auto">Qty: {product.qty}</span>
        <span className="price">{this.props.symbol.symbol}</span>
      </li>
    );
  }
}
