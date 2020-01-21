import React from 'react';
import queryString from 'query-string';
import axios from 'axios';
const AuthHandler = props => {
  const authToken = queryString.parse(props.location.hash).access_token;
  console.log('props', authToken);

  const config = {
    headers: { Authorization: `Bearer ${authToken}` }
  };
  axios
    .get('https://oauth.reddit.com/subreddits/default', config)
    .then(res => console.log('res', res));

  return <div></div>;
};

export default AuthHandler;
