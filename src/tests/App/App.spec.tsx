import { shallow } from "enzyme";
import React from "react";
import App from "../../App";

it("returns one header and one full products view", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("Products")).toHaveLength(1);
  expect(wrapper.find("Header")).toHaveLength(1);
});

it("renders a CurrencyProvider, a ProductsProvider and a BasketProvider", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("CurrencyProvider")).toHaveLength(1);
  expect(wrapper.find("ProductsProvider")).toHaveLength(1);
  expect(wrapper.find("BasketProvider")).toHaveLength(1);
});

it("is rendered in a bootstrap container", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("div").hasClass("container")).toEqual(true);
  expect(wrapper.find(".container")).toHaveLength(1);
});
