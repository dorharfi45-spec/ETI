// Detabase offline helper. After the first visit the app opens with no connection: the page, the built-in
// lessons and the libraries are kept on the device.
//   Pages and lessons: the network first (so a new build arrives at once), the kept copy when offline.
//   Libraries (Files/vendor/): the kept copy first; they change only with a new CACHE name.
// Firebase and other sites are never touched. Raise CACHE when the vendor files change.
var CACHE = "detabase-v1";
var FONTS = ["AMS-Regular", "Caligraphic-Bold", "Caligraphic-Regular", "Fraktur-Bold", "Fraktur-Regular", "Main-Bold", "Main-BoldItalic",
  "Main-Italic", "Main-Regular", "Math-BoldItalic", "Math-Italic", "SansSerif-Bold", "SansSerif-Italic", "SansSerif-Regular", "Script-Regular",
  "Size1-Regular", "Size2-Regular", "Size3-Regular", "Size4-Regular", "Typewriter-Regular"];
var CORE = ["./", "index.html", "Files/detabase.html", "Files/content/eti.html", "Files/manifest.webmanifest", "Files/icon.svg", "Files/icon-192.png",
  "Files/vendor/mathlive.js", "Files/vendor/mathlive.css", "Files/vendor/jsxgraph.js", "Files/vendor/jsxgraph.css",
  "Files/vendor/pdf.min.js", "Files/vendor/pdf.worker.min.js"].concat(FONTS.map(function (f) { return "Files/vendor/fonts/KaTeX_" + f + ".woff2"; }));

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  var req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  var key = url.origin + url.pathname;                 // ?t=… (the cache-buster) never makes a new copy
  if (url.pathname.indexOf("/Files/vendor/") >= 0) {
    e.respondWith(caches.match(key).then(function (hit) {
      return hit || fetch(req).then(function (r) {
        if (r.ok) { var copy = r.clone(); caches.open(CACHE).then(function (c) { c.put(key, copy); }); }
        return r;
      });
    }));
    return;
  }
  e.respondWith(fetch(req).then(function (r) {
    if (r.ok) { var copy = r.clone(); caches.open(CACHE).then(function (c) { c.put(key, copy); }); }
    return r;
  }).catch(function () {
    return caches.match(key).then(function (hit) { return hit || caches.match(url.origin + url.pathname.replace(/[^/]*$/, "") + "index.html"); });
  }));
});
