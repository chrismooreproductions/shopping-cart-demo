import React from 'react';

import IProduct from '../../types/Product';

import products from '../../data/products';

export interface IBasketContext {
  products: IProduct[];
  addProductToBasket(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  removeProductFromBasket(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export const BasketContext = React.createContext<IBasketContext>({
  products: [],
  addProductToBasket: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { throw new Error('addProductToBasket() not implemented')},
  removeProductFromBasket: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { throw new Error('removeProductFromBasket() not implemented') }
})

export interface IBasketState {
  products: IProduct[];
}

export class Basket extends React.Component<{}, IBasketState> {
  state: Readonly<IBasketState> = {
    products: [],
  }

  addProductToBasket(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { name } = event.target as HTMLButtonElement;
    let basketItem: IProduct;

    const newProducts: IProduct[] = [
      ...this.state.products
    ]

    // check if basket contains product
    basketItem = newProducts.filter(product => product.name === name)[0]

    if (!basketItem) {
      const productsItem = products.filter(product => product.name === name)[0];
      productsItem.qty = 1;
      newProducts.push(productsItem);
    } else {
      const newBasketItem = newProducts.filter(product => product.name === name);
      const newBasketItemIndex = newProducts.indexOf(newBasketItem[0]);
      newProducts[newBasketItemIndex].qty += 1;
    }

    this.setState({
      products: newProducts
    });
  }
  
  removeProductFromBasket(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { name } = event.target as HTMLButtonElement;
    let productsItem: IProduct;
    
    productsItem = this.state.products.filter(product => product.name === name)[0];
    
    const newProducts: IProduct[] = [
      ...this.state.products
    ]

    if (!productsItem) {
      return
    } else {
      const newBasketItemIndex = newProducts.findIndex(product => product.name === name);
      
      if (newProducts[newBasketItemIndex].qty === 1) {
        newProducts.splice(newBasketItemIndex, 1);
      } else {
        newProducts[newBasketItemIndex].qty = newProducts[newBasketItemIndex].qty - 1;
      }
    }
    this.setState({
      products: newProducts
    })
  }

  render() {
    return (
      <BasketContext.Provider value={{
        products: this.state.products,
        addProductToBasket: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.addProductToBasket(event),
        removeProductFromBasket: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.removeProductFromBasket(event)
      }}>
        {this.props.children}
      </BasketContext.Provider>
    )
  }
}

