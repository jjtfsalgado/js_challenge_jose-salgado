import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PaginationItem extends Component {
  render() {
    const { page } = this.props;

    let pages = () => {
     if (page === '...') {
       return(
         <a className="pagination__link" onClick={this.props.handleAllPages}>
            {page}
          </a>
       )
     } else {
       return(
         <Link to={'/' + page} className="pagination__link">
            {page}
          </Link>
       )
     }
    }

    return (
      <li className="pagination__item">
        {pages()}
      </li>
    );
  };
}
