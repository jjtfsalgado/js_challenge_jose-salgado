import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PaginationItem from './pagination_item';
import { modifyPagination, moveRight } from '../../actions/actions';

class Pagination extends Component {
  constructor(props){
    super(props);

    this.allPages = this.allPages.bind(this);
    this.shortPages= this.shortPages.bind(this);
  }
  shortPages(selectedPage){
    const {numberPages , modifyPagination} = this.props;
    const pages = [];
    if (selectedPage == '1' || selectedPage == '2' || selectedPage == '3') {
      for(let i = 1; i <= 5 ; i++){
        let route = i.toString();
        if(i == 5){
          pages.push(<PaginationItem key={i} page={numberPages.toString()}/>);
        } else if (i == 4){
          pages.push(<PaginationItem key={i} page={'...'} handleAllPages={this.allPages}/>)
        } else {
          pages.push(<PaginationItem key={i} page={route}/>);
        }
      }
    } else if (selectedPage == '4' || selectedPage == '5' || selectedPage == '6'){
      for(let i = 4; i <= 8 ; i++){
        let route = i.toString();
        if(i == 9){
          pages.push(<PaginationItem key={i} page={numberPages.toString()}/>);
        } else if (i == 8){
          pages.push(<PaginationItem key={i} page={'...'} handleAllPages={this.allPages}/>)
        } else {
          pages.push(<PaginationItem key={i} page={route}/>);
        }
      }
    } else {
      for(let i = 6; i <= 10 ; i++){
        let route = i.toString();
        if(i == 10){
          pages.push(<PaginationItem key={i} page={route}/>);
        } else if (i == 6){
          pages.push(<PaginationItem key={i} page={'...'} handleAllPages={this.allPages}/>)
        } else {
          pages.push(<PaginationItem key={i} page={route}/>);
        }
      }
    }
    return pages;
  }
  allPages(){
    const {numberPages, modifyPagination} = this.props;
    const pages = [];
    for(let i = 1; i <= numberPages; i++){
      let route = i.toString();
      pages.push(<PaginationItem key={i} page={i} />);
    }
    return modifyPagination(pages);
  }
  componentWillMount(){
    const {modifyPagination, selectedPage} = this.props;
    const pages = this.shortPages(selectedPage);
    return modifyPagination(pages);
  }
  componentWillReceiveProps(nextProps){
    const {modifyPagination, selectedPage} = this.props;
    if (selectedPage != nextProps.selectedPage) {
      const pages = this.shortPages(nextProps.selectedPage);
      return modifyPagination(pages);
    }
    return;
  }
  render() {
    const {numberPages, selectedPage, currentPagination} = this.props;

    return (
      <nav className="pagination">
          <ul className="pagination__list">
              <li className="pagination__item">
                  <Link to={'/'+ (+selectedPage == 1 ? 1 : +selectedPage-1)} className="pagination__link">
                      <svg className="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <title>Arrow Left</title>
                          <polygon id="Left-Icon" stroke="none" fill-rule="evenodd" transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) " points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
                      </svg>
                  </Link>
              </li>
              {currentPagination.map((page)=>{
                return page;
              })}
              <li className="pagination__item">
                  <Link to={'/'+ (+selectedPage == numberPages ? numberPages : +selectedPage+1)} className="pagination__link">
                      <svg className="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <title>Arrow Right</title>
                          <polygon id="Left-Iocn" stroke="none" fill-rule="evenodd" points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
                      </svg>
                  </Link>
              </li>
          </ul>
      </nav>
    );
  };
}

export default connect(
  (state) => ({
    numberPages: state.products.numberPages,
    selectedPage: state.products.selectedPage,
    currentPagination: state.products.currentPagination
  }),
  {modifyPagination}
)(Pagination);
