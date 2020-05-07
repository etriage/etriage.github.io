'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.ico": "b2903008b60d935d07163a77267d6611",
"index.html": "483b50eb0bb8892478fdaa8c27e18941",
"/": "483b50eb0bb8892478fdaa8c27e18941",
"main.dart.js": "daad2618babd2577494c02757b90a274",
"assets/app_icon_transparent.png": "00a4f989b10d77c95a555a464c70f7aa",
"assets/first_responders.png": "574ddfeaf8f3886c741a321ac9c73321",
"assets/dashboard.png": "6ab29ce504f7c8cbb90f0ab90ce701c9",
"assets/mock_data/pending_requests.json": "2c82adc0647ca842c5d8dbcd5f9431ab",
"assets/progressive_apps.png": "25bbb26c678240de4bc63ab0099b6a0e",
"assets/ambulance.png": "c70d96f9b31969ae69d4cbf0bb4ff94d",
"assets/LICENSE": "c780e506da40637f412c05684ef7c81e",
"assets/app_icon.png": "38dc2fe89bbd920a36933b2de8d418c3",
"assets/wellbeing.png": "cf92223ae295ad853104c08f418754f7",
"assets/triage_tag.png": "ac2a78afb2da829adb2cf1a93bb9781f",
"assets/map_features.png": "c605a5b2a5386596772cd46c3579d7b6",
"assets/support_work.png": "615d83fc8b671bf3e73acae39a2448c5",
"assets/T1_logo.png": "ea669a9b7052cefa9156fd2179af614e",
"assets/AssetManifest.json": "9a63986778c0273860430d90b6d0be3a",
"assets/map_styles/light_map_style.json": "cede92049fbf4bcb6d3988827f1499f6",
"assets/map_styles/dark_map_style.json": "91baa72460637ca5cd3dc3864ff8fd62",
"assets/paul.png": "c6a55274f15cd086750518eeb7e66ef9",
"assets/T4_logo.png": "25d74266d9e15277eb68c84ec7414489",
"assets/FontManifest.json": "5b0153900e78eebda7d2e1c78d3c2261",
"assets/dhruvil.png": "61e82d798b77d60d47af7731a32a9204",
"assets/ar_map_marker_icon.png": "5c84b69a2774b51fadaab3facf601e12",
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
"assets/contact_us.png": "99ff958f57de6aa76155f7591b7a4400",
"assets/fonts/Quicksand-Bold.ttf": "410a26014ce7e25824ae18349d2c92d3",
"assets/fonts/Quicksand-Medium.ttf": "7e2479fe3619b4b56dbfc0094ff23a3c",
"assets/fonts/README": "46a8f645466d30063d4d0bbad726318d",
"assets/fonts/etriage-tags.ttf": "c890f09bab2f2d601e99bdf0f220d6f1",
"assets/fonts/Quicksand-Regular.ttf": "9a891411c3856f2db214f3507349a424",
"assets/fonts/Quicksand-SemiBold.ttf": "feb6fb672a260bc45a8bfb278e233772",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Quicksand-Light.ttf": "7dcc3e19fb99b72cf354f6caee2df104",
"assets/fonts/fa-regular-400.ttf": "db78b9359171f24936b16d84f63af378",
"assets/fonts/fa-brands-400.ttf": "13685372945d816a2b474fc082fd9aaa",
"assets/assets/app_icon_transparent.png": "00a4f989b10d77c95a555a464c70f7aa",
"assets/assets/first_responders.png": "574ddfeaf8f3886c741a321ac9c73321",
"assets/assets/dashboard.png": "6ab29ce504f7c8cbb90f0ab90ce701c9",
"assets/assets/progressive_apps.png": "25bbb26c678240de4bc63ab0099b6a0e",
"assets/assets/ambulance.png": "c70d96f9b31969ae69d4cbf0bb4ff94d",
"assets/assets/app_icon.png": "38dc2fe89bbd920a36933b2de8d418c3",
"assets/assets/wellbeing.png": "cf92223ae295ad853104c08f418754f7",
"assets/assets/triage_tag.png": "ac2a78afb2da829adb2cf1a93bb9781f",
"assets/assets/map_features.png": "c605a5b2a5386596772cd46c3579d7b6",
"assets/assets/support_work.png": "615d83fc8b671bf3e73acae39a2448c5",
"assets/assets/T1_logo.png": "ea669a9b7052cefa9156fd2179af614e",
"assets/assets/paul.png": "c6a55274f15cd086750518eeb7e66ef9",
"assets/assets/T4_logo.png": "25d74266d9e15277eb68c84ec7414489",
"assets/assets/dhruvil.png": "61e82d798b77d60d47af7731a32a9204",
"assets/assets/ar_map_marker_icon.png": "5c84b69a2774b51fadaab3facf601e12",
"assets/assets/web_bg_asset.png": "20e8c3ce9c10b8355ebdac680cd2d8e2",
"assets/assets/qr.png": "8888a1662e420443a14c40a225c438db",
"assets/assets/contact_us.png": "99ff958f57de6aa76155f7591b7a4400",
"assets/assets/fonts/Quicksand-Medium.ttf": "7e2479fe3619b4b56dbfc0094ff23a3c",
"assets/assets/fonts/etriage-tags.ttf": "c890f09bab2f2d601e99bdf0f220d6f1",
"assets/assets/fonts/fa-regular-400.ttf": "db78b9359171f24936b16d84f63af378",
"assets/assets/fonts/fa-brands-400.ttf": "13685372945d816a2b474fc082fd9aaa",
"assets/assets/healthId.jpg": "81e4330881fe384b7f0f26239528f503",
"assets/assets/T2_logo.png": "76870cf51710cfdff382c8e7bb7a6cf1",
"assets/assets/T3_logo.png": "29fec0e14c17f53f042daeb19b98cb30",
"assets/assets/advanced_tech.png": "a7994f812446174958cafbf68efc319a",
"assets/assets/biometrics.png": "35b6b9cd2e50b9a06ea13a52022587b3",
"assets/healthId.jpg": "81e4330881fe384b7f0f26239528f503",
"assets/T2_logo.png": "76870cf51710cfdff382c8e7bb7a6cf1",
"assets/T3_logo.png": "29fec0e14c17f53f042daeb19b98cb30",
"assets/advanced_tech.png": "a7994f812446174958cafbf68efc319a",
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
