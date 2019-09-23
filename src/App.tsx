import "bootstrap/dist/css/bootstrap.css";
import React, { ReactElement } from "react";

// Import types and constants...
import Pages from "./constants/index";

// Import Context Providers here...
import { BasketProvider } from "./context/basket/BasketProvider";
import { CurrencyProvider } from "./context/currency/CurrencyProvider";
import { ProductsProvider } from "./context/products/ProductsProvider";

// Import Containers...
import BasketContainer from "./containers/BasketContainer";
import Header from "./containers/HeaderContainer";
import ProductsContainer from "./containers/ProductsContainer";

// (and styles!)
import "./styles/App.css";

interface IAppState {
  page: Pages;
}

class App extends React.Component<{}, IAppState> {
  public state: IAppState = {
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
      <CurrencyProvider>
        <ProductsProvider>
          <BasketProvider>
            <div className="container">
              <Header
                page={this.state.page}
                setActivePage={(page: Pages) => this.setActivePage(page)}
              />
              {this.renderActivePage()}
            </div>
          </BasketProvider>
        </ProductsProvider>
      </CurrencyProvider>
    );
  }
}

export default App;
