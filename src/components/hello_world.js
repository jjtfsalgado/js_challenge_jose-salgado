import React, { Component } from 'react';
import { connect } from 'react-redux';
import { helloWorld } from '../actions/actions';

class HelloWorld extends Component {
  componentWillMount() {
    this.props.helloWorld('Hello World');
  }
  render() {
    const { message } = this.props;
    return (
      <div className="hello">
        { message }
      </div>
    );
  };
}

export default connect(
  (state) => ({
    message: state.reducer.message
  }),
  { helloWorld }
)(HelloWorld);
