import Pages from "../constants/index";
import Product from "./Product";

export default interface ICommonProps {
  setActivePage: (page: Pages) => void;
}
