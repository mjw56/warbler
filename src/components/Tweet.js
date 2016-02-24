import React, { PropTypes } from 'react';
import { ProfileImage } from './index';

export const Tweet = (props) => {
  const image = props.tweet.get('user');

  return (
    <div className="row" style={{ marginBottom: 15}}>
      <div className="col-md-1">
        <ProfileImage 
          image={image.get('profile_image_url')} />
      </div>
      <div className="col-md-11">
        <p style={{ marginTop: 12 }}>{props.tweet.get('text')}</p>
      </div>
    </div>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.object
};