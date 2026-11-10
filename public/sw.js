// ADRA Ethiopia Service Worker - PWA & Offline Support
const CACHE_NAME = 'adra-ethiopia-shell-v2';
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/brand/adra-vertical-green.png',
  '/brand/adra-vertical-white.png',
  '/brand/adra-vertical-black.png',
  '/brand/adra-horizontal-green.png',
  '/brand/adra-horizontal-white.png',
  '/brand/adra-horizontal-black.png',
  '/brand/adra-globe-green.png',
  '/brand/adra-globe-white.png',
  '/brand/adra-globe-black.png',
  '/assets/aistudio/17943458034881586714568978738653_a6364af5.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[ADRA SW] Precache partial failure:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Network-first with cache fallback for HTML navigation
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('/index.html') || caches.match('/');
      })
    );
    return;
  }

  // Cache-first for brand assets, static fonts & scripts
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const toCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, toCache);
          });
          return response;
        })
        .catch(() => {
          // Graceful fallback if offline
          return cached;
        });
    })
  );
});
