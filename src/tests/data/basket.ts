import { IBasketContext } from "../../context/basket/basketContext";

const testBasketEmpty: IBasketContext = {
  addProductToBasket: jest.fn(),
  products: [],
  removeProductFromBasket: jest.fn(),
};

const testBasketOneItem: IBasketContext = {
  addProductToBasket: jest.fn(),
  products: [
    { name: "trifle", price: 95, package: "pot", image: "trifle.jpg", qty: 1 },
  ],
  removeProductFromBasket: jest.fn(),
};

const testBasketTwoItems: IBasketContext = {
  addProductToBasket: jest.fn(),
  products: [
    { name: "trifle", price: 95, package: "pot", image: "trifle.jpg", qty: 1 },
    { name: "bread", price: 145, package: "loaf", image: "bread.jpg", qty: 1 },
  ],
  removeProductFromBasket: jest.fn(),
};

export {
  testBasketEmpty,
  testBasketOneItem,
  testBasketTwoItems,
};
