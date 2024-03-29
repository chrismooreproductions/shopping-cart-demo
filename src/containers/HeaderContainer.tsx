import { faShoppingBasket, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Pages from "../constants/pages";
import { CurrencyContext, ICurrencyContext } from "../context/currency/currencyContext";
import "../styles/Header.css";

import ICurrencies from "../constants/currencies";

interface IHeaderProps {
  page: Pages;
  setActivePage: (page: Pages) => void;
}

export default class Header extends React.Component<IHeaderProps, {}> {
  public render() {
    return (
      <CurrencyContext.Consumer>{(currency: ICurrencyContext) => (
        <nav className="navbar navbar-light bg-light justify-content-between mb-4">
          <a href="localhost:3000" className="navbar-brand">Chris Moore's Store</a>
            <div className="nav--store-functions">
              <select className="nav--currency-select"
                value={currency.state.selectedCurrency}
                onChange={(event) => currency.selectCurrency(event)}>
                {Object.keys(ICurrencies).map((symbol) => {
                  const thisCurrency = symbol as keyof typeof ICurrencies;
                  return <option value={symbol} key={symbol}>
                      {symbol}: {currency.state.symbols[thisCurrency].name}
                    </option>;
                })}
              </select>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={() => this.props.setActivePage(this.props.page === Pages.Products ?
                  Pages.Basket
                  : Pages.Products)}
              >
                {this.props.page === Pages.Products ?
                  <FontAwesomeIcon icon={faShoppingBasket} />
                  : <FontAwesomeIcon icon={faStore} />}
              </button>
            </div>
        </nav>
      )}
      </CurrencyContext.Consumer>
    );
  }
}
