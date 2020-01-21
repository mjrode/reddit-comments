import React from 'react';

const Auth = () => {
  const clientID = 'ewAhN2ATIXq3Zg';
  const scope =
    'identity, edit, flair, history, modconfig, modflair,modlog, modposts, modwiki, mysubreddits, privatemessages, read, report, save, submit, subscribe, vote, wikiedit, wikiread';
  const redirectURI = 'http://localhost:3000/auth/reddit';
  const authLink = `https://www.reddit.com/api/v1/authorize?client_id=${clientID}&response_type=token&state=RANDOM_STRING&redirect_uri=${redirectURI}&scope=${scope}`;
  return (
    <div>
      <a href={authLink}>Authenticate </a>
    </div>
  );
};

export default Auth;
