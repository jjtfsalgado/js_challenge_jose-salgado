import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPage1 } from '../actions/actions';

import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';

class App extends Component {
  componentWillMount(){
    this.props.fetchPage1();
  }
  render() {
    return (
      <div className="container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  };
}

export default connect(
  null,
  { fetchPage1 }
)(App);
