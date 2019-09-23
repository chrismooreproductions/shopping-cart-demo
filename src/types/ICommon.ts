import Pages from "../constants/pages";
import Product from "./IProduct";

export default interface ICommonProps {
  setActivePage: (page: Pages) => void;
}
