import Pages from '../constants/index';
import Product from './Product';

export default interface ICommonProps {
  setActivePage: (page: Pages) => void;
  products: Product[];
  addProductToBasket: (event: React.MouseEvent<HTMLButtonElement>) => void;
  removeProductFromBasket: (event: React.MouseEvent<HTMLButtonElement>) => void;
  deleteProductFromBasket: (event: React.MouseEvent<HTMLButtonElement>) => void;
}