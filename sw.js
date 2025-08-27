// sw.js - Minimal Service Worker for Labs PWA
self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  // Claim clients immediately so updates are fast
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  // Default: just pass through all requests
});
