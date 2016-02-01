import React, { PropTypes } from 'react';

export const Tweet = (props) => (
  <li>{props.tweet}</li>
);

Tweet.propTypes = {
  tweet: PropTypes.string
};