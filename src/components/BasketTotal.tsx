import React, { ReactElement } from "react";
import IProduct from "../types/IProduct";
import { basketTotal } from "../utils/financial";

interface IBasketTotalProps {
  products: IProduct[];
  exchangeRate: number;
  symbol: string;
}

const BasketTotal = (props: IBasketTotalProps): ReactElement => {
  return (
    <div className="align-self-end">
      <h3>Total: {props.symbol} {basketTotal(props.products, props.exchangeRate)}</h3>
    </div>
  );
};

export default BasketTotal;
