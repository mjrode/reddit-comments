/* global chrome */
/* eslint-disable no-undef */

import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchSubmissionsWithUrl } from './clients/reddit';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Posts from './components/reddit/posts/posts';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Navbar from './components/base/Navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const [url, setUrl] = useState(null);

  const clearStorage = () => {
    chrome.storage.local.clear(function() {
      console.log('Cleared Storage');
    });
  };

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

  useEffect(() => {
    setCurrentUrl();
    fetchSubmissionsWithUrl(url)
      .then(posts => setPosts(posts))
      .then(() => setIsLoading(false));
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
          {isLoading && <p>Fetching posts</p>}

          {!isLoading && <Posts posts={posts} />}
        </div>
      </Grid>
    </Router>
  );
}

export default App;
