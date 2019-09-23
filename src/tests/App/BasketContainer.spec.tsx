import { mount } from "enzyme";
import React from "react";
import Basket from "../../containers/BasketContainer";
import { BasketContext, IBasketContext } from "../../context/basket/basketContext";
import { CurrencyContext, ICurrencyContext } from "../../context/currency/currencyContext";
import { testBasketOneItem, testBasketTwoItems } from "../data/basket";
import { testCurrencyGBP, testCurrencyUSD } from "../data/currency";

it("renders a basket page with an empty basket", () => {
  const wrapper = mount(<Basket setActivePage={jest.fn()} />);
  expect(wrapper.find("Basket")).toHaveLength(1);
  expect(wrapper.find("Your basket")).toBeTruthy();
  expect(wrapper.find("Empty")).toBeTruthy();
});

const renderTree = (basket: IBasketContext, currency: ICurrencyContext) => {
  return (
    <BasketContext.Provider value={basket}>
      <CurrencyContext.Provider value={currency}>
        <Basket setActivePage={jest.fn()} />
      </CurrencyContext.Provider>
    </BasketContext.Provider>
  );
};

it("renders a basket page with one pot of trifle in it at subtotal and price of £0.95 in GBP", () => {
  const wrapper = mount(renderTree(testBasketOneItem, testCurrencyGBP));
  expect(wrapper.find("BasketLineItem")).toHaveLength(1);
  expect(wrapper.find("BasketTotal")).toHaveLength(1);
  expect(wrapper.find("button")).toHaveLength(2);
  expect(wrapper.text()).toContain("Trifle");
  expect(wrapper.text()).toContain("Subtotal: £0.95");
  expect(wrapper.text()).toContain("Qty: 1");
  expect(wrapper.text()).toContain("Total: £ 0.95");
});

it("renders a basket page with one pot of trifle in it at subtotal and price of $1.14 in USD", () => {
  const wrapper = mount(renderTree(testBasketOneItem, testCurrencyUSD));
  expect(wrapper.find("BasketLineItem")).toHaveLength(1);
  expect(wrapper.find("BasketTotal")).toHaveLength(1);
  expect(wrapper.find("button")).toHaveLength(2);
  expect(wrapper.text()).toContain("Trifle");
  expect(wrapper.text()).toContain("Subtotal: $1.14");
  expect(wrapper.text()).toContain("Qty: 1");
  expect(wrapper.text()).toContain("Total: $ 1.14");
});

it("renders a basket page with 2 items in GBP with total £2.40", () => {
  const wrapper = mount(renderTree(testBasketTwoItems, testCurrencyGBP));
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

it("renders a basket page with 2 items in USD with total $2.88", () => {
  const wrapper = mount(renderTree(testBasketTwoItems, testCurrencyUSD));
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
