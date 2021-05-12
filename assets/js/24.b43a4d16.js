(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{430:function(t,a,e){"use strict";e.r(a);var s=e(13),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"node-js-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Node.js API")]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createApp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" build"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" eject "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),e("h3",{attrs:{id:"createapp-options-promise-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createapp-options-promise-app","aria-hidden":"true"}},[t._v("#")]),t._v(" createApp([options]): Promise<App>")]),t._v(" "),e("p",[t._v("Create a VuePress application.")]),t._v(" "),e("h4",{attrs:{id:"app-prototype-process-promise-void-never"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-prototype-process-promise-void-never","aria-hidden":"true"}},[t._v("#")]),t._v(" App.prototype.process: () => Promise<void> | never")]),t._v(" "),e("p",[t._v("An asynchronous method used to prepare the context of the current app, and which contains loading pages and plugins, apply plugins, etc.")]),t._v(" "),e("h4",{attrs:{id:"app-prototype-dev-promise-app-never"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-prototype-dev-promise-app-never","aria-hidden":"true"}},[t._v("#")]),t._v(" App.prototype.dev: () => Promise<App> | never")]),t._v(" "),e("p",[t._v("Launch a dev process with current app context.")]),t._v(" "),e("h4",{attrs:{id:"app-prototype-build-promise-app-never"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-prototype-build-promise-app-never","aria-hidden":"true"}},[t._v("#")]),t._v(" App.prototype.build: () => Promise<App> | never")]),t._v(" "),e("p",[t._v("Launch a build process with current app context.")]),t._v(" "),e("h3",{attrs:{id:"dev-options-promise-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dev-options-promise-app","aria-hidden":"true"}},[t._v("#")]),t._v(" dev([options]): Promise<App>")]),t._v(" "),e("p",[t._v("Start a development server, actually it’s implemented by "),e("code",[t._v("createApp")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dev")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dev")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"build-options-promise-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-options-promise-app","aria-hidden":"true"}},[t._v("#")]),t._v(" build([options]): Promise<App>")]),t._v(" "),e("p",[t._v("Build your source files as a static site, actually it’s implemented by "),e("code",[t._v("createApp")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"eject-targetdir-promise-void"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eject-targetdir-promise-void","aria-hidden":"true"}},[t._v("#")]),t._v(" eject(targetDir): Promise<void>")]),t._v(" "),e("p",[t._v("Copy the default theme into "),e("code",[t._v("{targetDir}/.vuepress/theme")]),t._v(" for customization.")]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("h3",{attrs:{id:"sourcedir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sourcedir","aria-hidden":"true"}},[t._v("#")]),t._v(" sourceDir")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Required: "),e("code",[t._v("true")])])]),t._v(" "),e("p",[t._v("Specify the source directory of your VuePress site.")]),t._v(" "),e("h3",{attrs:{id:"theme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#theme","aria-hidden":"true"}},[t._v("#")]),t._v(" theme")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Required: "),e("code",[t._v("false")])])]),t._v(" "),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/config/#theme"}},[t._v("theme")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[t._v("#")]),t._v(" plugins")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("array")])]),t._v(" "),e("li",[t._v("Required: "),e("code",[t._v("false")])])]),t._v(" "),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/config/#plugins"}},[t._v("plugins")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"temp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#temp","aria-hidden":"true"}},[t._v("#")]),t._v(" temp")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Required: "),e("code",[t._v("false")])])]),t._v(" "),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/config/#temp"}},[t._v("temp")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"dest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dest","aria-hidden":"true"}},[t._v("#")]),t._v(" dest")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Required: "),e("code",[t._v("false")])])]),t._v(" "),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/config/#dest"}},[t._v("dest")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"siteconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#siteconfig","aria-hidden":"true"}},[t._v("#")]),t._v(" siteConfig")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("object")])]),t._v(" "),e("li",[t._v("Required: "),e("code",[t._v("{}")])])]),t._v(" "),e("p",[t._v("It’s useful when you’re writing tests and don’t want to depend on actual config file, for all options please head "),e("RouterLink",{attrs:{to:"/config/"}},[t._v("siteConfig")]),t._v(".")],1)])},[],!1,null,null,null);a.default=r.exports}}]);