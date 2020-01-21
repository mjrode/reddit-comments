import React, { useState, useEffect } from 'react';

import { fetchCommentsFromPost } from '../../../clients/reddit.js';
import Comment from '../comment/comment';
import { Grid, CircularProgress, Box } from '@material-ui/core';
import { StyledGrid } from './Comments.styles';

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
  }, [post]);

  return (
    <div>
      {false && comments && (
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

      {true && (
        <StyledGrid
          container
          direction='column'
          justify='center'
          alignContent='center'
          alignItems='center'
        >
          <Grid item>
            <CircularProgress />
          </Grid>
        </StyledGrid>
      )}
    </div>
  );
}
