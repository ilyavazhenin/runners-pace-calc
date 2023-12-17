const appCache = 'running-app-v1.0';

const filesURLs = [
  '/static/js/bundle.js',
  'favicon.png',
  'styles.css',
  'document',
  'distancerun',
  'track',
  'manifest.json',
  'app-icon-new.png',
  'app-icon-new192.png',
];

const cacheFirstStrategy = async (request) => {
  const cachedInfo = await caches.match(request);
  return cachedInfo ?? (await fetch(request));
};

self.addEventListener('install', async (e) => {
  const cache = await caches.open(appCache);
  await cache.addAll(filesURLs);
  console.log('[SW]: Installed and cached');
});

self.addEventListener('activate', async (e) => {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter((name) => name !== appCache)
      .map((name) => caches.delete(name))
  );

  console.log('[SW]: Activated');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(cacheFirstStrategy(e.request));
});
