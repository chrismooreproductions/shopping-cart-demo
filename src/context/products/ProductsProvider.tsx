import React from "react";

import products from "../../data/products";
import ProductsContext from "./productsContext";

export class ProductsProvider extends React.Component<{}, {}> {
  public render() {
    return (
      <ProductsContext.Provider value={{
        products,
      }}>
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}
