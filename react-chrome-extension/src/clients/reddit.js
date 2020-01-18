import snoowrap from 'snoowrap';

const r = new snoowrap({
  userAgent: 'find comments from articles',
  clientId: 'ZAyR9CwNQyjrFQ',
  clientSecret: '8I92cXHreT9ozvKJxQYuJF8TjS4',
  refreshToken: '384356145602-AbJtlsXRhFMvtij_0FrbgXhCr0o'
});

export const fetchSubmissionsWithUrl = async url => {
  const sub = await r.oauthRequest({
    uri: '/api/info',
    method: 'get',
    qs: {
      url,
      sort: 'top'
    }
  });
  console.log('Sub', sub);
  return sub;
};

const fetchCommentsFromSubmission = sub => {
  sub.map(async sub => {
    const comments = await r.getSubmission(sub.id).comments;
    console.log('Sub comments', comments[0]);
  });
};
