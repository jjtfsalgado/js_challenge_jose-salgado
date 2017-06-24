import React, { Component } from 'react';
import { connect } from 'react-redux';
import img from "../../styles/images/img01.png";
import { addToWishlist, addToBag, removeFromBag , removeFromWish} from '../../actions/actions';

class ProductItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      inBag: false,
      inWish: false
    }

    this.handleAddToWishlist = this.handleAddToWishlist.bind(this);
    this.handleAddToBag = this.handleAddToBag.bind(this);
    this.handleToggleButtons = this.handleToggleButtons.bind(this);
    this.handleSelectedProduct = this.handleSelectedProduct.bind(this);
    this.handleRemoveFromBag = this.handleRemoveFromBag.bind(this);
    this.handleRemoveFromWish = this.handleRemoveFromWish.bind(this);
  }
  handleSelectedProduct(){
    const { id, title, subtitle, price, image } = this.props;
    const product = {
      id,
      title,
      subtitle,
      price,
      image
    };
    return product;
  }
  handleAddToWishlist(){
    const product = this.handleSelectedProduct()
    return this.props.addToWishlist(product);
  }
  handleAddToBag(){
    const product = this.handleSelectedProduct()
    return this.props.addToBag(product);
  }
  handleRemoveFromBag(){
    const product = this.handleSelectedProduct();
    this.setState({
      inBag: false
    })
    return this.props.removeFromBag(product.id);
  }
  handleRemoveFromWish(){
    const product = this.handleSelectedProduct();
    this.setState({
      inWish: false
    })
    return this.props.removeFromWish(product.id);
  }
  handleToggleButtons(props){
    const { bagProducts, id, wishProducts } = props;
    for (var i = 0; i < bagProducts.length; i++) {
      if (bagProducts[i].id == id) {
        this.setState({
          inBag: true
        })
      }
    }

    for (var i = 0; i < wishProducts.length; i++) {
      if (wishProducts[i].id == id) {
        this.setState({
          inWish: true
        })
      }
    }
    return;
  }
  componentWillMount(){
    return this.handleToggleButtons(this.props);
  }
  componentWillReceiveProps(nextProps){
    return this.handleToggleButtons(nextProps);
  }
  render() {
    const {title, subtitle, price, priceDiscounted } = this.props;

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
                  <button className={`product__wishlist-button button button--round ${this.state.inWish == false ? 'button--wishlist' : 'button--wishlist-selected'}`} onClick={this.state.inWish == false ? this.handleAddToWishlist : this.handleRemoveFromWish}>
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
                {this.state.inBag == false ? <button className="product__add-to-cart button button--primary" onClick={this.handleAddToBag}>Add to Cart</button> : <button className="product__add-to-cart button button--primary button--in-cart" onClick={this.handleRemoveFromBag}></button>}
              </div>
          </article>
      </li>
    );
  };
}

export default connect(
  (state) => ({
    bagProducts: state.products.bagProducts,
    wishProducts: state.products.wishProducts
  }),
  {addToWishlist, addToBag, removeFromBag, removeFromWish}
)(ProductItem);
