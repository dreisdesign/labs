const CACHE_NAME = 'daily-note-v1.0.0';
const urlsToCache = [
    './',
    './index.html',
    './styles/main.css',
    './js/main.js',
    './favicon.svg',
    './fonts/SourceSans3VF.woff2',
    './assets/images/check--fill.svg',
    './assets/images/close--fill.svg',
    './assets/images/edit--fill.svg',
    './assets/images/mode-dark--fill.svg',
    './assets/images/mode-light--fill.svg',
    './assets/images/refresh--fill.svg',
    './assets/images/reset--fill.svg',
    './assets/images/settings--fill.svg'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
    console.log('[Note SW] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Note SW] Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch((error) => {
                console.error('[Note SW] Failed to cache resources:', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[Note SW] Activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Note SW] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            })
            .catch(() => {
                // If both cache and network fail, return offline page for navigation requests
                if (event.request.destination === 'document') {
                    return caches.match('./index.html');
                }
            })
    );
});
