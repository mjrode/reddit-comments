import React, { useState, useEffect } from 'react';

import { fetchCommentsFromPost } from '../../../clients/reddit.js';
import CommentCard from './../CommentCard/CommentCard';
import { Grid, CircularProgress, List } from '@material-ui/core';
import { CommentsContainer, StyledGrid } from './Comments.styles';
import { StyledCard, StyledWidthGrid } from '../CommentCard/CommentCard.styles';

export default function Comments(props) {
  const postId = props.location.state.postId;
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [commentHidden, SetCommentHidden] = useState([]);

  const [post, setPost] = useState(postId);

  useEffect(() => {
    fetchCommentsFromPost(post)
      .then(response => setComments(response))
      .then(() => setIsLoading(false));
  }, [post]);

  const setHidden = comment => {
    const commentId = comment.id;
    const parentId = comment.parent_id.split('_')[1];

    const updateClass = id => {
      if (commentHidden[id] === true) return;

      const newState = (commentHidden[id] = true);

      SetCommentHidden({ ...commentHidden, newState });
    };
    updateClass(parentId);
    updateClass(commentId);
  };
  const generateComments = comments => {
    return comments.map((comment, index) => {
      return (
        <div key={index}>
          <StyledCard margin={index}>
            <CommentCard
              index={comment.depth}
              comment={comment}
              key={comment.id}
              margin={comment.depth}
              setHidden={setHidden}
            ></CommentCard>
            <CommentsContainer
              key={index}
              className={`comments ${comment.id} ${
                commentHidden[comment.id] ? 'hidden' : ''
              }`}
            >
              {comment.replies.length > 0 && generateComments(comment.replies)}
            </CommentsContainer>
          </StyledCard>
        </div>
      );
    });
  };
  return (
    <div>
      {comments && (
        <div>
          <Grid container>
            <StyledWidthGrid item>
              <List>{generateComments(comments)}</List>
            </StyledWidthGrid>
          </Grid>
        </div>
      )}

      {!comments && (
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
