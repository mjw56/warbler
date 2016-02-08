import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TweetActions from '../actions/tweets';
import io from 'socket.io-client';
import { TweetList } from '../components/TweetList';
import DevTools from './DevTools';
import { List } from 'immutable-props';
import { ImmutableComponent } from '../components/ImmutableComponent';

class App extends ImmutableComponent {
  socket;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.socket = io(`http://localhost:3000`);
    this.socket.on('tweet', (tweet) => {
      this.props.actions.addTweet(tweet);
    });
  }

  render() {
    const { tweets } = this.props;
    return (
      <div>
        <TweetList tweets={tweets} />
        <DevTools />
      </div>
    );
  }
}

App.propTypes = {
  tweets: List
};

function mapStateToProps(state) {
  const { tweets } = state;

  return {
    tweets
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