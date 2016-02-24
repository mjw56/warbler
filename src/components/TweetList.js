import React from 'react';
import { Tweet } from './Tweet';
import { List } from 'immutable-props';

export const TweetList = (props) => (
  <div className="container">{props.tweets.map((tweet, i) => 
    <Tweet key={i} tweet={tweet} />)}
  </div>
);

TweetList.propTypes = {
  tweets: List
};