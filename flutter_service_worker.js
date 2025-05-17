'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a00e9d27a44d66457e559eff47793720",
".git/config": "c03328742939aa4dba8c3fa7241f47e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d9b7c496f3fdfab0b41943f53b660382",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f0958655d4fc8612756392addeb4f697",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "866b0148278464634f30b8e44b89c626",
".git/logs/refs/heads/main": "e1a1e3ca477a64a622d73d0f677f6164",
".git/logs/refs/remotes/origin/main": "8ff46f638b69797f2a2b443889825dd2",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/0f/bc049444747664c25ec09499c119fecbd0a2af": "c58ea4d25ff46c973ea71556c541066f",
".git/objects/17/adf4ca16cf2e4a5673ecd641869f52f44c658f": "e39813421da5d84b49258603e0000ee8",
".git/objects/17/eaa388ce5e414dcb0079c2f454385fd6ecdfcc": "c49f38d214ac0598f99bdb9c303b4c28",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/cac7a76f562c92b212844a36435fac97e95d11": "fe21b4b3f04e37a3fb9510355ea558ea",
".git/objects/20/fb5d5724fc0b7e899419d784f81f8bc2c42e4e": "f1940af86f66fb0da1dcb2a880dd8fec",
".git/objects/21/5037cce2bc7e7ad37b6120abd94de4d32c42ca": "8a1751da87292f63a7fcbf909877f1c6",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/68eb6b067894c057c27c1bff218a3027032d2d": "6501cf04dcae4c13d05715971b8c2930",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/cd63720b2fe0d98cfcea9b68a1f1678f20b035": "1b01eda932b7b5a19e0e237942d89bcc",
".git/objects/29/7822963c5dc3f2e2567c2cf8fdb1bd216d6c30": "5046d55e297530807dc07868109d1fba",
".git/objects/29/ae36dc2d76d7b8e7e94fde2c7800c39cc7c471": "dc76c0405b5dece52b28c51714d57c6d",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/2c/7d18706782662a2ee4b3de19eb822b0dbbd146": "0aeb631b697955823db25827fbfb4269",
".git/objects/2d/a5288c9e088e2b711c9cae8694275a086fea5d": "9ac363a04d2c2b3162056b0540df24db",
".git/objects/2f/4c7842ddeaec79bd6ee2d62ffc1369fdcfcb5d": "353f1a46439b755369fe0a0c07e8029c",
".git/objects/3a/10b5cd3b6320b59230c061563c4a82b0bfa555": "4f57e4150158f7013ac71fa2594f828c",
".git/objects/3c/19f18ed2933e8395781a80776a280af29031b7": "4e746931deee80b4a33a0be4916070a8",
".git/objects/3f/c69b53706d9562fa04326d8cbcde53fbfcfe06": "29dc2f92f39b6922aa3daf935f338e98",
".git/objects/47/28a9ae87db255a1e6d429fbb792c3cb8e35387": "13bf3117dd4747f3b3d13aa235e73fb7",
".git/objects/4a/73b42f01f203c51423a1652d4e1a79bf1acb05": "def752a963e0e0d7dcae7fa16dd24140",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/a4ed37d58a755ba2549b64fb0c27b5a83228f6": "3c7fa965cd8f06b754d43439cbfd6e90",
".git/objects/5a/83febebb1b11ca599caab5dad9739d8aabf037": "2adf8f7916d5a01a04fab425c258ae3e",
".git/objects/5c/a24c64f39b3492bd9f5c4c106a201e584d69db": "4630034d912c2e282226fa65beb2b300",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/68/5817a6aaf06b4aa45d4665020798c8b9ef58a9": "3daa7e0bf5ad86a50bfb7832e0b70dc5",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/a5a70f755302ebe7e56db1bd3e46e235843a7b": "167990ec1fac77813841909a5b4e2911",
".git/objects/6e/bf972545fd9b8fe2ad60ac48bf3c026ea1ebb9": "d03237b0382065b90b926c267fa08a90",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/77/3940fbf5b97a091aa9d379311712817a42096b": "3d1a1b80c0ace21c8a772f309c3bd327",
".git/objects/7c/90171c2ab0527baf3650e5cb8f3f50a6767c8d": "b0c659f576e8eb8067e9636b4f518af3",
".git/objects/7f/15bc6ec7a186713942954df0a1c75f242b28a9": "b78eeac3d2e71ead43bb9e6aeee2cc3c",
".git/objects/82/56529ed2d192791ef0078b5ec0c544a457c3cb": "8378b6c3efc51ce252d12297ecd0db5e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/48c1dce7bc0bbfff12e1c90f020c717644a60d": "9a35c4139763e6ddefbcf339e6a8862b",
".git/objects/8a/5fa9ea0cd9ea8e7b77cc02de1a42f353030daf": "0dd22052f2324cbf3d33779fb6e92d48",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/97/83c9b0cf2f93e058ffbf61be415f8ff54ad977": "fc08f25aed627f9f8384e3d86e8cc7f1",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9c/30f36fe17f99213a9f6d46a148c1f346f27c4f": "e2e0baff4c7fa748ae1f3ab6f73b5444",
".git/objects/9c/36138528e72438f8e1f7d1a1f4bdd42cd00646": "7a38f93e5706acaf0573396642ad44bb",
".git/objects/9d/de72ff960973b9cffd8886d10a530ff38f5713": "ec86b3771a5b8e5fe674ea0642889c89",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a2/05c76c82ae6df0b4f5ab3d36cf5491fadcf507": "bdd9d4eb323803c61acd17d729599d96",
".git/objects/a4/82728cecc8eebbc03082426880c8b4071fdc88": "a8d16be1331360ca6a3183e49d41d448",
".git/objects/a4/eab3d04bae8a07ff81399133d752d0f94a1ed4": "76c27684dc291e31981bb3568a64c562",
".git/objects/a5/2a58521b4cf3fec7ac838b5cb129d9976fcc59": "fa5737e2ce596a2747bd585104554868",
".git/objects/a5/58e58906ed3bcf29128bb58a4bcfe31cf2d034": "f97e5f46a97913f89eff21c1e7da50ff",
".git/objects/a6/ccebcbe984d85199e23c85d367d2db6ba76b5a": "36c0f409cb23696563934094eb474089",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/ab/72faaec1094ee781f8b2fb47d3b270ce526f1a": "95e25bd437fbb02b7445627be3888d70",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/cfb38f1304735965ddd422865bff72fdf541fc": "13a4795529277294d785a2faab1d7f7f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/7e47f92c4582c43be4eb521382205a64d10055": "5dd178fb1c1b5f8d520dc3a6594d429d",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/2d8203b74b6bece6198533b1dec5e5f1a2d82f": "8bb72ffcb1280bcc091f26fcb9cb84fa",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/be/25641b2b80aa2ec33a375321318a68d095d986": "37031ff6510f92762dd9452a3191c243",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/cbfb6d74340069c1d915ea1615f263e5bc1ccc": "f261fec320fbdc942b6ead41e0b866ff",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/84fed6067a2f7f0e2fbcb9a8a90ed2246454ff": "1181acea0a065a6d0abb65d29a7e1930",
".git/objects/c8/c5dbb776f0adf710d594765ca8701978c16947": "cb107ad6fbf44c9437b429608a50daf0",
".git/objects/cb/ca845b7bd48810997f9eb23fcda708a512162b": "21ff1f886f95a235326543009b02f9a2",
".git/objects/cd/eeffae10ba52358fea969f4b3f68fa6ce2c3cb": "3df4ef232b7c303f45b099d698a9739e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/df4c2e2aba6ab05ca2b7435901713839d8ee5b": "8cf797f13e64ade1159c2520711820d6",
".git/objects/de/b7e0b7340daf42624bd586ce5086a33c4bf7e3": "6406eddccc30a3527c4c82d60ce303b0",
".git/objects/de/bf36709ed61a0b0e478462c09f1d73e6e47acf": "9bbf56ee154c68b22b3f89dccdc17a99",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e1/a09b822329a05c95ae71d0a2cca87490a55b1f": "28f15aa1eb6a9d388f64fb911b00bdb6",
".git/objects/e1/f96ec8f8634887e9f2ff6f7683c3d9b3e986b5": "e4e8f4fca539d3f78b47d8d87eb60e8e",
".git/objects/e8/53005c150c1303e76f855f4bbd463808df21ee": "e1eedf53960d3c60ed0d9b55b1e7e9ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f1/4ecb53b99ed95981f2e3546d56fdcaa2a75377": "36adb2d6434b2d3aa71265c7fa5e4138",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/4c60a124856870c6ca7e56e0ce9f3f1c65d9ba": "4a693feb29ad57a3f25365a32609e890",
".git/objects/f6/1ff7f70156a20b0273913bf19f58cee90844e5": "1c0bfe227db735bfadf833c7968ea775",
".git/objects/f6/3dfb1bdfd9e149f26bed678d57b51dda7a66a6": "1256ca79142a0a2ce9f24005f7cf447b",
".git/objects/f7/e8f4776e94e0abfddf8e11fc383a2929e2e8bc": "0f325f0321b69af1c79e5c3858b3ab8d",
".git/objects/f8/a260765409209cfd9323171af0511881196f8a": "1c556ee995584c7048aea72d60ad8a64",
".git/objects/fb/377aa45d7d55cc2802c6117cde1cdd4f2e469b": "28909ac0a50ea9488d27867f5f1e6126",
".git/objects/fb/6919ded84713db23e58d8c92a1ebcd6856f2e0": "a0da0c1ac78d3cd173378df4951e5f05",
".git/objects/fc/60ebb78090c3fcdbae5a6036361d2933570d1a": "e52593efc6bcef51f18521f935568c14",
".git/ORIG_HEAD": "0f62bde7693edf12a93b7ca623b8a087",
".git/refs/heads/main": "49b5be2572fc14b2f859b9b1e8ffaa65",
".git/refs/remotes/origin/main": "5c5f7306d1d4afc332753fbefe7bbd7a",
"assets/AssetManifest.bin": "c9b3f647312f6ddbec002c7897ad7eaa",
"assets/AssetManifest.bin.json": "d03b1bee3252506be339fc3ce5d838d4",
"assets/AssetManifest.json": "28bfae237dc2239d4987a6f04442883e",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/menu_brand.svg": "10ebe8271fcc70c5bbcc17f49025a729",
"assets/assets/icons/menu_category.svg": "085208c963808fa6aa8cf6ec3bd1e605",
"assets/assets/icons/menu_chat.svg": "40f5799752e7c62fc49252dd9705f0f0",
"assets/assets/icons/menu_coupon.svg": "1c839a884882987dbdedc38c1367cd57",
"assets/assets/icons/menu_dashboard.svg": "ce203c22937b5e3814c042e84e6fa4b1",
"assets/assets/icons/menu_product.svg": "aa6d22509815dd86b2fe99b33fbf69a5",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/user.svg": "3c183c76ce632678a641e35a2bb82369",
"assets/assets/images/cod-payment.png": "9a7c5249d54a6449cdd768230baedd00",
"assets/assets/images/login.png": "6ed8d63ebd3d2e0a2acf6552b7d1d3ba",
"assets/assets/images/momo-logo.png": "9f02965d766d5347e1012f400fa16795",
"assets/assets/images/register.png": "e85c6a505bc1320251e0a9f4c0978926",
"assets/assets/images/reset_password.png": "14bf83be113b9394117471ba59a0ed7a",
"assets/assets/images/tech_gear_logo.png": "6b2422f25b230196ac4253d1d064ddfe",
"assets/assets/images/welcome.jpg": "fc7bd510820fb19b627a3e894447a67a",
"assets/FontManifest.json": "b18bd155469276151415d028b25c6d60",
"assets/fonts/MaterialIcons-Regular.otf": "db8ae851ae2f919eba2fecf8f0955092",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/NOTICES": "64089e7cf9f77fa7267b1e81b7b9f997",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "2f3ef19d157e73c2422c9caabcbbd6ab",
"index.html": "a22789489c3cbd32207efb652f245eef",
"/": "a22789489c3cbd32207efb652f245eef",
"main.dart.js": "a9dbde8599c92fb3d4f9efaa0bf1d6ed",
"manifest.json": "0fa6c7f9d3ebf4f8124278995a047bcd",
"version.json": "f53367d221871160ac22a22ff77d11c6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
