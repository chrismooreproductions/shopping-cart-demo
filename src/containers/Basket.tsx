import React, { ReactElement } from "react";

import Pages from "../constants/index";
import { BasketContext } from "../context/basket/basketContext";
import CurrencyContext from "../context/currency/currencyContext";
import ICommonProps from "../types/Common";
import IProduct from "../types/Product";

import BasketLineItemComponent, { IBasketLineItemComponentProps } from "../components/BasketLineItemComponent";

interface IBasketProps extends ICommonProps {
  setActivePage: (page: Pages) => void;
}

export default class Basket extends React.Component<IBasketProps> {
  public renderBasket = (products: IProduct[], currency: any): Array<ReactElement<IBasketLineItemComponentProps>> => {
    const selectedCurrency = currency.selectedCurrency;
    const exchangeRate = currency.currencies.rates[selectedCurrency];
    const symbol = currency.symbols[selectedCurrency];

    return products.map((product) => {
      return (
        <BasketLineItemComponent
          product={product}
          symbol={symbol}
          exchangeRate={exchangeRate}
        />
      );
    });
  }

  public render() {
    return (
      <BasketContext.Consumer>{(basket) => (
        <CurrencyContext.Consumer>{(currency) => {
          return (
            <div className="row">
              <div className="col-md-12">
                <div className="main-content-wrapper">
                  <h3 className="font-weight-bold">Your basket</h3>
                  <span className="ml-auto">{basket.products.length > 0 ? "" : "Empty"}</span>
                  {this.renderBasket(basket.products, currency.state)}
                </div>
              </div>
            </div>
          );
        }}</CurrencyContext.Consumer>
      )}
      </BasketContext.Consumer>
    );
  }
}
