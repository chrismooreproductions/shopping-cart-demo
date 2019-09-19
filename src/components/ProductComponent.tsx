import React from 'react';
import '../styles/ProductComponent.css';
import IProduct from '../types/Product';
import strToUpper from '../utils/strToUpper';

const images = require.context('../images', true);

interface ProductProps {
  product: IProduct;
  addProductToBasket: (e: React.MouseEvent<HTMLButtonElement>) => void;
  removeProductFromBasket: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deleteProductFromBasket: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProductComponent: React.FC<ProductProps> = (props) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card">
        <div className="product--image-wrapper">
          <span className="product--image-helper">
            <img src={images(`./${props.product.image}`)} className="card-img-top img-responsive" alt="..." />
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{strToUpper(props.product.name)}</h5>
          <p className="card-text">£{props.product.price.toFixed(2)} per {props.product.package}</p>
          <button className="btn btn-primary" name={props.product.name} onClick={(e) => props.addProductToBasket(e)}>+</button>
          {props.product.qty > 0 ? 
            <button className="btn btn-primary ml-2" name={props.product.name} onClick={(e) => props.removeProductFromBasket(e)}>-</button> :
            ''
          }
        </div>
      </div>
    </div>
  )
}

export default ProductComponent