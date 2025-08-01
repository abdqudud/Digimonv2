
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("digimon-cache").then((cache) => {
      return cache.addAll([
        "index.html",
        "style.css",
        "script.js",
        "cards.js",
        "manifest.json",
        "icon-192.png",
        "icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
