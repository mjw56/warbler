import React, { PropTypes } from 'react';
import { ProfileImage } from './index';

export const Tweet = (props) => {
  const _tweet = props.tweet.toJS();
  
  return (
    <div className="row" style={{ marginBottom: 15}}>
      <div className="col-md-1">
        <ProfileImage 
          image={_tweet.user.profile_image_url} />
      </div>
      <div className="col-md-8">
        <p><strong>{_tweet.user.name}</strong> • {_tweet.user.screen_name}</p>
        <p style={{ marginTop: 12 }}>{_tweet.text}</p>
      </div>
    </div>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.object
};