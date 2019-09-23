import { mount, shallow } from "enzyme";
import React from "react";
import Basket from "../containers/BasketContainer";
import { BasketContext } from "../context/basket/basketContext";
import { CurrencyContext } from "../context/currency/currencyContext";
import { testBasketOneItem, testBasketTwoItems } from "./data/basket";
import { testCurrencyGBP, testCurrencyUSD } from "./data/currency";

it("renders a basket page with an empty basket", () => {
  const wrapper = mount(<Basket setActivePage={jest.fn()} />);
  expect(wrapper.find("Basket")).toHaveLength(1);
  expect(wrapper.find("Your basket")).toBeTruthy();
  expect(wrapper.find("Empty")).toBeTruthy();
});

it("renders a basket page with one pot of trifle in it at subtotal and price of £0.95 in GBP", () => {
  const tree = (
    <BasketContext.Provider value={testBasketOneItem}>
      <CurrencyContext.Provider value={testCurrencyGBP}>
        <Basket setActivePage={jest.fn()} />
      </CurrencyContext.Provider>
    </BasketContext.Provider>
  );
  const wrapper = mount(tree);
  expect(wrapper.find("BasketLineItem")).toHaveLength(1);
  expect(wrapper.find("BasketTotal")).toHaveLength(1);
  expect(wrapper.find("button")).toHaveLength(2);
  expect(wrapper.text()).toContain("Trifle");
  expect(wrapper.text()).toContain("Subtotal: £0.95");
  expect(wrapper.text()).toContain("Qty: 1");
  expect(wrapper.text()).toContain("Total: £ 0.95");
});

it("renders a basket page with one pot of trifle in it at subtotal and price of $ in USD", () => {
  const tree = (
    <BasketContext.Provider value={testBasketOneItem}>
      <CurrencyContext.Provider value={testCurrencyUSD} >
        <Basket setActivePage={jest.fn()} />
      </CurrencyContext.Provider>
    </BasketContext.Provider>
  );
  const wrapper = mount(tree);
  expect(wrapper.find("BasketLineItem")).toHaveLength(1);
  expect(wrapper.find("BasketTotal")).toHaveLength(1);
  expect(wrapper.find("button")).toHaveLength(2);
  expect(wrapper.text()).toContain("Trifle");
  expect(wrapper.text()).toContain("Subtotal: $1.14");
  expect(wrapper.text()).toContain("Qty: 1");
  expect(wrapper.text()).toContain("Total: $ 1.14");
});

it("renders a basket page with 2 items in GBP", () => {
  const tree = (
    <BasketContext.Provider value={testBasketTwoItems}>
      <CurrencyContext.Provider value={testCurrencyGBP} >
        <Basket setActivePage={jest.fn()} />
      </CurrencyContext.Provider>
    </BasketContext.Provider>
  );
  const wrapper = mount(tree);
  expect(wrapper.find("BasketLineItem")).toHaveLength(2);
  expect(wrapper.find("BasketTotal")).toHaveLength(1);
  expect(wrapper.find("button")).toHaveLength(4);
  expect(wrapper.text()).toContain("Trifle");
  expect(wrapper.text()).toContain("Subtotal: £0.95");
  expect(wrapper.text()).toContain("Qty: 1");
  expect(wrapper.text()).toContain("Bread");
  expect(wrapper.text()).toContain("Subtotal: £1.45");
  expect(wrapper.text()).toContain("Qty: 1");
  expect(wrapper.text()).toContain("Total: £ 2.40");
});

it("renders a basket page with 2 items in USD", () => {
  const tree = (
    <BasketContext.Provider value={testBasketTwoItems}>
      <CurrencyContext.Provider value={testCurrencyUSD} >
        <Basket setActivePage={jest.fn()} />
      </CurrencyContext.Provider>
    </BasketContext.Provider>
  );
  const wrapper = mount(tree);
  expect(wrapper.find("BasketLineItem")).toHaveLength(2);
  expect(wrapper.find("BasketTotal")).toHaveLength(1);
  expect(wrapper.find("button")).toHaveLength(4);
  expect(wrapper.text()).toContain("Trifle");
  expect(wrapper.text()).toContain("Subtotal: $1.14");
  expect(wrapper.text()).toContain("Qty: 1");
  expect(wrapper.text()).toContain("Bread");
  expect(wrapper.text()).toContain("Subtotal: $1.74");
  expect(wrapper.text()).toContain("Qty: 1");
  expect(wrapper.text()).toContain("Total: $ 2.88");
});
