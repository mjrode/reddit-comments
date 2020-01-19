import React from 'react';
import { Link } from 'react-router-dom';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import { Divider, Box, Grid, Button, Badge } from '@material-ui/core';
import moment from 'moment';

import {
  StyledCard,
  StyledCardActions,
  StyledImg,
  StyledPaper,
  StyledCardContent
} from './post.styles';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';

const hoursSincePost = post => {
  const postTime = moment.unix(post.created_utc);
  const difference = moment.duration(moment().diff(postTime));
  const hourDifference = difference.asHours();
  if (hourDifference > 14) {
    const dayDifference = difference.asDays();
    return `${Math.round(dayDifference)} days ago`;
  } else {
    return `${Math.round(hourDifference)} hours ago`;
  }
};
const invalidImages = ['default', 'image'];

export default function Post({ post }) {
  return (
    <StyledCard mt={4}>
      <StyledPaper primary={'true'}>
        <Box p={1}>
          <h1>{`r/${post.subreddit.display_name}`}</h1>
          <p>
            {`Posted by u/${post.author.name}`} {hoursSincePost(post)}
          </p>
        </Box>
      </StyledPaper>
      <Divider />
      <StyledPaper>
        <Grid container>
          <Grid container display='flex'>
            {!invalidImages.includes(post.thumbnail) && (
              <Grid item xs={4}>
                <StyledImg
                  alt={post.subreddit['display_name']}
                  src={post.thumbnail}
                />
              </Grid>
            )}

            <Grid item xs={invalidImages.includes(post.thumbnail) ? 12 : 8}>
              <StyledCardContent
                p={2}
                letterSpacing={1}
                fontSize={20}
                align='left'
              >
                {post.title}
              </StyledCardContent>
            </Grid>
          </Grid>
        </Grid>

        <Divider />
        <StyledCardActions>
          <Button size='small' color='primary'>
            <Badge badgeContent={post.num_comments} color='error'>
              <Box>
                <Link
                  to={{
                    pathname: '/comments',
                    state: {
                      postId: post.id
                    }
                  }}
                >
                  Comments
                </Link>
              </Box>
              <ChatBubbleRoundedIcon />
            </Badge>
          </Button>
          <Button size='small' color='primary'>
            <Badge badgeContent={post.score} color='error'>
              <Box>Upvotes</Box>
              <ExpandLessRoundedIcon />
            </Badge>
          </Button>
        </StyledCardActions>
      </StyledPaper>
    </StyledCard>
  );
}
