import snoowrap from 'snoowrap';

const r = new snoowrap({
  userAgent: 'find comments from articles',
  clientId: 'ZAyR9CwNQyjrFQ',
  clientSecret: '8I92cXHreT9ozvKJxQYuJF8TjS4',
  refreshToken: '384356145602-AbJtlsXRhFMvtij_0FrbgXhCr0o'
});

export const fetchSubmissionsWithUrl = async url => {
  try {
    const sub = await r.oauthRequest({
      uri: '/api/info',
      method: 'get',
      qs: {
        url,
        sort: 'top',
        limit: 100
      }
    });
    console.log('Sub', sub);
    return sub;
  } catch (error) {
    console.log('Error in fetching posts', error);
  }
};

export const fetchCommentsFromPost = async post => {
  // Extracting every comment on a thread
  try {
    const postWithComments = await r
      .getSubmission(post.id)
      .expandReplies({ limit: Infinity, depth: Infinity, sort: 'top' });
    console.log('Comments', postWithComments.comments);
    return postWithComments;
  } catch (error) {
    console.log('Error in fetching comments', error);
  }
};
