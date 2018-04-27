importScripts('/worker-polyfill.js')
self.addEventListener('install', function(event) {
    console.log("Google Moogle worker installed")
    event.waitUntil(caches.open('mu').then(function(cache) {
        return cache.addAll([
            '/',
            '/index.html',
            '/assets/ushakov.png',
            '/assets/manifest_icons/web_hi_res_512.png',
            '/dist/build.js',
            'https://fonts.googleapis.com/icon?family=Material+Icons',
            'https://unpkg.com/material-components-web@0.20.0/dist/material-components-web.min.css',
            'https://mish.io/Ushakov/images/logo/Placeholder.png',
            'https://mish.io/Ushakov/images/icons/mubot.png',
          //'https://imgur.com/2WBewXv.png',
            'https://mish.io/Ushakov/images/icons/TMachine.png',
          //'https://www.ethode.com/contentAsset/image/e65ea977-f4b2-4cc2-8ffc-8a92127b999e/image/filter/Resize/resize_w/400',
            'https://lh3.googleusercontent.com/Gu6CWMrnD_ohDjsDDf8EFxL7yOMygEqzqHT8P_D4GWyRmiasu7f2fal1X5LufYsrzw=w256',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTghWYXueAQVPvV2AVLHbCI3Y6km5n7GBUNZmSsgNeU68UZxifLoA',
          //'https://zdnet4.cbsistatic.com/hub/i/2014/08/07/9010618d-34cf-11e4-9e6a-00505685119a/427b2b85b8a14a7abc2c3ad2024db2cc/zdnet-google-fit.png',
          //'https://console.dialogflow.com/api-client/assets/img/logo-short.png',
          //'https://imgur.com/pjNvoyJ.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/600px-VK.com-logo.svg.png',
            'https://pbs.twimg.com/profile_images/1250624875/tw-128-btg-v3_400x400.jpg',
            'https://mish.io/Ushakov/images/icons/octocat.png',
            'https://mish.io/Ushakov/images/icons/tap2.png',
            'https://pp.userapi.com/c639331/v639331097/3d771/YvGfr97mKeM.jpg',
            'https://pp.userapi.com/c841328/v841328051/2a591/sIRPCwN27tA.jpg',
            'https://pp.userapi.com/c840537/v840537090/115af/ZAO1jSSTeCI.jpg',
            'https://pp.userapi.com/c639521/v639521019/5c45f/bZP30OeNNnw.jpg',
            'https://pp.userapi.com/c840437/v840437590/15bfd/JKBGlOz6qQ4.jpg',
            'https://pp.userapi.com/c840132/v840132898/3b192/79qTNvmbvz8.jpg',
            'https://vignette1.wikia.nocookie.net/logopedia/images/f/f7/2000px-Google_2015_monochrome.svg.png/revision/latest?cb=20150901175304',
            'https://png.icons8.com/color/540/raspberry-pi-zero.png',
          //'https://stiller.co.il/wp-content/uploads/2016/04/Azure-Functions-Logo.png'
          //'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png',
          //'https://pngimg.com/uploads/ibm/ibm_PNG19648.png'
        ])
    }))
})

self.addEventListener('fetch', function(event) {
    console.log("CACHED", event.request.url)
    event.respondWith(caches.match(event.request).then(function(response) {
        return response || fetch(event.request)
    }))
})