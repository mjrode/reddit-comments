import React from 'react';

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
                    return <li key={reply.id}>{reply.body}</li>;
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
