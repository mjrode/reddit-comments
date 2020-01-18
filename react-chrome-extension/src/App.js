import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button.jsx';
import { fetchSubmissionsWithUrl } from './clients/reddit';
import { SearchBox } from './components/search-box/search-box';
import Posts from './components/reddit/posts/posts';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const [searchField, setSearchField] = useState('');

  const fetchPosts = async () => {
    const url =
      'https://variety.com/2020/film/news/disney-dropping-fox-20th-century-studios-1203470349/';
    const response = await fetchSubmissionsWithUrl(url);
    setPosts(response);
    // TODO: Why won't this log
    console.log('Post parent', posts);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='App'>
      {isLoading && <p>Fetching posts</p>}
      <header className='App-header'>
        {!isLoading && <Posts posts={posts} />}
      </header>
    </div>
  );
}

export default App;
