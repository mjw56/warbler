import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as TweetActions from '../actions/tweets';
import io from 'socket.io-client';

export class App extends Component {
  socket;

  componentDidMount() {
    this.socket = io(`http://localhost:3000`);
    this.socket.on('tweet', (tweet) => {
      console.log('got a tweet!', tweet);
    });
  }

  render() {
    return (
      <div>Hello World!</div>
    );
  }
}

App.propTypes = {
  tweets: PropTypes.array
};

function mapStateToProps(state) {
  return {
    tweets: state.tweets
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TweetActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);