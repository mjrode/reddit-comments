import React from 'react';
import './post.styles.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  },
  margin: {
    margin: '1em'
  }
}));

export default function Post({ post, handleClick }) {
  const classes = useStyles();

  return (
    <ListItem
      onClick={() => {
        handleClick(post);
      }}
    >
      <Avatar className={classes.margin} style={{ backgroundColor: '#ff6f00' }}>
        <PostAddRoundedIcon />
      </Avatar>
      <ListItemText
        primary={
          <Typography variant='h6' style={{ color: '#ff6f00' }}>
            {post.subreddit_name_prefixed}
          </Typography>
        }
        secondary={
          <Typography variant='subtitle1' style={{ color: 'black' }}>
            {post.title}
            <br></br>
            Score: {post.ups}
          </Typography>
        }
      />
    </ListItem>
  );
}
