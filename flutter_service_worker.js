'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2c8b0dae21022c0d6263f5707581336e",
"index.html": "79f3aa22e7a941bf000323c5d203f014",
"/": "79f3aa22e7a941bf000323c5d203f014",
"main.dart.js": "36abd0602ec39bb37427dcf15464d337",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "db4b8bbcfda8e2c9dba9406e2be828c0",
"assets/AssetManifest.json": "4296f844c86f269deaf1ab2c881aac1f",
"assets/NOTICES": "577c84db5dafae72df31cd799e1de705",
"assets/FontManifest.json": "151e0122a5e900225a4a2eb3dac0fe49",
"assets/AssetManifest.bin.json": "fe79c2adbf26275a31a6bcff2c5a7953",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "38cf7bb6d2bde2e9acc74b46f200d649",
"assets/fonts/MaterialIcons-Regular.otf": "cdba132c5ad8cbca32249c3dcff7dc3b",
"assets/assets/images/accomodation_header_backdrop.png": "aa249c1025eb470962770ca8ee6bc721",
"assets/assets/images/core_getx.png": "9bef03456a18b1e9edc7d5d5af029a35",
"assets/assets/images/home_header_backdrop.png": "92b06c781b390d841b9cf840073df5b0",
"assets/assets/images/flight_backdrop.png": "0b9f651c6bb3a7860c57678e15e76e42",
"assets/assets/images/request_submitted_image.png": "20c8216efe7bedb64d8908f81d70b7ab",
"assets/assets/images/image_error.png": "b6e6e40523f8f30a4eaf973fefdf147e",
"assets/assets/images/symbolimg_logo.png": "1dacdeae31a535c7d8368c00c956eff9",
"assets/assets/icons/nav-arrow-right.png": "e44a0108d82285fbf1fe6ee6a20c5e5c",
"assets/assets/icons/list.svg": "20b414218793f5af9b900b058a79c194",
"assets/assets/icons/unselected-home-simple-door.svg": "c2037ee11e08d3a002bf0b1b2422366a",
"assets/assets/icons/bed.svg": "916e4bb22bede8ac1652a8f3721033f7",
"assets/assets/icons/cancel.svg": "e9ffe8192219e7234b93bbd0198fcf69",
"assets/assets/icons/crop.svg": "751f9ef65095c8d65ac506237a088081",
"assets/assets/icons/arrow-right.png": "a82873b23e1c8a81a4d75318e92b2dbc",
"assets/assets/icons/city.svg": "e762ac201c05836c5979beab3923c63b",
"assets/assets/icons/ic_child.svg": "96376f860434e05116dbea505d48edb1",
"assets/assets/icons/map.png": "89243c5fd38eea09c82cf4f2eddea9bf",
"assets/assets/icons/ic_error.png": "44ae1f1c7e73f006db3eeadddcbdd696",
"assets/assets/icons/plus_circle_button.svg": "3cb4f452dbca3cd534e034933f4584f3",
"assets/assets/icons/minus_circle_button.svg": "6159188af443d97531b2c4448240a713",
"assets/assets/icons/selected-crown.svg": "180a70da80dbd7ddf78b74a3200b664b",
"assets/assets/icons/no-smoking.svg": "7f05358678fb010a85c7fcdaa1e594d8",
"assets/assets/icons/ic_success.png": "6229aebb4060983df7e414809e045fa3",
"assets/assets/icons/ic_adult.svg": "5605a42d759edbf410f1a144a7f960c4",
"assets/assets/icons/check.svg": "2a2ddc870425bd12616fb7322e443e4e",
"assets/assets/icons/maps-arrow-diagonal.svg": "dea814c9cfea7389c660d648fcc6d1ce",
"assets/assets/icons/smoking.svg": "5f1062f02c0a59166456730fd69125ed",
"assets/assets/icons/pin-alt.svg": "b7681fa81d5a46a181a5b8b54609214e",
"assets/assets/icons/ic_clear.png": "238fee4b9b44ddc185c2ce5a51639b2c",
"assets/assets/icons/cleo_logo_ic.svg": "485b1a5fa683483570e4ea277964945c",
"assets/assets/icons/home-simple-door.svg": "8e1d0948e3cf772b860485d57e00987f",
"assets/assets/icons/crown.svg": "d03dd60d42b2c39ef2a94ac4e3204986",
"assets/assets/icons/info-empty.svg": "6e686aa541cffad1db2b740caf41407a",
"assets/assets/icons/ic_infant.svg": "5d0f824daeea7d139298c0cdd604e210",
"assets/assets/icons/clock.svg": "5ac1ee248c478cc81c61e98eb311022c",
"assets/assets/icons/arrow-left.svg": "4ebb1c64e38b021fde23f4da6da01700",
"assets/assets/icons/airplane_template.png": "891b6d19ed5478254be28df9dce75d13",
"assets/assets/icons/chat_bubble_question.svg": "2c773c7570ea12764714829723a6aa5c",
"assets/assets/icons/edit-pencil.png": "432615d4b4680c1678280e21b614c61f",
"assets/assets/icons/menu.svg": "895cf446b1943420a1f42db025bec00e",
"assets/assets/icons/airplane.svg": "58613c464069f54c10ab69a1dab443cf",
"assets/assets/icons/swap_button.svg": "3bdb914284bf127435f2b99e205b51f7",
"assets/assets/icons/chat_bubble_check.svg": "84784f67a396a4bd7074c610ba2463e8",
"assets/assets/icons/eye-alt.svg": "427cf726aad650509c358ca850dfd766",
"assets/assets/fonts/Interstate-Regular-Font.ttf": "52801e5cfa2fedc505d9ebda560234f3",
"assets/assets/fonts/IconoirIconsRegular.ttf": "7e39025377738e190e010636c3a502b5",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
