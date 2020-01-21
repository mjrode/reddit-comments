import React, { useState, useEffect } from 'react';

import { fetchCommentsFromPost } from '../../../clients/reddit.js';
import Typography from '@material-ui/core/Typography';
import Comment from '../comment/comment';
import Grid from '@material-ui/core/Grid';

export default function Comments(props) {
  const postId = props.location.state.postId;
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [post, setPost] = useState(postId);

  useEffect(() => {
    console.log('Post effect', post);
    fetchCommentsFromPost(post)
      .then(response => setComments(response))
      .then(() => setIsLoading(false));
  }, []);

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
