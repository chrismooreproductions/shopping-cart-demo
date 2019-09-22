import React, { ReactElement } from "react";
import { IBasketContext } from "../context/basket/basketContext";
import IProduct from "../types/IProduct";

interface IRemoveProductButtonProps {
  basket: IBasketContext;
  product: IProduct;
}

const RemoveProductButton = (props: IRemoveProductButtonProps): ReactElement | null => {
  const { basket, product } = props;
  if (basket.products.includes(product)) {
    return (
      <button
        className="btn btn-primary ml-2 mr-3"
        name={product.name}
        onClick={(e) => basket.removeProductFromBasket(e)}>
        -
      </button>
    );
  }
  return null;
};

export default RemoveProductButton;
