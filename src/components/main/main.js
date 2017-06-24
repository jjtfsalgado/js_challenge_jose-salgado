import React, { Component } from 'react';

import ProductList from './product_list';
import Pagination from './pagination';

export default class Main extends Component {
  render() {
    return (
      <main className="main">
        <div className="container">
          <ProductList/>
          <Pagination/>
        </div>
      </main>
    );
  };
}
