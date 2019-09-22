import React from "react";
import { CurrencyContext } from "./currencyContext";

import defaultRates from "../../data/defaultRates";
import defaultSymbols from "../../data/defaultSymbols";

import ICurrencies from "../../constants/currencies";
import { IExchangeRates, ISymbols } from "../../types/ICurrency";

export interface ICurrencyState {
  currencies: IExchangeRates;
  symbols: ISymbols;
  selectedCurrency: ICurrencies;
}

export class CurrencyProvider extends React.Component<{}, ICurrencyState> {
  public state = {
    currencies: {
      base: "",
      date: "",
      rates: defaultRates,
    },
    selectedCurrency: ICurrencies.GBP,
    symbols: defaultSymbols,
  };

  public fetchData<T>(url: string): Promise<T> {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      });
  }

  public componentDidMount() {
    this.fetchData<any>("https://api.exchangeratesapi.io/latest?base=GBP")
      .then((data) => {
        this.setState({
          currencies: data,
        });
      });
    this.fetchData<any>("https://gist.githubusercontent.com/Fluidbyte/2973986/raw/b0d1722b04b0a737aade2ce6e055263625a0b435/Common-Currency.json")
      .then((data) => {
        this.setState({
          symbols: data,
        });
      });
  }

  public selectCurrency(event: React.ChangeEvent<HTMLSelectElement>) {
    const newCurrency = event.currentTarget.value as keyof typeof ICurrencies;
    this.setState({
      selectedCurrency: ICurrencies[newCurrency],
    });
  }

  public render() {
    return (
      <CurrencyContext.Provider value={{
        selectCurrency: (currency: React.ChangeEvent<HTMLSelectElement>) => this.selectCurrency(currency),
        state: this.state,
        symbol: this.state.symbols[this.state.selectedCurrency].symbol_native,
      }}>
        {this.props.children}
      </CurrencyContext.Provider>
    );
  }
}
