import React from "react";
import MiniBasket from "../components/MiniBasket";
import Product from "../components/Product";
import Pages from "../constants/pages";
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
                        <Product
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
              <MiniBasket />
            </div>
          </div>
      )}</ProductsContext.Consumer>
    );
  }
}
