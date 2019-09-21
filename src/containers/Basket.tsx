import React, { ReactElement } from 'react';

import ICommonProps from '../types/Common';
import IProduct from '../types/Product';

import { BasketContext } from '../context/basket/BasketProvider';
import CurrencyContext from '../context/currency/currencyContext';

import BasketLineItemComponent, { IBasketLineItemComponentProps } from '../components/BasketLineItemComponent';

interface IBasketProps extends ICommonProps {}

export default class Basket extends React.Component<IBasketProps> {
  renderBasket = (products: IProduct[], currency: any): ReactElement<IBasketLineItemComponentProps>[] => {
    const selectedCurrency = currency.selectedCurrency;
    const exchangeRate = currency.currencies.rates[selectedCurrency];
    const symbol = currency.symbols[selectedCurrency]
    
    return products.map(product => {
      return (
        <BasketLineItemComponent
          product={product}
          symbol={symbol}
          exchangeRate={exchangeRate}
        />
      )
    })
  }

  render() {
    return (
      <BasketContext.Consumer>{basket => (
        <CurrencyContext.Consumer>{currency => {
          return (
            <div className="row">
              <div className="col-md-12">
                <div className="main-content-wrapper">
                  <h3 className="font-weight-bold">Your basket</h3><span className="ml-auto">{basket.products.length > 0 ? '' : 'Empty'}</span>
                  {this.renderBasket(basket.products, currency.state)}
                </div>
              </div>
            </div>
          )
        }}</CurrencyContext.Consumer>
      )}
      </BasketContext.Consumer>
    )
  }
}