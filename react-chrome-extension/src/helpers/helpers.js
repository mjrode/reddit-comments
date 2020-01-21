/* global chrome */
export const setCurrentUrl = setUrl => {
  if (chrome.storage) {
    chrome.storage.local.get(null, data => {
      setUrl(data['key']);
    });
  } else {
    setUrl('https://www.youtube.com/watch?v=te3OU9fxC8U');
  }
};
