import React, { PropTypes } from 'react';
import { ProfileImage } from './index';

export const Tweet = (props) => {
  const image = props.tweet.get('user');

  return (
    <li>
      <ProfileImage 
        image={image.get('profile_image_url')} />
      <p>{props.tweet.get('text')}</p>
    </li>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.object
};