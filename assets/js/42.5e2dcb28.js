(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{447:function(e,t,a){"use strict";a.r(t);var s=a(13),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"migration-from-0-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration-from-0-x","aria-hidden":"true"}},[e._v("#")]),e._v(" Migration from 0.x")]),e._v(" "),a("h2",{attrs:{id:"site-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#site-config","aria-hidden":"true"}},[e._v("#")]),e._v(" Site Config")]),e._v(" "),a("h3",{attrs:{id:"ga"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ga","aria-hidden":"true"}},[e._v("#")]),e._v(" ga "),a("Badge",{attrs:{text:"replaced"}})],1),e._v(" "),a("p",[e._v("GA has been separated into a standalone plugin "),a("RouterLink",{attrs:{to:"/plugin/official/plugin-google-analytics.html"}},[e._v("@vuepress/plugin-google-analytics")]),e._v(".")],1),e._v(" "),a("UpgradePath",{attrs:{title:""}},[a("ol",[a("li",[e._v("Install "),a("code",[e._v("@vuepress/plugin-google-analytics")]),e._v(":")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" -D @vuepress/plugin-google-analytics@next\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# OR npm install -D @vuepress/plugin-google-analytics@next")]),e._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Update "),a("code",[e._v("vuepress/config.js")]),e._v(":")])]),e._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[e._v("module.exports = {\n"),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[e._v("-  ga: 'UA-12345678-9'\n")]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[e._v("+  plugins: [\n+    ['@vuepress/google-analytics', {\n+      ga: 'UA-12345678-9'\n+    }]\n+ ]\n")]),e._v("}\n")])])])]),a("h3",{attrs:{id:"markdown-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-config","aria-hidden":"true"}},[e._v("#")]),e._v(" markdown.config "),a("Badge",{attrs:{text:"renamed"}})],1),e._v(" "),a("p",[e._v("Using "),a("code",[e._v("extendMarkdown")]),e._v("：。")]),e._v(" "),a("UpgradePath",{attrs:{title:""}},[a("p",[e._v("Update "),a("code",[e._v("vuepress/config.js")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[e._v("// vuepress/config.js\nmodule.exports = {\n"),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[e._v("-  markdown: {\n-    config(md) { /* ... */ }\n-  },\n")]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[e._v("+  extendMarkdown(md) { /* ... */ }\n")]),e._v("}\n")])])])]),a("h3",{attrs:{id:"serviceworker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serviceworker","aria-hidden":"true"}},[e._v("#")]),e._v(" serviceWorker "),a("Badge",{attrs:{text:"replaced"}})],1),e._v(" "),a("p",[e._v("Service Worker related features have been separated into a standalone plugin "),a("RouterLink",{attrs:{to:"/plugin/official/plugin-pwa.html"}},[e._v("@vuepress/plugin-pwa")]),e._v(".")],1),e._v(" "),a("UpgradePath",{attrs:{title:""}},[a("p",[e._v("See: "),a("RouterLink",{attrs:{to:"/plugin/official/plugin-pwa.html#migration-from-0-x"}},[e._v("@vuepress/plugin-pwa > Migration from 0.x")])],1)]),a("h2",{attrs:{id:"default-theme-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-theme-config","aria-hidden":"true"}},[e._v("#")]),e._v(" Default Theme Config")]),e._v(" "),a("h3",{attrs:{id:"vuepress-override-styl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-override-styl","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v(".vuepress/override.styl")]),e._v(" "),a("Badge",{attrs:{text:"replaced"}})],1),e._v(" "),a("p",[e._v("Replaced by "),a("code",[e._v(".vuepress/styles/palette.styl")]),e._v(".")]),e._v(" "),a("UpgradePath",{attrs:{title:""}},[a("p",[e._v("See: "),a("RouterLink",{attrs:{to:"/config/#palette-styl"}},[e._v("Config > palette.styl")])],1)]),a("h3",{attrs:{id:"vuepress-style-styl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-style-styl","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v(".vuepress/style.styl")]),e._v(" "),a("Badge",{attrs:{text:"replaced"}})],1),e._v(" "),a("p",[e._v("Replaced by "),a("code",[e._v(".vuepress/styles/index.styl")]),e._v(".")]),e._v(" "),a("UpgradePath",{attrs:{title:""}},[a("p",[e._v("See: "),a("RouterLink",{attrs:{to:"/config/#index-styl"}},[e._v("Config > index.styl")])],1)])],1)},[],!1,null,null,null);t.default=r.exports}}]);