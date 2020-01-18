//CHANGE THIS ONE!
// update on URL update
const clearStorage = () => {
  chrome.storage.local.clear(function() {
    console.log('Cleared Storage');
  });
};

chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
  console.log('onUpdated: ' + tab.url);
  if (tab.url) {
    chrome.tabs.sendMessage(tab.id, { type: 'getPosts', url: tab.url });
    chrome.storage.local.set({ key: tab.url }, function() {
      console.log('Setting Saved', tab.url);
    });
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
  chrome.storage.local.get(null, function(result) {
    console.log('Storage --', result);
  });
});

chrome.tabs.onSelectionChanged.addListener(function(tabId, info) {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tab) {
    const currentTab = tab[0];
    console.log('tab query', currentTab);
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
