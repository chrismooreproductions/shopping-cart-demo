import React from 'react';
import Pages from '../constants/index';

import { faShoppingBasket, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CurrencyContext from '../context/currency/currencyContext';

import ICurrencies from '../constants/currencies';

interface HeaderProps {
  page: Pages;
  setActivePage: (page: Pages) => void;
}

export default class Header extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <CurrencyContext.Consumer>{currency => (
        <nav className="navbar navbar-light bg-light justify-content-between mb-4">
          <a href="localhost:3000" className="navbar-brand">Chris Moore's Store</a>
            <div>
              <select value={currency.state.selectedCurrency} onChange={(event) => currency.selectCurrency(event)}>
                {Object.keys(ICurrencies).map(symbol => {
                  return <option value={symbol} key={symbol}>{symbol}</option>
                })}
              </select>
              <button 
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={() => this.props.setActivePage(this.props.page === Pages.Products ? Pages.Basket : Pages.Products)}
              >
                {this.props.page === Pages.Products ? <FontAwesomeIcon icon={faShoppingBasket} /> : <FontAwesomeIcon icon={faStore} />}
              </button>
            </div>
        </nav>
      )}
      </CurrencyContext.Consumer>
    )
  }
}