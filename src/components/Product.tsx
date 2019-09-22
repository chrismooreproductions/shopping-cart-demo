import React from "react";
import { BasketContext } from "../context/basket/basketContext";
import { CurrencyContext } from "../context/currency/currencyContext";
import "../styles/ProductComponent.css";
import IProduct from "../types/IProduct";
import { integerToUnitPrice } from "../utils/financial";
import strToUpper from "../utils/strToUpper";
import RemoveProductButton from "./RemoveProductButton";

// 'require' images folder for dynamic image loading:
const images = require.context("../images", true);

interface IProductProps {
  product: IProduct;
}

const Product: React.FC<IProductProps> = (props) => {
  const { product } = props;
  return (
    <CurrencyContext.Consumer>{(currency) => (
      <BasketContext.Consumer>{(basket) => (
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="product--image-wrapper">
              <span className="product--image-helper">
                <img src={images(`./${product.image}`)} className="card-img-top img-responsive" alt="..." />
              </span>
            </div>
            <div className="card-body">
              <h5 className="card-title">{strToUpper(product.name)}</h5>
              <p className="card-text">
                {currency.symbol} {integerToUnitPrice(
                  product.price,
                  currency.state.currencies.rates[currency.state.selectedCurrency])
                } per {product.package}
              </p>
              <button
                className="btn btn-primary"
                name={product.name}
                onClick={(e) => basket.addProductToBasket(e)}>
                +
              </button>
              <RemoveProductButton
                basket={basket}
                product={product}
              />
            </div>
          </div>
        </div>
      )}
      </BasketContext.Consumer>
    )}
    </CurrencyContext.Consumer>
  );
};

export default Product;
