import { mount } from "enzyme";
import React from "react";
import Products from "../containers/ProductsContainer";
import ProductsContext from "../context/products/productsContext";
import { testProducts } from "./data/products";

it("renders a Product container, 4 Product components and a MiniBasket component", () => {
  const wrapper = mount(<Products setActivePage={jest.fn()} />);
  expect(wrapper.find("Products")).toHaveLength(1);
  expect(wrapper.find("Product")).toHaveLength(4);
  expect(wrapper.find("MiniBasket")).toHaveLength(1);
});

it("renders 2 products (1 trifle, 1 grape) given a specific products array", () => {
  const tree = (
    <ProductsContext.Provider value={{products: testProducts}}>
      <Products setActivePage={jest.fn()} />
    </ProductsContext.Provider>
  );
  const wrapper = mount(tree);
  expect(wrapper.find("Product")).toHaveLength(2);
  expect(wrapper.contains("Trifle")).toBeTruthy();
  expect(wrapper.contains("Grapes")).toBeTruthy();
});
