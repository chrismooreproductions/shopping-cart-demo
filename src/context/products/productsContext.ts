import React from "react";
import products from "../../data/products";
import IProduct from "../../types/IProduct";

export interface IProductsContext {
  products: IProduct[];
}

const ProductsContext = React.createContext<IProductsContext>({
  products,
});

export default ProductsContext;
