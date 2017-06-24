import React, { Component } from 'react';
import { connect } from 'react-redux';
import img from "../../styles/images/img01.png";
import { removeFromBag } from '../../actions/actions';

class ModalItem extends Component {
  render() {
    const {title, price, subtitle, priceDiscounted, id} = this.props;
    return (
      <li className="modal-item">
        <img src={img}/>
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
        <p className="price">{'1 * £'+ (priceDiscounted ? priceDiscounted : price)}</p>
        <button className="del" onClick={()=>{this.props.removeFromBag(id)}}>Del</button>
      </li>
    );
  };
}

export default connect(
  null,
  {removeFromBag}
)(ModalItem);
