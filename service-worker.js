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
    "revision": "3e1eb4fefe278d800089ec93285d87c3"
  },
  {
    "url": "api/cli.html",
    "revision": "a6456d4d62ac366510d81a3abc8959f5"
  },
  {
    "url": "api/node.html",
    "revision": "f4bb73ba240f4af3e0df34645774854e"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.71d0269a.css",
    "revision": "f0022d361f2365a4487c7fce46c29816"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.36684f23.js",
    "revision": "019bada4b31dc88964ea0e87a39ff9fd"
  },
  {
    "url": "assets/js/100.4a39ab61.js",
    "revision": "40f5d9c46bea79b3186c1e42d51eff0b"
  },
  {
    "url": "assets/js/101.0ff64109.js",
    "revision": "49adfa207d6ec32b7e93f45dd9b29d3b"
  },
  {
    "url": "assets/js/102.565eef76.js",
    "revision": "e9178bd483e5c99d0c7b7b448a70b1fa"
  },
  {
    "url": "assets/js/103.71b31fa3.js",
    "revision": "362224e871f67b8c8bb87bfea9e14916"
  },
  {
    "url": "assets/js/104.4e824e26.js",
    "revision": "e3399a6aeb50e9397abf867338285a77"
  },
  {
    "url": "assets/js/105.3bfeac97.js",
    "revision": "20b2d675f064ada1a68e5c210c7589bf"
  },
  {
    "url": "assets/js/106.1ee477a9.js",
    "revision": "84218bafbaf27aa4e1eb01f8dc3d9ef6"
  },
  {
    "url": "assets/js/107.1a8a7cc0.js",
    "revision": "7585560acda3ea6ae790b6839b4d1f9c"
  },
  {
    "url": "assets/js/108.32963272.js",
    "revision": "0e1578b0b7e3a245e6d27d44abeb8bef"
  },
  {
    "url": "assets/js/109.7d7db848.js",
    "revision": "7f060843da0ee6c88784aecea5da58af"
  },
  {
    "url": "assets/js/11.a58a8b0e.js",
    "revision": "9c20dad3fca679e98b38a8d17fa0d7e7"
  },
  {
    "url": "assets/js/12.e0bc8d78.js",
    "revision": "687f3645254f0b3ac18059b5e6e279bd"
  },
  {
    "url": "assets/js/13.3835cf47.js",
    "revision": "3492b32fd5b86670365a550f6748b861"
  },
  {
    "url": "assets/js/14.683e3441.js",
    "revision": "b371fdfabffd0578d37baf99c446691e"
  },
  {
    "url": "assets/js/15.1db74ee5.js",
    "revision": "c5d63811415be6ea07f3143051b76d2f"
  },
  {
    "url": "assets/js/16.cb1a8611.js",
    "revision": "92282909680ed855ec86056eb23b05aa"
  },
  {
    "url": "assets/js/17.b67dd6cb.js",
    "revision": "8da2e408a246935cab7ffe110ea66c6e"
  },
  {
    "url": "assets/js/18.29a58072.js",
    "revision": "a58349c777713e390a114d32994ee3c3"
  },
  {
    "url": "assets/js/19.4290d03c.js",
    "revision": "6f0e25e6b453d8f49118a59c063405a4"
  },
  {
    "url": "assets/js/20.9b063293.js",
    "revision": "ccca17581db984c38a8ff86f67b031f1"
  },
  {
    "url": "assets/js/21.88bfc18a.js",
    "revision": "efcff93c94e554ed6f82e9358c6e717c"
  },
  {
    "url": "assets/js/22.b321bdfd.js",
    "revision": "1aa91d016c93694ffaf8e5211885a421"
  },
  {
    "url": "assets/js/23.19725ad6.js",
    "revision": "5b3123028c16d35faab77dc0c380f553"
  },
  {
    "url": "assets/js/24.b43a4d16.js",
    "revision": "f8245142926df19413909d477e809734"
  },
  {
    "url": "assets/js/25.77f827f5.js",
    "revision": "a378384b272834d8fe9163ee8a8b4fda"
  },
  {
    "url": "assets/js/26.24ba39df.js",
    "revision": "ef5e3908f9fe06be733044ace953c14f"
  },
  {
    "url": "assets/js/27.63e7e130.js",
    "revision": "ec76b210de72f18bfc6741d50fb5cf5e"
  },
  {
    "url": "assets/js/28.68dfd25d.js",
    "revision": "e296fa6a2259e1dced82fb5823123e7a"
  },
  {
    "url": "assets/js/29.3ced794f.js",
    "revision": "86f7359df404567d1b1f7bdcfb839122"
  },
  {
    "url": "assets/js/30.de982de6.js",
    "revision": "01a83227c3cb100eea57fa57e1708d2c"
  },
  {
    "url": "assets/js/31.8222bdd6.js",
    "revision": "df70a8c7313077473553bc7cb316fe2a"
  },
  {
    "url": "assets/js/32.c82d9db9.js",
    "revision": "538e357abb65668d1043200ea6bc62d3"
  },
  {
    "url": "assets/js/33.c2b2d415.js",
    "revision": "1c8b8f69a0396cb2cb429b432b918830"
  },
  {
    "url": "assets/js/34.2341e986.js",
    "revision": "3ea92aede6ee054ac888d6793a5ea0b5"
  },
  {
    "url": "assets/js/35.34fb0cdf.js",
    "revision": "ec94f801fa6d565fb76407af431486fb"
  },
  {
    "url": "assets/js/36.abe93e1a.js",
    "revision": "2fabe8644ecec6196e56b341199c98d5"
  },
  {
    "url": "assets/js/37.969d8d13.js",
    "revision": "76a2593a7c3ee7cf0c57c74b8e1dee9f"
  },
  {
    "url": "assets/js/38.495d2767.js",
    "revision": "e32f33eb7d40db279130cc1e6eeb5329"
  },
  {
    "url": "assets/js/39.aee95206.js",
    "revision": "3a645bebe683b91d584f5a854e1bcd47"
  },
  {
    "url": "assets/js/40.4a5fc9bf.js",
    "revision": "e207aa649535e8b8cea50413c70dc28e"
  },
  {
    "url": "assets/js/41.40b586e7.js",
    "revision": "3ba136cb7033b7d533e28b9b9f0354fc"
  },
  {
    "url": "assets/js/42.5e2dcb28.js",
    "revision": "3424dbfccffcbde4ab61c17db1f5e972"
  },
  {
    "url": "assets/js/43.20253463.js",
    "revision": "25650f7eb34a6f0df6bfcdf7d9ff7c39"
  },
  {
    "url": "assets/js/44.21cd3f61.js",
    "revision": "0f53b80d689567357495b1b6ebb3e033"
  },
  {
    "url": "assets/js/45.5600005b.js",
    "revision": "caba59e20010b183e5a76be1abdb001b"
  },
  {
    "url": "assets/js/46.6ffdb63f.js",
    "revision": "5489e53c077e3e3d743cf47b9f081b9f"
  },
  {
    "url": "assets/js/47.9972bdca.js",
    "revision": "5846252e5b75160a7e96736a790b4ec9"
  },
  {
    "url": "assets/js/48.9ffa0316.js",
    "revision": "191abb9ddb7baca91d28a76fb1c6cb8a"
  },
  {
    "url": "assets/js/49.3f8d035d.js",
    "revision": "df9cbf3ac8de3e98da223870a731d682"
  },
  {
    "url": "assets/js/5.ace9db94.js",
    "revision": "4b930dbf4e72de348cc123bdac0f64ad"
  },
  {
    "url": "assets/js/50.a72590b0.js",
    "revision": "6dd5e9527fd2fd3654ec84351548cf3d"
  },
  {
    "url": "assets/js/51.7be74fee.js",
    "revision": "e8b0cae1f1866674849e67e1945585c2"
  },
  {
    "url": "assets/js/52.97df7260.js",
    "revision": "a20dc1b8d63929136c8d8b99beeef055"
  },
  {
    "url": "assets/js/53.73ad0e81.js",
    "revision": "442897e2ba74cf2281f55702f5af0d48"
  },
  {
    "url": "assets/js/54.14bb3e11.js",
    "revision": "30d2019e065728cbc8ff5c146b2440e9"
  },
  {
    "url": "assets/js/55.389b3492.js",
    "revision": "162d40085e5afc5c98d45564799358fe"
  },
  {
    "url": "assets/js/56.a1709e36.js",
    "revision": "675ef17f7199acd4301266bec675f82d"
  },
  {
    "url": "assets/js/57.9e4cf6bd.js",
    "revision": "02e096e849951ccdb4e35627b584b1d5"
  },
  {
    "url": "assets/js/58.155432a8.js",
    "revision": "066fc6691cfcf4470becaebdb1c04ee6"
  },
  {
    "url": "assets/js/59.f0768961.js",
    "revision": "afc31ac80ff0c7d7a7f8c35c72624302"
  },
  {
    "url": "assets/js/6.f98df95f.js",
    "revision": "dbe08c5c8d1aeb35f50d9ffac8a1c1f3"
  },
  {
    "url": "assets/js/60.332638b2.js",
    "revision": "1636b32d2480192fc3ff3465db6a5689"
  },
  {
    "url": "assets/js/61.6ca957e4.js",
    "revision": "8884b143e1fca48e3ebb32c2522e56ab"
  },
  {
    "url": "assets/js/62.a20b702c.js",
    "revision": "19b7318d80f8e9de72f23131fc30f3a9"
  },
  {
    "url": "assets/js/63.30b4a2d2.js",
    "revision": "00de258f5a1c4592057eb6e538bed922"
  },
  {
    "url": "assets/js/64.08773ec3.js",
    "revision": "6d62bd17f089f3452796f6dfb4030ab9"
  },
  {
    "url": "assets/js/65.8f70c635.js",
    "revision": "af65669f11adf0d953652e446df62acb"
  },
  {
    "url": "assets/js/66.81720abc.js",
    "revision": "e7164565e6e86bef294d129e31ad45ac"
  },
  {
    "url": "assets/js/67.758965ea.js",
    "revision": "edf047a5c7b4ae36c353c395aad88c59"
  },
  {
    "url": "assets/js/68.27b7a017.js",
    "revision": "10d8606715b97f6daa12a9e02921908d"
  },
  {
    "url": "assets/js/69.d18141eb.js",
    "revision": "3ea9c6cc6f51208803332a0edeb27497"
  },
  {
    "url": "assets/js/7.9e455439.js",
    "revision": "c502c1955c480e8ee145fc7c71083850"
  },
  {
    "url": "assets/js/70.9c025896.js",
    "revision": "dd2a87b8714ec04f78126e5453188fdf"
  },
  {
    "url": "assets/js/71.6ab8e9f3.js",
    "revision": "18287b0036324362a65e63810823c669"
  },
  {
    "url": "assets/js/72.9d51781a.js",
    "revision": "f459ad899787da316788bca7f29de29d"
  },
  {
    "url": "assets/js/73.6b2246e1.js",
    "revision": "b1ab0480dd676f8704c07440c200a908"
  },
  {
    "url": "assets/js/74.65728daa.js",
    "revision": "e757fc2adf717c53f11dac3adb83b800"
  },
  {
    "url": "assets/js/75.667e7bd2.js",
    "revision": "48f0d8e7c9a16cab08d5b80358a63887"
  },
  {
    "url": "assets/js/76.44a7f287.js",
    "revision": "6ea3a1282204e32246069cc2bb20ea43"
  },
  {
    "url": "assets/js/77.65b9524d.js",
    "revision": "a1324dd6b04b43b34959d5884811966d"
  },
  {
    "url": "assets/js/78.08e00f83.js",
    "revision": "bae2f136641e13dc7ac5c512cb73afb4"
  },
  {
    "url": "assets/js/79.83f401c5.js",
    "revision": "8e508dd6163e583aa957c51d064c39b6"
  },
  {
    "url": "assets/js/8.22281f75.js",
    "revision": "fc3a09bea4fe64788f10ada50a3c81f7"
  },
  {
    "url": "assets/js/80.2d205a33.js",
    "revision": "73a6fc8772ed49e721339e015c1441cb"
  },
  {
    "url": "assets/js/81.05c92204.js",
    "revision": "ada2eea780131fdc4fdd124f3bb4495f"
  },
  {
    "url": "assets/js/82.28d2c427.js",
    "revision": "1a5303d1e3628d748401000227b22ff6"
  },
  {
    "url": "assets/js/83.d5425d23.js",
    "revision": "822733a150d0d0f5ef76623508580def"
  },
  {
    "url": "assets/js/84.141e8891.js",
    "revision": "08e81c1a5f64f5202464447e3329ff06"
  },
  {
    "url": "assets/js/85.6af8722f.js",
    "revision": "6452fff369ab2d700431802ff06623e7"
  },
  {
    "url": "assets/js/86.cc284c4f.js",
    "revision": "c1fe55598fffb403eb72a364332503ad"
  },
  {
    "url": "assets/js/87.f150444f.js",
    "revision": "371f6ef108f2143adb0961bc97a22def"
  },
  {
    "url": "assets/js/88.57bb9431.js",
    "revision": "2ddfd281368b1b5943ec54ad4496153f"
  },
  {
    "url": "assets/js/89.9cf0eb56.js",
    "revision": "a976a7278e1c81ebb1c055d5610c100b"
  },
  {
    "url": "assets/js/9.9ad96589.js",
    "revision": "f6d0aca4b91728dd90c5d6d72925f0db"
  },
  {
    "url": "assets/js/90.9ac1ee57.js",
    "revision": "832f98c9f94c2c49e1b25d7d1e27e233"
  },
  {
    "url": "assets/js/91.0eda0181.js",
    "revision": "9ef5fca8bc6e6c72f97087ef6be5ae06"
  },
  {
    "url": "assets/js/92.cd31a174.js",
    "revision": "7030546852d9c59fce494fcbe2744d27"
  },
  {
    "url": "assets/js/93.5de16c17.js",
    "revision": "4d3752e4cfc3a4a484fff4faa52e3145"
  },
  {
    "url": "assets/js/94.64c834fc.js",
    "revision": "cd2a01a1ed8fbefae89cf189a7fb99b7"
  },
  {
    "url": "assets/js/95.4c80faa4.js",
    "revision": "9627e6dc340dd538b077ef8a9d86b0d6"
  },
  {
    "url": "assets/js/96.21272d12.js",
    "revision": "ccd195266c0c52c49a3b34c28df9f622"
  },
  {
    "url": "assets/js/97.4dc856e4.js",
    "revision": "e16126cd7d29e80068e86ce89be4a7b9"
  },
  {
    "url": "assets/js/98.b5036126.js",
    "revision": "274b1a04656dff092f5040614d81aef7"
  },
  {
    "url": "assets/js/99.75558075.js",
    "revision": "23d91eb6cf1bd3c0caeb734cc7e5003a"
  },
  {
    "url": "assets/js/app.a9eb0318.js",
    "revision": "263e72f91561df3fcec916f3bc3d5b9b"
  },
  {
    "url": "assets/js/vendors~docsearch.8144867a.js",
    "revision": "33b0c6e53afd1d3d59939f6ae002428e"
  },
  {
    "url": "assets/js/vendors~flowchart.8ff1dd2a.js",
    "revision": "53d52c65af21748cd5f473c7a909bb6a"
  },
  {
    "url": "assets/js/vendors~notification.3a6aca70.js",
    "revision": "980db82743547472d931c77f823f6742"
  },
  {
    "url": "config/index.html",
    "revision": "1272f28e31f25014dac5c657534117a9"
  },
  {
    "url": "faq/index.html",
    "revision": "b27a3a0e54ceaac81f2604afcc3cd5e2"
  },
  {
    "url": "guide/assets.html",
    "revision": "27056c89226e2c4ec90ca6036e070b7c"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "4dae41a0281a0b49e8ed46f80678a32d"
  },
  {
    "url": "guide/deploy.html",
    "revision": "7001ae65427acc3a626645f73c634d23"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "c832b33e64d456ac4f56b1cf4239386a"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "c0b2237f5bc688702b32033b944f4c66"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "956265010a974061d0ca30a6310a2b7a"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "9224b232e66d476d2ac696ff1ba74a10"
  },
  {
    "url": "guide/i18n.html",
    "revision": "6ff6054816e07354bfa3a93d334ce9a5"
  },
  {
    "url": "guide/index.html",
    "revision": "810614827be2768f71c737c5d5c299fe"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "bb78c5a1f47d5430b61acb0d151c0aaf"
  },
  {
    "url": "guide/markdown.html",
    "revision": "02f1f81905ff140d85003a9e8d607e51"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "c221f10d480023e3feca4bf1c8879565"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "2ae83be7cf86eb731c0a8065bcd08953"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "b6680aeb1f770dd9cbee653d553ca047"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "777bb40f411192b72916c9370d6e14e6"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "16b61eea18f125feaa47f2d227ebd244"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "6387a6576185e88e889cc193d3c6c8d4"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "4f08f291dfcb6613cef4502cd081e9c1"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "acbb2cf4a936778d75c5fd767eebe73f"
  },
  {
    "url": "plugin/index.html",
    "revision": "e98384b9d4a392bf7aba2f940944733f"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "b74dbe0fc388ad1e3386d8cf1560cf8d"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "b1bc0dfc79d1f7ef778fe4becd99545a"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "35abc955b66d163aead36a886ba8bf45"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "b5f4b61c837a4abb1776ccf9c6ecfa8a"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "f3601df669c1c3b1558917b014fadf0f"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "f0b80d921cf406bb9f1d33fb4b8102ee"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "47005a750078efb8690a2be677c6c8ef"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "c9b26edd2045e86c26a15ee57829a5b2"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "9580671eed1f192971cd0fd841a711b5"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "ac3246efbd53e14a07e18fc15581fc54"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "a5d5eead383978882561d05573d6240a"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "46f575cea62aaafd07f4bd3b82591bd9"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "a119319cb8cd7e690dcfe0578dac4247"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "200e374e149d917b57fe65a5a6d5ee53"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "31eec4138dc83e5d21c830427366c431"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "a222eebf9a11a43637eaf9552ddde3c3"
  },
  {
    "url": "theme/index.html",
    "revision": "2456eee4c0ce1b483fc905b03788b5a1"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "61e9e2edbf71b0074453ae53ecc5f1df"
  },
  {
    "url": "theme/option-api.html",
    "revision": "609e59793bf4551f6226825a5dc5f556"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "60af8ffd263c9527193e086e3defaf87"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "90de410ac43ba8222cf6911becd1ae2a"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "4d264d109c94869f0c22cdc76a0c4d10"
  },
  {
    "url": "zh/api/node.html",
    "revision": "53d1761296fbbcb16486a2f09008fe70"
  },
  {
    "url": "zh/config/index.html",
    "revision": "478701313bb83bd43d4bf10bd8b3d13e"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "d5ce0138bd1d6012130063ce24d9f83b"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "a59296c96c1a657511c954ec23d73120"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "14844ee7eaad73cd942fcc6d82574ec5"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "675980cbadacc36b81ad5ddf5dea0b1b"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "3d993f934d71a3315b67dd34fdd2850a"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "f660df9948967795949883e3c6f3a19c"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "1332311bcd4c8785e47c79102052d1b4"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "7e1a96112c7c4045af57879ec3f5f9e3"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "255c5805b4e5435a9341e465a978bc7a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "b5e8827d7bffa78bfc9ef2cbafa8ef02"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "7c4d0a505efe7c79c6e0326a76273d90"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "75690c8a9045950e97be081ff99b9f65"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "1bd570f575cb8ee7c78018b49683a239"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "3ef9aa92ed201beb432155a41cd2efe7"
  },
  {
    "url": "zh/index.html",
    "revision": "d17a53d839aef1b068d77a75e131ecca"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "04975bd0d412f1d191ce93c9839e9790"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "40c4dd6536f5f2aad05b0954ec01bb5f"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "bff292e4c53a286d1022fe79cc5c78fe"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "6b508d4ea0073f5f983aa2b55865bdd0"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "5a2eb0f7849f6aa8a8bd33c30ebcc5ec"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "31797aa846e50555d986b360557251b2"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "d0559e7d272926daa72a3a77f86bc0e4"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "34e7e21adcadd4ced8faef8552617927"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "491b36f933bef2354c7556fa3dd3189d"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "29321ef06df42aeefee2745043f678b7"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "cd2054d0ccfac1ceedcd623ce78875d5"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "094459e2c764b7097a2f72c4082cc263"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "4ac3ce78bdbc9b5ceb126018e113b712"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "8f5557d5f3f0f38497dc393f089de2c8"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "de081dea5f5c696fcee45ef26c66f289"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "599f14108343104b96ada855a2018591"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "18f7a6cdf4b8acffa7978297f1d550ac"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "468580a02664412fd2ffc8265ee62d4d"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "ef46a40be84af40359dd3cb2b108d0fd"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "bc965a01ccd9da3100840ae3c20d35d5"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "8782b1af862a94d0054bbc791a097aa6"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "591eec1fb42dca8e84ebc2a58f27c038"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "39fdf58e6ecdeca3bdc9acc3d78c5f81"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "460c186b538d5eadfd35cced2aff83f6"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "589067b35bb89fd990f43522ab08577e"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "a3b5851c880fe136dd4b658d0a9ef7cf"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "57a2b42e2e1ebccad90aedcf07db3ca0"
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
