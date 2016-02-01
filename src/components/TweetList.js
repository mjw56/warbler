import React, { PropTypes } from 'react';
import { Tweet } from './Tweet';

export const TweetList = (props) => (
  <ul>{props.tweets.map((tweet, i) => 
    <Tweet key={i} tweet={tweet} />)}
  </ul>
);

TweetList.propTypes = {
  tweets: PropTypes.array.isRequired
};