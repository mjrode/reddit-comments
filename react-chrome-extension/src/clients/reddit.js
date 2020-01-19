import snoowrap from 'snoowrap';

const r = new snoowrap({
  userAgent: 'find comments from articles',
  clientId: 'ZAyR9CwNQyjrFQ',
  clientSecret: '8I92cXHreT9ozvKJxQYuJF8TjS4',
  refreshToken: '384356145602-qcQSBNt43EviCdT71ncxmUVqfyk'
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

export const fetchCommentsFromPost = async postID => {
  try {
    const postWithComments = await r.getSubmission(postID).fetch().comments;
    console.log('Comments response', postWithComments);
    return postWithComments;
  } catch (error) {
    console.log('Error in fetching comments', error);
  }
};
