import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from './product_item';

class ProductList extends Component {
  render() {
    const { pageProducts } = this.props;
    console.log(pageProducts);
    return (
      <ul className="product-list">
        {pageProducts.map((product) => {
          return <ProductItem key={product.id} {...product}/>
        })}
      </ul>
    );
  };
}

export default connect(
  (state) => ({
    pageProducts: state.products.pageProducts
  })
)(ProductList);
