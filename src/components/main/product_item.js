import React, { Component } from 'react';

import img from "../../styles/images/img01.png";

export default class ProductItem extends Component {
  render() {
    const {title, subtitle, price, priceDiscounted} = this.props;
    let productPrice = () => {
      if (priceDiscounted) {
        return (
          <div className="product__price" itemScope itemType="http://schema.org/Offer">
            <span className="product__price--strike">£{price}</span><span className="product__price--discounted" itemProp="price">£{priceDiscounted}</span>
          </div>
        )
      } else {
        return (
          <div className="product__price" itemScope itemType="http://schema.org/Offer">
            <span className="product__price" itemProp="price">£{price}</span>
          </div>
        )
      }
    }
    return (
      <li className="product-list__item">
          <article className="product" itemScope itemType="http://schema.org/Product">
              <figure className="product__image-wrapper">
                  <img className="product__image" src={img} alt="Product" itemProp="image"/>
                  <button className="product__wishlist-button button button--round button--wishlist">
                      <svg className="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                          <title>{title}</title>
                          <polygon id="Wishlist-Icon" stroke="none" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
                      </svg>
                  </button>
              </figure>
              <div className="product__details">
                  <h1 className="product__title" itemProp="brand">{title}</h1>
                  <p className="product__subtitle" itemProp="description">{subtitle}</p>
                  {productPrice()}
                  <button className="product__add-to-cart button button--primary">Add to Cart</button>
              </div>
          </article>
      </li>
    );
  };
}
