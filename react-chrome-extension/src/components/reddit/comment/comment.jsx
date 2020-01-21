import React from 'react';
import { Grid, Paper, List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';
import Replies from '../replies/replies.jsx';

import CommentCard from '../CommentCard/CommentCard';

export default function Comment({ comment }) {
  // const generateReplies = comment => {
  //   console.log('Replies', comment);
  //   return replies.map((reply, index) => {
  //     return (
  //       <CommentCard comment={reply} key={reply.id} margin={index}>
  //         {console.log('reply', reply)}
  //         {generateReplies(reply.replies)}
  //       </CommentCard>
  //     );
  //   });
  // };
  return (
    <Grid container>
      {/* <List>{generateReplies(comment)}</List> */}
      {/* <Paper elevation={4}>
        <ListItem>
          <Avatar style={{ backgroundColor: '#ff6f00' }}>
            <PostAddRoundedIcon />
          </Avatar>
          <ListItemText
            primary={
              <Typography variant='h6' style={{ color: '#ff6f00' }}>
                {comment.author.name.toString()}
              </Typography>
            }
            secondary={
              <Typography variant='subtitle1' style={{ color: 'black' }}>
                {comment.body}
                <br></br>
                Score: {comment.ups}
              </Typography>
            }
          />
        </ListItem>
        <Grid item>
          <Replies comment={comment} />
        </Grid>
      </Paper> */}
    </Grid>
  );
}
