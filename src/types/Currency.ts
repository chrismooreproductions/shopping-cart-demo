import ICurrencies from "../constants/currencies";

export interface ISymbols {
  "CAD": { symbol: "", name: "", symbol_native: "" };
  "HKD": { symbol: "", name: "", symbol_native: "" };
  "ISK": { symbol: "", name: "", symbol_native: "" };
  "PHP": { symbol: "", name: "", symbol_native: "" };
  "DKK": { symbol: "", name: "", symbol_native: "" };
  "HUF": { symbol: "", name: "", symbol_native: "" };
  "CZK": { symbol: "", name: "", symbol_native: "" };
  "GBP": { symbol: "", name: "", symbol_native: "" };
  "RON": { symbol: "", name: "", symbol_native: "" };
  "SEK": { symbol: "", name: "", symbol_native: "" };
  "IDR": { symbol: "", name: "", symbol_native: "" };
  "INR": { symbol: "", name: "", symbol_native: "" };
  "BRL": { symbol: "", name: "", symbol_native: "" };
  "RUB": { symbol: "", name: "", symbol_native: "" };
  "HRK": { symbol: "", name: "", symbol_native: "" };
  "JPY": { symbol: "", name: "", symbol_native: "" };
  "THB": { symbol: "", name: "", symbol_native: "" };
  "CHF": { symbol: "", name: "", symbol_native: "" };
  "EUR": { symbol: "", name: "", symbol_native: "" };
  "MYR": { symbol: "", name: "", symbol_native: "" };
  "BGN": { symbol: "", name: "", symbol_native: "" };
  "TRY": { symbol: "", name: "", symbol_native: "" };
  "CNY": { symbol: "", name: "", symbol_native: "" };
  "NOK": { symbol: "", name: "", symbol_native: "" };
  "NZD": { symbol: "", name: "", symbol_native: "" };
  "ZAR": { symbol: "", name: "", symbol_native: "" };
  "USD": { symbol: "", name: "", symbol_native: "" };
  "MXN": { symbol: "", name: "", symbol_native: "" };
  "SGD": { symbol: "", name: "", symbol_native: "" };
  "AUD": { symbol: "", name: "", symbol_native: "" };
  "ILS": { symbol: "", name: "", symbol_native: "" };
  "KRW": { symbol: "", name: "", symbol_native: "" };
  "PLN": { symbol: "", name: "", symbol_native: "" };
}

export interface IExchangeRates {
  rates: {
    "CAD": number,
    "HKD": number,
    "ISK": number,
    "PHP": number,
    "DKK": number,
    "HUF": number,
    "CZK": number,
    "GBP": number,
    "RON": number,
    "SEK": number,
    "IDR": number,
    "INR": number,
    "BRL": number,
    "RUB": number,
    "HRK": number,
    "JPY": number,
    "THB": number,
    "CHF": number,
    "EUR": number,
    "MYR": number,
    "BGN": number,
    "TRY": number,
    "CNY": number,
    "NOK": number,
    "NZD": number,
    "ZAR": number,
    "USD": number,
    "MXN": number,
    "SGD": number,
    "AUD": number,
    "ILS": number,
    "KRW": number,
    "PLN": number,
  };
  base: string;
  date: string;
}
