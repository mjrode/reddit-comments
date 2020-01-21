/*global chrome*/
console.log(' Did I load?');
let div = document.createElement('div');
div.id = 'contentScriptDivID';
div.style.margin = '2em';
div.style.padding = '2em';
div.style.textAlign = 'center';
div.style.backgroundColor = 'white';

let btn = document.createElement('button');
btn.id = 'contentScriptButtonID';
btn.innerHTML = 'React-Chrome-Extension';
console.log('Content Script started');
