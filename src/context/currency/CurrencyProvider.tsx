import React from 'react';
import CurrencyContext from './currencyContext';

import defaultSymbols from '../../data/defaultSymbols';
import defaultRates from '../../data/defaultRates';

import { IExchangeRates, ISymbols } from '../../types/Currency';
import ICurrencies from '../../constants/currencies';

export interface ICurrencyState {
  currencies: IExchangeRates;
  symbols: ISymbols;
  selectedCurrency: ICurrencies;
}

export class Currency extends React.Component<{}, ICurrencyState> {
  state = {
    currencies: {
      rates: defaultRates,
      base: '',
      date: ''
    },
    symbols: defaultSymbols,
    selectedCurrency: ICurrencies.GBP,
  }

  fetchData<T>(url: string): Promise<T> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
  }

  componentDidMount() {
    this.fetchData<any>('https://api.exchangeratesapi.io/latest?base=GBP')
      .then(data => {
        this.setState({
          currencies: data
        })
      })
    this.fetchData<any>('https://gist.githubusercontent.com/Fluidbyte/2973986/raw/b0d1722b04b0a737aade2ce6e055263625a0b435/Common-Currency.json')
      .then(data => {
        this.setState({
          symbols: data
        })
      })
  }

  selectCurrency(event: React.ChangeEvent<HTMLSelectElement>) {
    const newCurrency = event.currentTarget.value as keyof typeof ICurrencies
    this.setState({
      selectedCurrency: ICurrencies[newCurrency]
    })
  }

  render() {
    return (
      <CurrencyContext.Provider value={{
        state: this.state,
        symbol: this.state.symbols[this.state.selectedCurrency].symbol,
        selectCurrency: (currency: React.ChangeEvent<HTMLSelectElement>) => this.selectCurrency(currency)
      }}>
        {this.props.children}
      </CurrencyContext.Provider>
    )
  }
}
