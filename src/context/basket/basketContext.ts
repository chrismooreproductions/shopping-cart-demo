import React from "react";
import IProduct from "../../types/IProduct";

export interface IBasketContext {
  products: IProduct[];
  addProductToBasket(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  removeProductFromBasket(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export const BasketContext = React.createContext<IBasketContext>({
  addProductToBasket: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { throw new Error("addProductToBasket() not implemented"); },
  products: [],
  removeProductFromBasket: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { throw new Error("removeProductFromBasket() not implemented"); },
});
