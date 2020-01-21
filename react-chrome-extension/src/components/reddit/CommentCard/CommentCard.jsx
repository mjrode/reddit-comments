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

export default function CommentCard({ comment, margin, setHidden }) {
  const [minimized, setMinimized] = useState(false);

  const subheader = (
    <div className='points'>
      {comment.ups} points {hoursSincePost(comment)}
    </div>
  );
  return (
    <ListItem>
      <StyledCard margin={margin}>
        <Grid item>
          <button className='min' id='hide' onClick={() => setHidden(comment)}>
            <MinimizeIcon />
          </button>
        </Grid>
        <CardHeader
          title={
            <Grid container>
              <Grid item className='title'>
                <a
                  className='username'
                  href={`https://reddit.com/user/${comment.author.name}`}
                >
                  <span className='posted-by'>Posted by </span>
                  u/{comment.author.name}
                </a>
              </Grid>
            </Grid>
          }
          subheader={subheader}
        ></CardHeader>

        <CardContent>
          <Markdown>{comment.body}</Markdown>
        </CardContent>
      </StyledCard>
    </ListItem>
  );
}
