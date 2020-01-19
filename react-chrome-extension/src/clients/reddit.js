import snoowrap from 'snoowrap';

const r = new snoowrap({
  userAgent: 'find comments from articles',
  clientId: 'xxxxxxxxxxxxxx',
  clientSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
  refreshToken: 'xxxxxxxxxxxxxxxxxxxxxxxx'
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
