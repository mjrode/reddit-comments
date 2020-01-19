/*global chrome*/

//CHANGE THIS ONE!

chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
  if (tab.url) {
    chrome.tabs.sendMessage(tab.id, { type: 'getPosts', url: tab.url });
    chrome.storage.local.set({ key: tab.url }, function() {
      console.log('Setting Saved', tab.url);
    });
  }
});

chrome.tabs.onUpdated.addListener(function() {
  chrome.storage.local.get(null, function(result) {
    console.log('Storage --', result);
  });
});

chrome.tabs.onSelectionChanged.addListener(function() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tab) {
    const currentTab = tab[0];
    if (currentTab.url) {
      chrome.tabs.sendMessage(currentTab.id, {
        type: 'getPosts',
        url: tab.url
      });
      chrome.storage.local.set({ key: currentTab.url }, function() {
        console.log('Setting Saved', currentTab.url);
      });
    }
  });
});
