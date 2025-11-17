const CACHE_NAME = 'sansteel-sacco-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
```

3. Save the file as `service-worker.js` (make sure it's .js, not .txt)

## Creating the Icons:

You'll also need two icon images. You can:

**Option 1: Use an online tool**
- Go to https://www.favicon-generator.org/ or https://realfavicongenerator.net/
- Upload your SANSTEEL SACCO logo
- Generate 192x192 and 512x512 PNG icons
- Download and name them `icon-192.png` and `icon-512.png`

**Option 2: Use image editing software**
- Resize your logo to 192x192 pixels and save as `icon-192.png`
- Resize your logo to 512x512 pixels and save as `icon-512.png`

## Final Folder Structure:

Once done, you should have a folder with these files:
```
my-pwa-folder/
├── index.html
├── manifest.json
├── service-worker.js
├── icon-192.png
└── icon-512.png