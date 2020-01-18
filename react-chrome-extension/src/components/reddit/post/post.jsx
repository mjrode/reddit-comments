import React from 'react';
import './post.styles.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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

export default function Post({ post }) {
  const classes = useStyles();

  return (
    <ListItem alignItems='flex-start'>
      <ListItemText
        primary={post.title}
        secondary={
          <React.Fragment>
            <Typography
              component='span'
              variant='body2'
              className={classes.inline}
              color='textPrimary'
            >
              Ali Connors
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
