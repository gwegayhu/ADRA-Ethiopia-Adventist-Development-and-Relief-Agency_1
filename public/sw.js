// ADRA Ethiopia Service Worker - Network-First PWA Shell (Dev-Safe)
const CACHE_NAME = 'adra-ethiopia-shell-v4';
const PRECACHE_ASSETS = [
  '/manifest.json',
  '/brand/adra-logo.png'
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
    (async () => {
      const keys = await caches.keys();
      const hadLegacyCaches = keys.some((key) => key !== CACHE_NAME);
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.clients.claim();

      if (hadLegacyCaches) {
        const windowClients = await self.clients.matchAll({
          type: 'window',
          includeUncontrolled: true
        });
        await Promise.all(
          windowClients.map((client) => client.navigate(client.url).catch(() => undefined))
        );
      }
    })()
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // Never intercept SW script, API routes, or Vite dev source modules
  if (
    url.pathname === '/sw.js' ||
    url.pathname.startsWith('/src/') ||
    url.pathname.startsWith('/@') ||
    url.pathname.startsWith('/node_modules/') ||
    url.pathname.startsWith('/api/') ||
    url.searchParams.has('t') ||
    url.searchParams.has('v') ||
    /\.(ts|tsx|jsx|mts|cts)(\?.*)?$/i.test(url.pathname)
  ) {
    return;
  }

  // Network-first with cache fallback for HTML navigation
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.ok) {
            const toCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, toCache)).catch(() => {});
          }
          return response;
        })
        .catch(async () => {
          return (
            (await caches.match(event.request)) ||
            (await caches.match('/index.html')) ||
            (await caches.match('/')) ||
            Response.error()
          );
        })
    );
    return;
  }

  // Network-first with offline cache fallback for static assets
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const toCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, toCache)).catch(() => {});
        }
        return response;
      })
      .catch(async () => {
        return (await caches.match(event.request)) || Response.error();
      })
  );
});
