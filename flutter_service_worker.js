'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "52f2db1ec8d8f218e291863deea6fe1d",
"/": "52f2db1ec8d8f218e291863deea6fe1d",
"main.dart.js": "81990def81616890ba889bd400a24985",
"assets/app_icon_transparent.png": "00a4f989b10d77c95a555a464c70f7aa",
"assets/dashboard.png": "6ab29ce504f7c8cbb90f0ab90ce701c9",
"assets/mock_data/pending_requests.json": "2c82adc0647ca842c5d8dbcd5f9431ab",
"assets/ambulance.png": "c70d96f9b31969ae69d4cbf0bb4ff94d",
"assets/LICENSE": "c780e506da40637f412c05684ef7c81e",
"assets/app_icon.png": "38dc2fe89bbd920a36933b2de8d418c3",
"assets/wellbeing.png": "cf92223ae295ad853104c08f418754f7",
"assets/T1_logo.png": "ea669a9b7052cefa9156fd2179af614e",
"assets/AssetManifest.json": "4ad49f2e8597e3759fbd0c6ad5665fdf",
"assets/map_styles/light_map_style.json": "cede92049fbf4bcb6d3988827f1499f6",
"assets/map_styles/dark_map_style.json": "91baa72460637ca5cd3dc3864ff8fd62",
"assets/T4_logo.png": "25d74266d9e15277eb68c84ec7414489",
"assets/FontManifest.json": "ea72ecad936976f5de55b61fa95b774d",
"assets/packages/groovin_material_icons/fonts/pub_icon.ttf": "5cc207051c36749d5e7d09b8446bb4f2",
"assets/packages/groovin_material_icons/fonts/MaterialOutlineIcons1.ttf": "0f2e93ecc4eeeb0af5166b6c3dbd123c",
"assets/packages/groovin_material_icons/fonts/flutter_icon_custom.ttf": "d86777a6da8c9be38f78f0dd55b72696",
"assets/packages/groovin_material_icons/fonts/send_outline.ttf": "1584ea472bff01b3a03d71334b7fb9da",
"assets/packages/groovin_material_icons/fonts/ballot_icons.ttf": "8e72d4116a540a3fd12a3147c9f61bbc",
"assets/packages/groovin_material_icons/fonts/materialdesignicons-webfont.ttf": "c1971be827467e11eafafa657a7978bf",
"assets/packages/groovin_material_icons/assets/flutter.png": "3ed5fdc99539ba8e4593e4d86255fe67",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/humanitarian_icons/fonts/Humanitarian-Icons-v02.ttf": "d78c6eb57c26e8732cd1a447f10d52f8",
"assets/web_bg_asset.png": "20e8c3ce9c10b8355ebdac680cd2d8e2",
"assets/qr.png": "8888a1662e420443a14c40a225c438db",
"assets/fonts/Quicksand-Bold.ttf": "410a26014ce7e25824ae18349d2c92d3",
"assets/fonts/Quicksand-Medium.ttf": "7e2479fe3619b4b56dbfc0094ff23a3c",
"assets/fonts/README": "46a8f645466d30063d4d0bbad726318d",
"assets/fonts/etriage-tags.ttf": "c890f09bab2f2d601e99bdf0f220d6f1",
"assets/fonts/Quicksand-Regular.ttf": "9a891411c3856f2db214f3507349a424",
"assets/fonts/Quicksand-SemiBold.ttf": "feb6fb672a260bc45a8bfb278e233772",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Quicksand-Light.ttf": "7dcc3e19fb99b72cf354f6caee2df104",
"assets/assets/app_icon_transparent.png": "00a4f989b10d77c95a555a464c70f7aa",
"assets/assets/dashboard.png": "6ab29ce504f7c8cbb90f0ab90ce701c9",
"assets/assets/ambulance.png": "c70d96f9b31969ae69d4cbf0bb4ff94d",
"assets/assets/app_icon.png": "38dc2fe89bbd920a36933b2de8d418c3",
"assets/assets/wellbeing.png": "cf92223ae295ad853104c08f418754f7",
"assets/assets/T1_logo.png": "ea669a9b7052cefa9156fd2179af614e",
"assets/assets/T4_logo.png": "25d74266d9e15277eb68c84ec7414489",
"assets/assets/ar_map_marker_icon.png": "5c84b69a2774b51fadaab3facf601e12",
"assets/assets/web_bg_asset.png": "20e8c3ce9c10b8355ebdac680cd2d8e2",
"assets/assets/qr.png": "8888a1662e420443a14c40a225c438db",
"assets/assets/fonts/Quicksand-Medium.ttf": "7e2479fe3619b4b56dbfc0094ff23a3c",
"assets/assets/fonts/etriage-tags.ttf": "c890f09bab2f2d601e99bdf0f220d6f1",
"assets/assets/healthId.jpg": "81e4330881fe384b7f0f26239528f503",
"assets/assets/T2_logo.png": "76870cf51710cfdff382c8e7bb7a6cf1",
"assets/assets/T3_logo.png": "29fec0e14c17f53f042daeb19b98cb30",
"assets/assets/biometrics.png": "35b6b9cd2e50b9a06ea13a52022587b3",
"assets/healthId.jpg": "81e4330881fe384b7f0f26239528f503",
"assets/T2_logo.png": "76870cf51710cfdff382c8e7bb7a6cf1",
"assets/T3_logo.png": "29fec0e14c17f53f042daeb19b98cb30",
"assets/biometrics.png": "35b6b9cd2e50b9a06ea13a52022587b3"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
