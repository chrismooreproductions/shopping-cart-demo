import React from 'react';
import Pages from '../constants/index';

import { faShoppingBasket, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps {
  page: Pages;
  setActivePage: (page: Pages) => void;
}

export default class Header extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-between mb-4">
        <a href="localhost:3000" className="navbar-brand">Chris Moore's Store</a>
          <button 
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={() => this.props.setActivePage(this.props.page === Pages.Products ? Pages.Basket : Pages.Products)}
          >
            {this.props.page === Pages.Products ? <FontAwesomeIcon icon={faShoppingBasket} /> : <FontAwesomeIcon icon={faStore} />}
          </button>
      </nav>
    )
  }
}