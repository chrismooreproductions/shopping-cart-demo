import { mount } from "enzyme";
import React from "react";
import ICurrencies from "../../constants/currencies";
import Pages from "../../constants/pages";
import Header from "../../containers/HeaderContainer";
import { CurrencyContext, ICurrencyContext } from "../../context/currency/currencyContext";
import defaultRates from "../../data/defaultRates";
import defaultSymbols from "../../data/defaultSymbols";

const testCurrency: ICurrencyContext = {
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

it("renders a header component with GBP selected in the select box on page load", () => {
  const tree = (
    <CurrencyContext.Provider value={testCurrency}>
      <Header page={Pages.Products} setActivePage={jest.fn()} />
    </CurrencyContext.Provider>
  );
  const wrapper = mount(tree);
  const select = wrapper.find("select");
  expect(select.props().value).toBe("GBP");
});

it("renders a basket icon when the products page is selected", () => {
  const wrapper = mount(<Header page={Pages.Products} setActivePage={jest.fn()} />);
  expect(wrapper.find("fa-shopping-basket")).toBeTruthy();
});

it("renders a shop icon when the basket page is selected", () => {
  const wrapper = mount(<Header page={Pages.Basket} setActivePage={jest.fn()}  />);
  expect(wrapper.find("fa-store")).toBeTruthy();
});
