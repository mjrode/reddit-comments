import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { fetchCommentsFromPost } from '../../../clients/reddit.js';
import Typography from '@material-ui/core/Typography';
import Comment from '../comment/comment';
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

export default function Comments(props) {
  console.log('comment props', props);
  const postId = props.location.state.postId;
  console.log('coments post is', postId);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState(null);
  const [post, setPost] = useState(postId);

  // const fetchComments = async () => {
  //   const response = await ;
  //   setComments(response.comments);
  //   setIsLoading(false);
  // };

  useEffect(() => {
    console.log('Post effect', post);
    fetchCommentsFromPost(post)
      .then(response => setComments(response.comments))
      .then(() => setIsLoading(false));
  }, []);

  // const handleClick = id => {};

  const classes = useStyles();
  return (
    <div>
      {comments && (
        <div>
          <Grid container>
            <Grid item>
              {comments.length}
              {comments.map(comment => {
                return <Comment comment={comment} key={comment.id} />;
              })}
            </Grid>
          </Grid>
        </div>
      )}

      {!comments && (
        <div>
          <Typography variant='h1' component='h2' gutterBottom>
            Loading Comments...
          </Typography>
        </div>
      )}
    </div>
  );
}