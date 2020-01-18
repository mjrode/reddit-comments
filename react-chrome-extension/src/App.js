/* global chrome */
/* eslint-disable no-undef */

import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchSubmissionsWithUrl } from './clients/reddit';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Posts from './components/reddit/posts/posts';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import lscache from 'lscache';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const [url, setUrl] = useState(null);

  const clearStorage = () => {
    chrome.storage.local.clear(function() {
      console.log('Cleared Storage');
    });
  };

  const fetchPosts = async () => {
    if (url) {
      const response = await fetchSubmissionsWithUrl(url);
      setPosts(response);
      // TODO: Why won't this log

      setIsLoading(false);
    }
  };

  const setCurrentUrl = () => {
    chrome.storage.local.get(null, data => {
      setUrl(data['key']);
    });
  };

  useEffect(() => {
    fetchPosts();
    setCurrentUrl();
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
          {isLoading && <p>Fetching posts</p>}

          {!isLoading && <Posts posts={posts} />}
        </div>
      </Grid>
    </Router>
  );
}

export default App;
