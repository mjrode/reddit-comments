/* global chrome */
/* eslint-disable no-undef */

import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchSubmissionsWithUrl } from './clients/reddit';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Posts from './components/reddit/posts/posts';
import Comments from './components/reddit/comments/comments';
import Grid from '@material-ui/core/Grid';
import Navbar from './components/base/Navbar';
import Auth from './components/reddit/auth/auth';
import AuthHandler from './components/reddit/auth/AuthHandler';
import axios from 'axios';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const [url, setUrl] = useState(null);

  const setCurrentUrl = () => {
    if (chrome.storage) {
      chrome.storage.local.get(null, data => {
        setUrl(data['key']);
      });
    } else {
      console.log(
        'React app is not running within the context of the Chrome extension'
      );
      setUrl('https://www.youtube.com/watch?v=te3OU9fxC8U');
    }
  };

  const makeRequest = () => {
    var request = require('request');

    var options = {
      method: 'GET',
      url: 'https://api.reddit.com/api/info.json',
      qs: {
        url: 'https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dte3OU9fxC8U',
        sort: 'top',
        limit: '1000'
      }
    };

    request(options, function(error, response, body) {
      if (error) throw new Error(error);

      console.log(body);
    });
  };
  useEffect(() => {
    // makeRequest();
    setCurrentUrl();
    if (url) {
      fetchSubmissionsWithUrl(url)
        .then(posts => setPosts(posts))
        .then(() => setIsLoading(false));
    }
  }, [url]);

  return (
    <Router>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={0}
      >
        <div className='App'>
          <Navbar />
          <Auth />
          <Switch>
            <Route path='/comments' component={Comments}></Route>
            <Route path='/auth/reddit' component={AuthHandler}></Route>
            <Route path='/'>
              {isLoading && <p>Fetching posts</p>}
              {!isLoading && <Posts posts={posts} />}
            </Route>
          </Switch>
        </div>
      </Grid>
    </Router>
  );
}

export default App;
