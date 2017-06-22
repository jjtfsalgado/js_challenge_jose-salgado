import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PaginationItem extends Component {
  render() {
    const { page } = this.props;
    return (
      <li className="pagination__item">
          <Link to={'/' + page} className="pagination__link">
              {page}
          </Link>
      </li>
    );
  };
}
