// ==UserScript==
// @name        YT redir /home -> /sub
// @match       https://www.youtube.com/*
// @grant       none
// @run-at      document-start
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
