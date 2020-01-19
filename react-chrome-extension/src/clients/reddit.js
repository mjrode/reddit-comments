import snoowrap from 'snoowrap';

const r = new snoowrap({
  userAgent: 'find comments from articles',
  clientId: 'ZAyR9CwNQyjrFQ',
  clientSecret: '8I92cXHreT9ozvKJxQYuJF8TjS4',
  refreshToken: '384356145602-qcQSBNt43EviCdT71ncxmUVqfyk'
});

export const fetchSubmissionsWithUrl = async url => {
  console.log('Fetching posts from ', url);
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
    // const res = await r.search({
    //   query: query,
    //   restrictSr: false,
    //   time: 'all',
    //   sort: 'relevance',
    //   syntax: 'lucene'
    // });
    // const sub = await r.getSubmission(postID);
    // console.log('Sub fonud', sub.id);
    // const postWithComments = await sub.comments.fetchMore({
    //   amount: 100,
    //   skipReplies: true,
    //   sort: 'top'
    // });
    console.log('postId', postID);
    const postWithComments = await r.getSubmission(postID).fetch().comments;
    // .expandReplies({ limit: 3, depth: 3, sort: 'top' }).comments;
    console.log('Comments response', postWithComments);
    return postWithComments;
  } catch (error) {
    console.log('Error in fetching comments', error);
  }
};
