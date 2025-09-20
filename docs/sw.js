// sw.js - Minimal Service Worker for Labs PWA
self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  // Claim clients immediately so updates are fast
  event.waitUntil(self.clients.claim());
});
const CACHE_NAME = 'labs-static-v1';
const PRECACHE_URLS = [
  '/labs/',
  '/labs/index.html',
  '/labs/design-system/iframe.html',
  '/labs/design-system/main.css',
  '/labs/design-system/storybook-theme-fixes.css'
];

self.addEventListener('fetch', event => {
  const req = event.request;

  // Navigation requests: network-first then fallback to cached index
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(res => {
        return res;
      }).catch(() => caches.match('/labs/') || caches.match('/labs/index.html'))
    );
    return;
  }

  // For same-origin requests, use cache-first for better offline behavior
  if (new URL(req.url).origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(resp => {
        try {
          const copy = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        } catch (e) { }
        return resp;
      }).catch(() => cached))
    );
  }
});

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS)).catch(() => { })
  );
});

self.addEventListener('activate', event => {
  const keep = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(k => { if (!keep.includes(k)) return caches.delete(k); return Promise.resolve(); })
    )).then(() => self.clients.claim())
  );
});
