import React, { useState, useEffect } from 'react';
import './posts.styles.css';
import Comments from '../comments/comments';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Post from '../post/post';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  }
}));

export default function Posts({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleClick = post => {
    setSelectedPost(post);
  };

  const classes = useStyles();
  return (
    <div>
      {!selectedPost && (
        <div>
          <Typography variant='h1' component='h2' gutterBottom>
            Posts
          </Typography>
          <Grid container>
            <Grid item>
              <List className={classes.root}>
                {posts.map(post => {
                  return (
                    <Post key={post.id} post={post} handleClick={handleClick} />
                  );
                })}
                <Divider variant='inset' component='li' />
              </List>
            </Grid>
          </Grid>
        </div>
      )}

      {selectedPost && (
        <div>
          <Comments selectedPost={selectedPost} />
        </div>
      )}
    </div>
  );
}
