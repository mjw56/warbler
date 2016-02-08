import React from 'react';
import { Tweet } from './Tweet';
import { List } from 'immutable-props';

export const TweetList = (props) => (
  <ul>{props.tweets.map((tweet, i) => 
    <Tweet key={i} tweet={tweet} />)}
  </ul>
);

TweetList.propTypes = {
  tweets: List
};