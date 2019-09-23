import React, { ReactElement } from "react";
import BasketLineItem, { IBasketLineItemProps } from "../components/BasketLineItem";
import BasketTotal from "../components/BasketTotal";
import Pages from "../constants/index";
import { BasketContext, IBasketContext } from "../context/basket/basketContext";
import { CurrencyContext, ICurrencyContext } from "../context/currency/currencyContext";
import "../styles/Basket.css";

interface IBasketProps {
  setActivePage: (page: Pages) => void;
}

export default class Basket extends React.Component<IBasketProps> {
  public render() {
    return (
      <BasketContext.Consumer>{(basket) => (
        <CurrencyContext.Consumer>{(currency) => {
          return (
            <div className="row basket">
              <div className="col-md-12">
                <div className="main-content-wrapper d-flex flex-column">
                  <h3 className="font-weight-bold">Your basket</h3>
                  <span className="ml-auto">{basket.products.length > 0 ? "" : "Empty"}</span>
                  {basket.products.length > 0 && this.renderBasket(basket, currency)}
                  {basket.products.length > 0 && this.renderTotal(basket, currency)}
                </div>
              </div>
            </div>
          );
        }}</CurrencyContext.Consumer>
      )}</BasketContext.Consumer>
    );
  }

  private renderBasket = (
    basket: IBasketContext,
    currency: ICurrencyContext,
  ): Array<ReactElement<IBasketLineItemProps>> => {
  const selectedCurrency = currency.state.selectedCurrency;
  const exchangeRate = currency.state.currencies.rates[selectedCurrency];

  return (
    basket.products.map((product) => {
      return (
        <BasketLineItem
          product={product}
          symbol={currency.symbol}
          exchangeRate={exchangeRate}
          basket={basket}
          key={product.name}
        />
      );
    }));
  }

  private renderTotal = (basket: IBasketContext, currency: ICurrencyContext) => (
    <BasketTotal
      products={basket.products}
      exchangeRate={currency.state.currencies.rates[currency.state.selectedCurrency]}
      symbol={currency.symbol}
    />
  )
}
