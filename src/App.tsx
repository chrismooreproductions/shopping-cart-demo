import 'bootstrap/dist/css/bootstrap.css';
import React, { ReactElement } from 'react';

import products from './data/products';

import Pages from './constants/index';

import Products from './containers/Products';
import Basket from './containers/Basket';
import Header from './containers/Header';

import './styles/App.css';

class App extends React.Component {
  state = {
    page: Pages.Products,
    basket: {
      products: products
    }
  }

  renderActivePage(): ReactElement {
    switch (this.state.page) {
      case Pages.Products: 
        return <Products
            setActivePage={(page: Pages) => this.setActivePage(page)}
            products={products}
            addProductToBasket={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.addProductToBasket(event)}
            removeProductFromBasket={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.removeProductFromBasket(event)}
            deleteProductFromBasket={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.deleteProductFromBasket(event)}
            basket={this.state.basket}
          />
      case Pages.Basket: 
        return <Basket
            setActivePage={(page: Pages) => this.setActivePage(page)}
            products={products}
            addProductToBasket={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.addProductToBasket(event)}
            removeProductFromBasket={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.removeProductFromBasket(event)}
            deleteProductFromBasket={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.deleteProductFromBasket(event)}
            basket={this.state.basket}
          />
      default: 
        return <Products
            setActivePage={(page: Pages) => this.setActivePage(page)}
            products={products}
            addProductToBasket={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.addProductToBasket(event)}
            removeProductFromBasket={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.removeProductFromBasket(event)}
            deleteProductFromBasket={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.deleteProductFromBasket(event)}
            basket={this.state.basket}
          />
    }
  }

  setActivePage(page: Pages): void {
    this.setState({
      page
    })
  }

  addProductToBasket(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const { name } = event.target as HTMLButtonElement;
    const item = products.filter(product => product.name === name);
    item[0].qty = item[0].qty + 1;
    this.setState({
      products: products
    })
  }

  removeProductFromBasket(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const { name } = event.target as HTMLButtonElement;
    const item = products.filter(product => product.name === name);
    if (item[0].qty >= 0) {
      item[0].qty = item[0].qty - 1;
      this.setState({
        products: products
      })
    }
  }

  deleteProductFromBasket(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const { name } = event.target as HTMLButtonElement;
    const item = products.filter(product => product.name === name);
    item[0].qty = 0;
    this.setState({
      products: products
    })
  }

  render() { 
    return (
      <div className="container">
        <Header
          page={this.state.page}
          setActivePage={(page: Pages) => this.setActivePage(page)}
        />
        {this.renderActivePage()}
      </div>
    );
  }
}

export default App;
