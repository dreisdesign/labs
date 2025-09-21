const CACHE_NAME = "tracker-v1.0.0";
const urlsToCache = [
  "./",
  "./index.html",
  "./styles/main.css",
  "./styles/entry-delete.css",
  "./js/main.js",
  "./js/entry-delete.js",
  "./js/keyboard-fix.js",
  "./favicon.svg",
  "./fonts/SourceSans3VF.woff2",
  "./assets/images/add_comment--fill.svg",
  "./assets/images/cancel--fill.svg",
  "./assets/images/check--fill.svg",
  "./assets/images/close--fill.svg",
  "./assets/images/comment--fill.svg",
  "./assets/images/comment-edit--fill.svg",
  "./assets/images/edit--fill.svg",
  "./assets/images/mode-dark--fill.svg",
  "./assets/images/mode-light--fill.svg",
  "./assets/images/refresh--fill.svg",
  "./assets/images/reset--fill.svg",
  "./assets/images/settings--fill.svg",
  "./assets/images/update--fill.svg",
];

// Install event - cache resources
self.addEventListener("install", (event) => {
  console.log("[Tracker SW] Installing...");
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[Tracker SW] Opened cache");
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error("[Tracker SW] Failed to cache resources:", error);
      }),
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("[Tracker SW] Activating...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("[Tracker SW] Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});

// Fetch event - serve from cache when offline
self.addEventListener("fetch", (event) => {
  event.respondWith((async () => {
    try {
      const cached = await caches.match(event.request);
      if (cached) return cached;
      const networkResp = await fetch(event.request);
      return networkResp;
    } catch (e) {
      if (event.request.destination === 'document') {
        const fallback = await caches.match('./index.html').catch(() => null);
        if (fallback) return fallback;
      }
      return new Response('Service unavailable', { status: 503 });
    }
  })());
});
