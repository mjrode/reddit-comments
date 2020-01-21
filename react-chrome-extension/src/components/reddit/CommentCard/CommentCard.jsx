import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
  Grid,
  Paper,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
  ListItem,
  Typography
} from '@material-ui/core';

import MinimizeIcon from '@material-ui/icons/Minimize';

import { StyledCard } from './CommentCard.styles';
import Markdown from './Markdown';
import { hoursSincePost } from '../../../helpers/helpers.js';

export default function CommentCard({ comment }) {
  const [minimized, setMinimized] = useState(false);
  const [hidden, setHidden] = useState(false);

  return (
    <ListItem>
      <StyledCard>
        <Grid item>
          <a className='min' href='google.com'>
            <MinimizeIcon />
          </a>
        </Grid>
        <CardHeader
          title={
            <Grid container>
              <Grid item>
                <a
                  className='username'
                  href={`https://reddit.com/user/${comment.author.name}`}
                >
                  {comment.author.name}
                </a>
              </Grid>
            </Grid>
          }
          subheader={hoursSincePost(comment)}
        ></CardHeader>

        <CardContent>{comment.body}</CardContent>
      </StyledCard>
    </ListItem>
  );
}
