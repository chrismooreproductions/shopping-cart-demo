import 'bootstrap/dist/css/bootstrap.css';
import React, { ReactElement } from 'react';

// Import types and constants...
import IBasket from './types/Basket';
import Pages from './constants/index';
import ICurrency from './constants/currencies';

// Import Context Providers here...
import { Basket } from './context/basket/BasketProvider';
import { Currency } from './context/currency/CurrencyProvider';
import { Products } from './context/products/ProductsProvider';

// Import Containers...
import ProductsContainer from './containers/Products';
import BasketContainer from './containers/Basket';
import Header from './containers/Header';

// (and styles!)
import './styles/App.css';

interface IAppState {
  page: Pages;
  basket: IBasket;
  currentCurrency: ICurrency;
}

class App extends React.Component<{}, IAppState> {
  state: IAppState = {
    page: Pages.Products,
    basket: {
      products: []
    },
    currentCurrency: ICurrency.GBP
  }

  renderActivePage(): ReactElement {
    switch (this.state.page) {
      case Pages.Products: 
        return <ProductsContainer
            setActivePage={(page: Pages) => this.setActivePage(page)}
          />
      case Pages.Basket: 
        return <BasketContainer
            setActivePage={(page: Pages) => this.setActivePage(page)}
          />
      default: 
        return <ProductsContainer
            setActivePage={(page: Pages) => this.setActivePage(page)}
          />
    }
  }

  setActivePage(page: Pages): void {
    this.setState({
      page
    })
  }

  render() { 
    return (
      <Currency>
        <Products>
          <Basket>
            <div className="container">
              <Header
                page={this.state.page}
                setActivePage={(page: Pages) => this.setActivePage(page)}
              />
              {this.renderActivePage()}
            </div>
          </Basket>
        </Products>
      </Currency>
    );
  }
}

export default App;
