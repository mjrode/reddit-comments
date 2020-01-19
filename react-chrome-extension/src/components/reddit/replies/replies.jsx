import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';

export default function Replies({ comment }) {
  console.log('Comment', comment.author);

  return (
    <div>
      <ul>
        {comment.replies.map(reply => {
          return (
            <div key={reply.id}>
              <li key={reply.id}> {reply.body}</li>
              {reply.replies.length > 0 && (
                <ul>
                  {reply.replies.map(reply => {
                    return <li>{reply.body}</li>;
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </ul>
      ;
    </div>
  );
}
