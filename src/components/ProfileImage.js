import React, { PropTypes } from 'react';
import { Tweet } from './Tweet';

export const ProfileImage = (props) => {
  console.log('got this:', props)
  return (
    <img src={props.image} />
  );
};

ProfileImage.propTypes = {
  image: PropTypes.string
};