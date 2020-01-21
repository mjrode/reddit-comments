/* eslint-disable no-undef */

import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchSubmissionsWithUrl } from './clients/reddit';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Posts from './components/reddit/posts/posts';
import Comments from './components/reddit/comments/comments';
import Grid from '@material-ui/core/Grid';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/reddit/auth/auth';
import AuthHandler from './components/reddit/auth/AuthHandler';
import { setCurrentUrl } from './helpers/helpers';

function App() {
  const [posts, setPosts] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setCurrentUrl(setUrl);
    if (url) {
      fetchSubmissionsWithUrl(url).then(posts => setPosts(posts));
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
          <Switch>
            <Route path='/comments' component={Comments}></Route>
            <Route path='/auth/reddit' component={AuthHandler}></Route>
            <Route path='/auth/' component={Auth}></Route>
            <Route path='/'>
              {!posts && <p>Fetching posts</p>}
              {posts && <Posts posts={posts} />}
            </Route>
          </Switch>
        </div>
      </Grid>
    </Router>
  );
}

export default App;
