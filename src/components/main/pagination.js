import React, { Component } from 'react';
import { connect } from 'react-redux';

import PaginationItem from './pagination_item';

class Pagination extends Component {
  render() {
    const {numberPages, selectedPage} = this.props;

    let generatePages = () => {
      let container = [];
      for(let i = 1; i <= numberPages ; i++){
        let route = i.toString();
        container.push(<PaginationItem key={i} page={i}/>);
      }
      return container;
    }

    let pages = generatePages();

    return (
      <nav className="pagination">
          <ul className="pagination__list">
              <li className="pagination__item">
                  <a href="#" className="pagination__link">
                      <svg className="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <title>Arrow Left</title>
                          <polygon id="Left-Icon" stroke="none" fill-rule="evenodd" transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) " points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
                      </svg>
                  </a>
              </li>
              {pages.map((page)=>{
                return page;
              })}
              <li className="pagination__item">
                  <a href="#" className="pagination__link">
                      <svg className="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <title>Arrow Right</title>
                          <polygon id="Left-Iocn" stroke="none" fill-rule="evenodd" points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
                      </svg>
                  </a>
              </li>
          </ul>
      </nav>
    );
  };
}

export default connect(
  (state) => ({
    numberPages: state.products.numberPages,
    selectedPage: state.products.selectedPage
  })
)(Pagination);
