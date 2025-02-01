const cacheName = 'cache-v1';
const precacheResources = [
	'/',
	'/index.html',
	'/distancerun',
	'/track',
	'/css/style.css',
	'/src/index.jsx',
  '/src/App.tsx',
  '/src/index.css',
  '/src/App.css',
  '/app-icon-new.png',
  '/app-icon-new192.png',
  '/manifest.json',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/distance1.jpg',
  '/track1.jpg',
  '/assets/',
  '/sw.js',
  '/index-cJSVxgTZ.js',
  '/index-Com632RG.css',
  '/assets/index-CJSVxgTZ.js',
  '/assets/index-Com632RG.css',
  '/@react-refresh',
  '/@vite/client',
  '/@vite/dist/client/env.mjs',
  '/@vite/env.js',
  'src/pages/distance-running/index.tsx',
  'src/pages/distance-running/components/AvgPaceSelect.tsx',
  'src/pages/distance-running/components/DistanceSelect.tsx',
  'src/pages/distance-running/components/FinishTimeSelect.tsx',
  'src/pages/distance-running/components/SplitsList.tsx',
  'src/pages/track-and-field/index.tsx',
  'src/pages/track-and-field/components/AvgPaceSelect.tsx',
  'src/pages/track-and-field/components/DistanceSelect.tsx',
  'src/pages/track-and-field/components/FinishTimeSelect.tsx',
  'src/pages/track-and-field/components/LapsList.tsx',
  'src/pages/track-and-field/components/LapDistanceSelect.tsx',
  'src/hooks/useActualState.ts',
  'src/shared-components/Navigation.tsx'
];

self.addEventListener('install', (event) => {
	console.log('Service worker install event!');
	event.waitUntil(
		caches.open(cacheName).then((cache) => cache.addAll(precacheResources))
	);
});

self.addEventListener('activate', (event) => {
	console.log('Service worker activate event!');
});

self.addEventListener('fetch', (event) => {
	console.log('Fetch intercepted for:', event.request.url);
	event.respondWith(
		caches.match(event.request).then((cachedResponse) => {
			if (cachedResponse) {
				return cachedResponse;
			}
			return fetch(event.request);
		})
	);
});
