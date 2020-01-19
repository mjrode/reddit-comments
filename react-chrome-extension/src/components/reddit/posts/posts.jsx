import React, { useState } from 'react';
import './posts.styles.css';
import Comments from '../comments/comments';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Post from '../post/post';
import Divider from '@material-ui/core/Divider';
import { Grid, Box } from '@material-ui/core';

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
          <Grid container>
            <Grid item>
              <List className={classes.root}>
                {posts.map(post => {
                  return (
                    <Box key={post.id} mt={3}>
                      <Post
                        key={post.id}
                        post={post}
                        handleClick={handleClick}
                      />
                    </Box>
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
