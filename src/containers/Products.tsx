import React from "react";
import MiniBasketComponent from "../components/MiniBasketComponent";
import ProductComponent from "../components/ProductComponent";
import Pages from "../constants/index";
import ProductsContext from "../context/products/productsContext";
import "../styles/App.css";
import "../styles/Products.css";

interface IProductsProps {
  setActivePage: (page: Pages) => void;
}

export default class Products extends React.Component<IProductsProps, {}> {
  public render() {
    return (
      <ProductsContext.Consumer>{(products) => (
          <div className="row">
            <div className="col-md-9">
              <div className="products main-content-wrapper mb-4">
                <h1 className="mb-4">Here's what we have in store...</h1>
                <div className="row">
                  { products.products.map((product) => {
                      return (
                        <ProductComponent
                          product={product}
                          key={products.products.indexOf(product)}
                        />
                      );
                    })
                  }
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <MiniBasketComponent />
            </div>
          </div>
      )}</ProductsContext.Consumer>
    );
  }
}
