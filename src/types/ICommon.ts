import Pages from "../constants/index";
import Product from "./IProduct";

export default interface ICommonProps {
  setActivePage: (page: Pages) => void;
}
