const CACHE_NAME = 'hospital-asset-maintenance-v2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  '/components/icons.tsx',
  '/components/Header.tsx',
  '/components/AssetDetailCard.tsx',
  '/components/ChecklistItem.tsx',
  '/components/MaintenanceChecklist.tsx',
  '/components/ActionButton.tsx',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
];

// Install event: caches all static assets needed for the app shell.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache and caching static assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event: cleans up old caches.
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch event: serves assets from cache or network.
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // For same-origin requests (our app files), use a cache-first strategy.
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(request).then(response => {
        return response || fetch(request);
      })
    );
    return;
  }

  // For cross-origin requests (CDNs), use a stale-while-revalidate strategy.
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(request).then(response => {
        const fetchPromise = fetch(request).then(networkResponse => {
          // If we get a valid response, clone it, cache it, and return it.
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(err => {
            console.error('Fetch failed for:', request.url, err);
            // If fetch fails (e.g., offline), we still have the cached response (if any).
        });

        // Return the cached response immediately if available,
        // while we fetch an updated version in the background.
        return response || fetchPromise;
      });
    })
  );
});
