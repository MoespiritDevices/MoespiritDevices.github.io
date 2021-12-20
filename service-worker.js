/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2de7baf50f598dd10d6ea0b0aaf5e3b1"
  },
  {
    "url": "assets/css/0.styles.d7499c4e.css",
    "revision": "18dfb4ad268a19504fcf568766bf6272"
  },
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "5383ede0b12af579e975d1c0649d1ded"
  },
  {
    "url": "assets/icons/android-chrome-512x512.png",
    "revision": "bae279b6cbeb43167a711d94fff114cb"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "6b0ebce5c760ce5f358f0191cafd11d8"
  },
  {
    "url": "assets/icons/mstile.png",
    "revision": "17f79aab67e8096316870381772f5cec"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "ed1e44b0560037fa5fe86a0d18e0cad4"
  },
  {
    "url": "assets/image/logo.png",
    "revision": "aae71280c0a494fbbfcb22a094eb0053"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2fb68ef9.js",
    "revision": "5d55e1fa08858e49f04f39694f6e3edc"
  },
  {
    "url": "assets/js/11.341957da.js",
    "revision": "5daff83fadb47151e42f24effd61c3c4"
  },
  {
    "url": "assets/js/12.06fefdb1.js",
    "revision": "b6f6473546498992c3ff6c1c9db38616"
  },
  {
    "url": "assets/js/13.bba1dc83.js",
    "revision": "cd1cfe48107fafab22f89fead662499f"
  },
  {
    "url": "assets/js/14.ab50a25e.js",
    "revision": "dc22cd61dc0df8d6765d9a1054a5532e"
  },
  {
    "url": "assets/js/2.7b9c6b21.js",
    "revision": "ff26138de76874fb8efce489b4db8153"
  },
  {
    "url": "assets/js/3.cd781d20.js",
    "revision": "b08ef1aa6ceffc64c37669e3234f3742"
  },
  {
    "url": "assets/js/4.5e6e9dfa.js",
    "revision": "d73e41231c2ba89ccf5e6a1f856588d0"
  },
  {
    "url": "assets/js/5.c3cf5528.js",
    "revision": "6dfd17ecf73622bee57652a53c92b345"
  },
  {
    "url": "assets/js/6.c929b84b.js",
    "revision": "61fb259d01c81174b2f28a04b2fd3b4c"
  },
  {
    "url": "assets/js/7.e88a7dd1.js",
    "revision": "2e6958868993fd73e7e780dc906e053b"
  },
  {
    "url": "assets/js/8.d606a4b9.js",
    "revision": "fc868170e5ddc571a71e4637480e0487"
  },
  {
    "url": "assets/js/9.a00dea7f.js",
    "revision": "852537c49ff1285ecf40b5654be48eab"
  },
  {
    "url": "assets/js/app.331dbd2c.js",
    "revision": "ceba46bafba939fb67ad8a47897efe5d"
  },
  {
    "url": "de-DE/docs/index.html",
    "revision": "1be23a430a668978e2b79c5e6f6b35c4"
  },
  {
    "url": "de-DE/index.html",
    "revision": "688034005b5609e3695486fbd9e8842f"
  },
  {
    "url": "en-US/docs/index.html",
    "revision": "b3052327bb2d10d772ed1a0748cdfbb5"
  },
  {
    "url": "en-US/index.html",
    "revision": "38e736eb60be6ae092acbe1947416c87"
  },
  {
    "url": "index.html",
    "revision": "2a5ad45200fde8219f24ae3036439818"
  },
  {
    "url": "zh-Hans/docs/index.html",
    "revision": "adab330b56b6c9dec1dd7fceae1f4cdb"
  },
  {
    "url": "zh-Hans/index.html",
    "revision": "7689349c7ecb22ab8760db623c584908"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
