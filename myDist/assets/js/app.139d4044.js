(function(e){function n(n){for(var o,r,c=n[0],i=n[1],s=n[2],l=0,d=[];l<c.length;l++)r=c[l],a[r]&&d.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(n);while(d.length)d.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],o=!0,r=1;r<t.length;r++){var c=t[r];0!==a[c]&&(o=!1)}o&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},r={app:0},a={app:0},u=[];function c(e){return i.p+"assets/js/"+({}[e]||e)+"."+{"chunk-2d0bacb6":"3ca87edf","chunk-2d0bce03":"02c0f7c1","chunk-2d2086b7":"7be884a8","chunk-2d22d746":"111d987d","chunk-3292e61d":"03284c1a","chunk-4be7a73e":"250eb032","chunk-6968f956":"1c34a8d8","chunk-6f301976":"2d057a0d","chunk-a0b7a228":"02f3f06e","chunk-e149f888":"a330ff92"}[e]+".js"}function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-6968f956":1,"chunk-6f301976":1,"chunk-a0b7a228":1,"chunk-e149f888":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var o="assets/css/"+({}[e]||e)+"."+{"chunk-2d0bacb6":"31d6cfe0","chunk-2d0bce03":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-3292e61d":"31d6cfe0","chunk-4be7a73e":"31d6cfe0","chunk-6968f956":"e52252e1","chunk-6f301976":"0b64dba5","chunk-a0b7a228":"592c4044","chunk-e149f888":"f14a89a1"}[e]+".css",a=i.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===o||l===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[e],f.parentNode.removeChild(f),t(u)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var u=new Promise(function(n,t){o=a[e]=[n,t]});n.push(o[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e),s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");u.type=o,u.request=r,t[1](u)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="http://www.baidu.com/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"03f4":function(e,n,t){"use strict";var o=t("5f62"),r=t.n(o);r.a},"3db4":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("6762"),t("2fdb"),t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"header"},[t("div",{staticClass:"logo",on:{click:e.handleClick}},[e._v("@layoung")]),t("ul",{staticClass:"nav"},[t("router-link",{attrs:{tag:"li",to:"/home"}},[e._v("Home")]),e._v(" |\n    "),t("router-link",{attrs:{tag:"li",to:"/learn"}},[e._v("Learn")]),e._v("|\n    "),t("router-link",{attrs:{tag:"li",to:"/student"}},[e._v("Student")]),e._v("|\n    "),t("router-link",{attrs:{tag:"li",to:"/about"}},[e._v("About")]),e._v("|\n    "),t("router-link",{attrs:{tag:"li",to:"/community"}},[e._v("Community")])],1)]),t("router-view",{staticClass:"view"})],1)},a=[],u={methods:{handleClick:function(){this.$router.push("/home")}}},c=u,i=(t("03f4"),t("2877")),s=Object(i["a"])(c,r,a,!1,null,"c57fed50",null),l=s.exports,d=t("8c4f"),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[e._v("首页")])},h=[],m=t("bc3a"),p=t.n(m),b={beforeRouteEnter:function(e,n,t){console.log("beforeRouteEnter"),t()},mounted:function(){p.a.get("/api/chat/sendMsg",{params:{msg:"？？？",appkey:"Layoung_1548596076612"}}).then(function(e){console.log(e)})}},g=b,v=Object(i["a"])(g,f,h,!1,null,null,null),k=v.exports;o["a"].use(d["a"]);var y=new d["a"]({mode:"history",linkExactActiveClass:"exact-active",linkActiveClass:"active",routes:[{path:"/home",name:"home",component:k},{path:"/learn",name:"learn",component:function(){return t.e("chunk-3292e61d").then(t.bind(null,"41ce"))}},{path:"/student",name:"student",component:function(){return t.e("chunk-6f301976").then(t.bind(null,"448f"))},meta:{login:!0}},{path:"/about",name:"about",component:function(){return t.e("chunk-2d22d746").then(t.bind(null,"f820"))}},{path:"/community",name:"community",component:function(){return t.e("chunk-e149f888").then(t.bind(null,"8838"))},redirect:"/community/academic",meta:{login:!0},children:[{path:"academic",name:"academic",component:function(){return t.e("chunk-a0b7a228").then(t.bind(null,"ee51"))}},{path:"download",name:"download",component:function(){return t.e("chunk-2d0bacb6").then(t.bind(null,"3971"))}},{path:"personal",name:"personal",component:function(){return t.e("chunk-6968f956").then(t.bind(null,"90ab"))}}]},{path:"/question:id",name:"question",component:function(){return t.e("chunk-4be7a73e").then(t.bind(null,"e254"))}},{path:"/login",name:"login",component:function(){return t.e("chunk-2d2086b7").then(t.bind(null,"a55b"))}},{path:"/notFound",name:"notFound",component:function(){return t.e("chunk-2d0bce03").then(t.bind(null,"2a31"))}},{path:"*",redirect:function(e){return"/"===e.path?"/home":"/notFound"}}]}),w=(t("3db4"),t("7f7f"),t("2f62")),_={state:{name:"",age:null,look:"nice",studentList:[]},getters:{person:function(e,n){return e.studentList.map(function(e){return"姓名:".concat(e.name," 年龄:").concat(e.age)})}},mutations:{changeStudentList2:function(e,n){e.studentList.push(n)}},actions:{changeStudentList:function(e,n){var t=e.commit;setTimeout(function(){t("changeStudentList2",n)},1e3)}}},L={namespaced:!0,state:{course:"数据结构",price:100},getters:{getPrice:function(e){return"￥"+e.price}},mutations:{changePrice:function(e,n){var t=n.price;e.price=t}}};o["a"].use(w["a"]);var S=new w["a"].Store({modules:{student:_,learn:L},strict:!1,state:{name:"",age:null,look:"nice",studentList:[]},getters:{person:function(e,n){return e.studentList.map(function(e){return"姓名:".concat(e.name," 年龄:").concat(e.age)})}},mutations:{changeStudentList2:function(e,n){e.studentList.push(n)}},actions:{changeStudentList:function(e,n){var t=e.commit;setTimeout(function(){t("changeStudentList2",n)},1e3)}}});o["a"].config.productionTip=!1,y.beforeEach(function(e,n,t){var o=e.matched.some(function(e){return e.meta&&e.meta.login});if(o){var r=document.cookie.includes("login=true");if(r)t();else{var a=window.confirm("该页面需要登陆后访问,是否登陆???");a&&t("/login")}}else t();console.log("boforeEach")}),new o["a"]({router:y,store:S,render:function(e){return e(l)}}).$mount("#app")},"5f62":function(e,n,t){}});