import React from "react";
import { BasketContext, IBasketContext } from "../context/basket/basketContext";
import CurrencyContext from "../context/currency/currencyContext";
import "../styles/ProductComponent.css";
import IProduct from "../types/Product";
import strToUpper from "../utils/strToUpper";

// 'require' images folder for dynamic image loading:
const images = require.context("../images", true);

interface IProductProps {
  product: IProduct;
}

const renderRemoveProductButton = (basket: IBasketContext, product: IProduct) => {
  if (basket.products.includes(product)) {
    return (
      <button className="btn btn-primary ml-2" name={product.name} onClick={(e) => basket.removeProductFromBasket(e)}>
        -
      </button>
    );
  }
};

const exchangeRatePrice = (price: number, exchangeRate: number) => {
  return (price * exchangeRate).toFixed(2);
};

const ProductComponent: React.FC<IProductProps> = (props) => {
  return (
    <CurrencyContext.Consumer>{(currency) => (
      <BasketContext.Consumer>{(basket) => (
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="product--image-wrapper">
              <span className="product--image-helper">
                <img src={images(`./${props.product.image}`)} className="card-img-top img-responsive" alt="..." />
              </span>
            </div>
            <div className="card-body">
              <h5 className="card-title">{strToUpper(props.product.name)}</h5>
              <p className="card-text">
                {currency.symbol}
                {exchangeRatePrice(
                  props.product.price,
                  currency.state.currencies.rates[currency.state.selectedCurrency])
                }
                 per {props.product.package}
              </p>
              <button
                className="btn btn-primary"
                name={props.product.name}
                onClick={(e) => basket.addProductToBasket(e)}>
                +
              </button>
              {renderRemoveProductButton(basket, props.product)}
            </div>
          </div>
        </div>
      )}
      </BasketContext.Consumer>
    )}
    </CurrencyContext.Consumer>
  );
};

export default ProductComponent;
