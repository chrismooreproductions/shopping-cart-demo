import "bootstrap/dist/css/bootstrap.css";
import React, { ReactElement } from "react";

// Import types and constants...
import ICurrency from "./constants/currencies";
import Pages from "./constants/index";
import IBasket from "./types/Basket";

// Import Context Providers here...
import { Basket } from "./context/basket/BasketProvider";
import { Currency } from "./context/currency/CurrencyProvider";
import { Products } from "./context/products/ProductsProvider";

// Import Containers...
import BasketContainer from "./containers/Basket";
import Header from "./containers/Header";
import ProductsContainer from "./containers/Products";

// (and styles!)
import "./styles/App.css";

interface IAppState {
  page: Pages;
  basket: IBasket;
  currentCurrency: ICurrency;
}

class App extends React.Component<{}, IAppState> {
  public state: IAppState = {
    basket: {
      products: [],
    },
    currentCurrency: ICurrency.GBP,
    page: Pages.Products,
  };

  public renderActivePage(): ReactElement {
    switch (this.state.page) {
      case Pages.Products:
        return <ProductsContainer
            setActivePage={(page: Pages) => this.setActivePage(page)}
          />;
      case Pages.Basket:
        return <BasketContainer
            setActivePage={(page: Pages) => this.setActivePage(page)}
          />;
      default:
        return <ProductsContainer
            setActivePage={(page: Pages) => this.setActivePage(page)}
          />;
    }
  }

  public setActivePage(page: Pages): void {
    this.setState({
      page,
    });
  }

  public render() {
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
