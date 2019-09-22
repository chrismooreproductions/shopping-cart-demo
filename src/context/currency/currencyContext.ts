import React from "react";

import ICurrencies from "../../constants/currencies";
import defaultRates from "../../data/defaultRates";
import defaultSymbols from "../../data/defaultSymbols";
import { IExchangeRates, ISymbols } from "../../types/ICurrency";

export interface ICurrencyContext {
  state: {
    currencies: IExchangeRates;
    selectedCurrency: ICurrencies;
    symbols: ISymbols;
  };
  symbol: string;
  selectCurrency: (currency: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CurrencyContext = React.createContext<ICurrencyContext>({
  selectCurrency: (currency: React.ChangeEvent<HTMLSelectElement>) =>
    new Error("No selectCurrency() method implemented"),
  state: {
    currencies: {
      base: "",
      date: "",
      rates: defaultRates,
    },
    selectedCurrency: ICurrencies.GBP,
    symbols: defaultSymbols,
  },
  symbol: "£",
});
