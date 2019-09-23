import ICurrencies from "../../constants/currencies";
import { ICurrencyContext } from "../../context/currency/currencyContext";
import defaultRates from "../../data/defaultRates";
import defaultSymbols from "../../data/defaultSymbols";

const testCurrencyGBP: ICurrencyContext = {
  selectCurrency: jest.fn(),
  state: {
    currencies: {
      base: "GBP",
      date: "01-01-2019",
      rates: defaultRates,
    },
    selectedCurrency: ICurrencies.GBP,
    symbols: defaultSymbols,
  },
  symbol: "£",
};

const testCurrencyUSD: ICurrencyContext = {
  selectCurrency: jest.fn(),
  state: {
    currencies: {
      base: "GBP",
      date: "01-01-2019",
      rates: defaultRates,
    },
    selectedCurrency: ICurrencies.USD,
    symbols: defaultSymbols,
  },
  symbol: "$",
};

export {
  testCurrencyGBP,
  testCurrencyUSD,
};
