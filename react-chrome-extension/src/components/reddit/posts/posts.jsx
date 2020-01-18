import React from 'react';
import './posts.styles.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Post from '../post/post';
import Divider from '@material-ui/core/Divider';
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
  const classes = useStyles();
  console.log('posts', posts);
  return (
    <List className={classes.root}>
      {posts.map(post => {
        return <Post key={post.id} post={post} />;
      })}
      <Divider variant='inset' component='li' />
    </List>
  );
}
