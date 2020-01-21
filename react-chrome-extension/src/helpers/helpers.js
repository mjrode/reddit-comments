/* global chrome */
import moment from 'moment';

export const setCurrentUrl = setUrl => {
  if (chrome.storage) {
    chrome.storage.local.get(null, data => {
      setUrl(data['key']);
    });
  } else {
    setUrl(
      'https://m.signalvnoise.com/only-15-of-the-basecamp-operations-budget-is-spent-on-ruby/'
    );
  }
};

export const hoursSincePost = post => {
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
