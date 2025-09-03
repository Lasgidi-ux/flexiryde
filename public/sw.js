// FlexiRyde Service Worker - 2026 PWA Standards
const CACHE_NAME = 'flexiryde-v1.0.0';
const STATIC_CACHE = 'flexiryde-static-v1';
const DYNAMIC_CACHE = 'flexiryde-dynamic-v1';
const IMAGE_CACHE = 'flexiryde-images-v1';

// Critical resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/styles/globals.css',
  '/src/assets/flexiryde logo.jpeg',
  '/src/assets/Mini FlexiRyde Logo Design (1).png',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
];

// Routes to cache dynamically
const DYNAMIC_ROUTES = [
  '/features',
  '/how-it-works',
  '/download',
  '/testimonials'
];

// Image extensions to cache
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing FlexiRyde Service Worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating FlexiRyde Service Worker...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== IMAGE_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) return;
  
  event.respondWith(
    handleRequest(request)
  );
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  try {
    // Strategy 1: Cache First for static assets
    if (isStaticAsset(request)) {
      return await cacheFirst(request, STATIC_CACHE);
    }
    
    // Strategy 2: Stale While Revalidate for images
    if (isImage(request)) {
      return await staleWhileRevalidate(request, IMAGE_CACHE);
    }
    
    // Strategy 3: Network First for API calls
    if (isApiCall(request)) {
      return await networkFirst(request, DYNAMIC_CACHE);
    }
    
    // Strategy 4: Cache First with Network Fallback for pages
    return await cacheFirstWithNetworkFallback(request, DYNAMIC_CACHE);
    
  } catch (error) {
    console.error('[SW] Request failed:', error);
    return await getOfflineFallback(request);
  }
}

// Cache First Strategy
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  const cache = await caches.open(cacheName);
  cache.put(request, networkResponse.clone());
  return networkResponse;
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    const cache = caches.open(cacheName);
    cache.then((c) => c.put(request, networkResponse.clone()));
    return networkResponse;
  });
  
  return cachedResponse || fetchPromise;
}

// Network First Strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    const cache = await caches.open(cacheName);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Cache First with Network Fallback
async function cacheFirstWithNetworkFallback(request, cacheName) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    const cache = await caches.open(cacheName);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    return await getOfflineFallback(request);
  }
}

// Helper functions
function isStaticAsset(request) {
  const url = new URL(request.url);
  return STATIC_ASSETS.some(asset => url.pathname.includes(asset)) ||
         url.pathname.includes('/src/') ||
         url.pathname.includes('/assets/') ||
         url.hostname === 'fonts.googleapis.com' ||
         url.hostname === 'fonts.gstatic.com';
}

function isImage(request) {
  const url = new URL(request.url);
  return IMAGE_EXTENSIONS.some(ext => url.pathname.includes(ext)) ||
         url.hostname === 'images.unsplash.com';
}

function isApiCall(request) {
  const url = new URL(request.url);
  return url.pathname.startsWith('/api/') ||
         url.hostname.includes('api.flexiryde.com');
}

async function getOfflineFallback(request) {
  const url = new URL(request.url);
  
  // Return cached page or offline page for navigation requests
  if (request.mode === 'navigate') {
    const cachedResponse = await caches.match('/');
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page if available
    const offlinePage = await caches.match('/offline.html');
    if (offlinePage) {
      return offlinePage;
    }
  }
  
  // Return cached image placeholder for images
  if (isImage(request)) {
    const placeholder = await caches.match('/src/assets/flexiryde logo.jpeg');
    if (placeholder) {
      return placeholder;
    }
  }
  
  // Return generic offline response
  return new Response(
    JSON.stringify({
      error: 'Offline',
      message: 'FlexiRyde is currently offline. Please check your connection.'
    }),
    {
      status: 503,
      statusText: 'Service Unavailable',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    }
  );
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Handle offline booking requests, form submissions, etc.
    console.log('[SW] Performing background sync...');
    
    // Get stored offline actions from IndexedDB
    // Process them when online
    
  } catch (error) {
    console.error('[SW] Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New FlexiRyde notification',
    icon: '/src/assets/flexiryde logo.jpeg',
    badge: '/src/assets/Mini FlexiRyde Logo Design (1).png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Open FlexiRyde',
        icon: '/src/assets/flexiryde logo.jpeg'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/src/assets/flexiryde logo.jpeg'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('FlexiRyde', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event.action);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_CACHE_SIZE') {
    getCacheSize().then((size) => {
      event.ports[0].postMessage({ cacheSize: size });
    });
  }
});

async function getCacheSize() {
  const cacheNames = await caches.keys();
  let totalSize = 0;
  
  for (const cacheName of cacheNames) {
    const cache = await caches.open(cacheName);
    const requests = await cache.keys();
    
    for (const request of requests) {
      const response = await cache.match(request);
      if (response) {
        const blob = await response.blob();
        totalSize += blob.size;
      }
    }
  }
  
  return totalSize;
}

console.log('[SW] FlexiRyde Service Worker loaded successfully');
