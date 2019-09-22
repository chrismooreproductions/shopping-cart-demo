import React from "react";
import products from "../../data/products";
import IProduct from "../../types/IProduct";
import { BasketContext } from "./basketContext";

export interface IBasketState {
  products: IProduct[];
}

export class BasketProvider extends React.Component<{}, IBasketState> {
  public state: Readonly<IBasketState> = {
    products: [],
  };

  public render() {
    // Calculate the basket total...
    let subTotalGBP = 0;

    if (this.state.products.length > 0) {
      this.state.products.forEach((product) => {
        subTotalGBP += (product.qty * product.price);
      });
    }

    return (
      <BasketContext.Provider value={{
        addProductToBasket: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          this.addProductToBasket(event),
        products: this.state.products,
        removeProductFromBasket: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          this.removeProductFromBasket(event),
      }}>
        {this.props.children}
      </BasketContext.Provider>
    );
  }

  private addProductToBasket(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { name } = event.target as HTMLButtonElement;
    let basketItem: IProduct;

    const newProducts: IProduct[] = [
      ...this.state.products,
    ];

    // check if basket contains product
    basketItem = newProducts.filter((product) => product.name === name)[0];

    if (!basketItem) {
      const productsItem = products.filter((product) => product.name === name)[0];
      productsItem.qty = 1;
      newProducts.push(productsItem);
    } else {
      const newBasketItem = newProducts.filter((product) => product.name === name);
      const newBasketItemIndex = newProducts.indexOf(newBasketItem[0]);
      newProducts[newBasketItemIndex].qty += 1;
    }

    this.setState({
      products: newProducts,
    });
  }

  private removeProductFromBasket(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { name } = event.target as HTMLButtonElement;
    let productsItem: IProduct;

    productsItem = this.state.products.filter((product) => product.name === name)[0];

    const newProducts: IProduct[] = [
      ...this.state.products,
    ];

    if (!productsItem) {
      return;
    } else {
      const newBasketItemIndex = newProducts.findIndex((product) => product.name === name);

      if (newProducts[newBasketItemIndex].qty === 1) {
        newProducts.splice(newBasketItemIndex, 1);
      } else {
        newProducts[newBasketItemIndex].qty = newProducts[newBasketItemIndex].qty - 1;
      }
    }
    this.setState({
      products: newProducts,
    });
  }
}
