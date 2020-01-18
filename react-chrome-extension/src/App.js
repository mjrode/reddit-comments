import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchSubmissionsWithUrl } from './clients/reddit';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Posts from './components/reddit/posts/posts';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const url =
      'https://variety.com/2020/film/news/disney-dropping-fox-20th-century-studios-1203470349/';

    const response = await fetchSubmissionsWithUrl(url);
    setPosts(response);
    // TODO: Why won't this log
    // console.log('Post parent', posts);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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
