import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PaginationItem extends Component {
  render() {
    const { page, selectedPage } = this.props;

    let pages = () => {
     if (page === '...') {
       return(
         <a className="pagination__link" onClick={this.props.handleAllPages}>
            {page}
          </a>
       )
     } else if (page == selectedPage) {
       return(
         <Link to={'/' + page} className='pagination__link-active'>
            {page}
          </Link>
       )
     }else {
       return(
         <Link to={'/' + page} className='pagination__link'>
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

export default connect(
  (state) => ({
    selectedPage: state.products.selectedPage,
  })
)(PaginationItem);
