import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TweetActions from '../actions/tweets';
import io from 'socket.io-client';
import DevTools from './DevTools';
import { List } from 'immutable-props';
import { createSelector } from 'reselect';
import {
  Header,
  ImmutableComponent,
  TweetList
} from '../components/index';

class App extends ImmutableComponent {
  constructor(props) {
    super(props);
    this.state = {
      socket: {}
    };
  }

  componentDidMount() {
    const socket = io.connect(`http://localhost:3000`);
    socket.on('tweet', (tweet) => {
      this.props.actions.addTweet(tweet);
    });

    this.setState({
      socket: socket
    });
  }

  render() {
    const { tweets = [] } = this.props;
    const { socket } = this.state;

    return (
      <div>
        <Header socket={socket}/>
        <TweetList tweets={tweets} />
        <DevTools />
      </div>
    );
  }
}

App.propTypes = {
  tweets: List
};

const mapStateToProps = (state) => {
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