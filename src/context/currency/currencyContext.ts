import React from 'react';

import { IExchangeRates, ISymbols } from '../../types/Currency';
import ICurrencies from '../../constants/currencies';
import defaultRates from '../../data/defaultRates';
import defaultSymbols from '../../data/defaultSymbols';

interface CurrencyContext {
  state: {
    currencies: IExchangeRates;
    selectedCurrency: ICurrencies;
    symbols: ISymbols;
  },
  symbol: string;
  selectCurrency: (currency: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CurrencyContext = React.createContext<CurrencyContext>({
  state: {
    currencies: {
      rates: defaultRates,
      base: '',
      date: ''
    },
    selectedCurrency: ICurrencies.GBP,
    symbols: defaultSymbols
  },
  symbol: '£',
  selectCurrency: (currency: React.ChangeEvent<HTMLSelectElement>) => { return new Error('No selectCurrency() method implemented') }
});

export default CurrencyContext;
