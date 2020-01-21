/*global chrome*/

import snoowrap from 'snoowrap';
import axios from 'axios';
import lscache from 'lscache';
const ONE_HOUR_MS = 1000 * 60 * 60;

// const getAuthUrl = () => {
//   r.getAuthUrl({
//     clientId: 'ZAyR9CwNQyjrFQ'
//   });
// };
const fetchUserToken = async () => {
  const response = await axios.get('https://www.reddit.com/api/v1/authorize', {
    params: {
      client_id: 'ZAyR9CwNQyjrFQ',
      response_type: 'code',
      state: 'randomstring',
      redirect_uri: 'http://localhost:3000/auth/reddit',
      scope:
        'identity, edit, flair, history, modconfig, modflair,modlog, modposts, modwiki, mysubreddits, privatemessages, read, report, save, submit, subscribe, vote, wikiedit, wikiread'
    }
  });
  console.log('REsponse', response);
};

const isTokenExpired = () => {
  const currentToken = lscache.get('accessToken');
  return currentToken.expiryTime < new Date().getTime();
};

const fetchAnonymousToken = async () => {
  if (!isTokenExpired) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://www.reddit.com/api/v1/access_token';
    const params = new URLSearchParams();
    params.append(
      'grant_type',
      'https://oauth.reddit.com/grants/installed_client'
    );
    params.append('device_id', 'DO_NOT_TRACK_THIS_DEVICE');
    const res = await fetch(proxyUrl + url, {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`ewAhN2ATIXq3Zg:`).toString(
          'base64'
        )}`
      }
    }).then(res => res.json());
    const token = {
      token: res.access_token,
      expiryTime: new Date().getTime() + ONE_HOUR_MS
    };
    lscache.set('accessToken', token, ONE_HOUR_MS);
  }
  return lscache.get('accessToken').token;
};

export const initRedditClient = async () => {
  const token = await fetchAnonymousToken();
  return new snoowrap({
    userAgent: 'find comments from articles',
    accessToken: token
  });
};

export const fetchSubmissionsWithUrl = async url => {
  try {
    const redditClient = await initRedditClient();
    const sub = await redditClient.oauthRequest({
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
    const redditClient = await initRedditClient();
    const postWithComments = await redditClient.getSubmission(postID).fetch()
      .comments;
    console.log('Comments response', postWithComments);
    return postWithComments;
  } catch (error) {
    console.log('Error in fetching comments', error);
  }
};
