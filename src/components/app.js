import React, { Component } from 'react';

import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';

export default class App extends Component {
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
