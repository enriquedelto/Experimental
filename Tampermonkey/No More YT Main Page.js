// ==UserScript==
// @name        No More YT Main Page
// @match       https://www.youtube.com/*
// @version     1
// @author      EnriqueDelto
// @description Makes the Youtube Main Page inaccessible
// @grant       none
// @run-at      document-start
// @license     MIT
// ==/UserScript==

if (location.pathname === '/') {
  location.pathname = '/feed/subscriptions';
}
window.addEventListener('click', e => {
  const a = e.target.closest('a');
  if (a && a.href === 'https://www.youtube.com/') {
    a.pathname = '/feed/subscriptions';
    a.className = '';
  }
}, true);
