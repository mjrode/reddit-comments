// USE THIS ONE!
/*global chrome*/
let div = document.createElement('div');
div.id = 'contentScriptDivID';
div.style.backgroundColor = '#31B0D5';
div.style.color = 'white';
div.style.color = 'white';
div.style.padding = '10px 20px';
div.style.borderRadius = '4px';
div.style.borderColor = '#46b8da';
div.innerHTML = 'React-Chrome-Extension';

let btn = document.createElement('button');
btn.id = 'contentScriptButtonID';
btn.innerHTML = 'Click Me!';
chrome.storage.local.get(null, function(result) {
  document.dispatchEvent(new CustomEvent('csEvent', { detail: result }));
  console.log('Storage --', result);
});
div.appendChild(btn);
document.body.prepend(div);

btn.addEventListener('click', function() {
  console.log('Starting button event handler');
  chrome.runtime.sendMessage(
    { type: 'GET', params: { token: 'token' } },
    {},
    function(response) {
      console.log('Inside sendMessage');
      console.log('Content script response: ', response);
    }
  );
});
