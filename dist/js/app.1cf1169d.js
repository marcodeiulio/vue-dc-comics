(function(e){function s(s){for(var r,i,o=s[0],c=s[1],a=s[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(s);while(f.length)f.shift()();return U.push.apply(U,a||[]),t()}function t(){for(var e,s=0;s<U.length;s++){for(var t=U[s],r=!0,o=1;o<t.length;o++){var c=t[o];0!==n[c]&&(r=!1)}r&&(U.splice(s--,1),e=i(i.s=t[0]))}return e}var r={},n={app:0},U=[];function i(s){if(r[s])return r[s].exports;var t=r[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,s,t){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)i.d(t,r,function(s){return e[s]}.bind(null,r));return t},i.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var a=0;a<o.length;a++)s(o[a]);var l=c;U.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"56d7":function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("Header"),t("Main"),t("Footer")],1)},U=[],i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("header",{staticClass:"container"},[e._m(0),t("nav",[t("ul",e._l(e.links,(function(s){return t("li",{key:s.text},[t("a",{class:{active:s.active},attrs:{href:s.url}},[e._v(e._s(s.text))])])})),0)])])},o=[function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("figure",[r("img",{attrs:{src:t("9f51"),alt:"DC Logo"}})])}],c={name:"Header",data:function(){return{links:[{text:"characters",url:"#",active:!1},{text:"comics",url:"#",active:!0},{text:"movies",url:"#",active:!1},{text:"tv",url:"#",active:!1},{text:"games",url:"#",active:!1},{text:"collectibles",url:"#",active:!1},{text:"videos",url:"#",active:!1},{text:"fans",url:"#",active:!1},{text:"news",url:"#",active:!1},{text:"shop",url:"#",active:!1}]}}},a=c,l=(t("90c6"),t("2877")),u=Object(l["a"])(a,i,o,!1,null,"19b10714",null),f=u.exports,A=function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("main",[t("div",{staticClass:"container"},[e._v("Content Goes Here")])])}],d={name:"Main"},v=d,x=(t("9100"),Object(l["a"])(v,A,p,!1,null,"0a26e354",null)),h=x.exports,g=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("footer",[t("section",{attrs:{id:"upper-footer"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"col-2",attrs:{id:"footer-links"}},e._l(e.navs,(function(s){return t("nav",{key:s.title},[t("h3",[e._v(e._s(s.title))]),t("ul",e._l(s.links,(function(s){return t("li",{key:s.text},[t("a",{attrs:{href:""}},[e._v(" "+e._s(s.text)+" ")])])})),0)])})),0),t("div",{staticClass:"col-2",attrs:{id:"footer-logo"}})])]),t("section",{attrs:{id:"lower-footer"}},[t("div",{staticClass:"container"},[e._m(0),t("nav",[t("h2",[e._v("Follow Us")]),e._l(e.socials,(function(e){return t("a",{key:e.icon,attrs:{href:e.href}},[t("img",{attrs:{src:"../assets/img/footer-"+e.icon+".png",alt:e.alt}})])}))],2)])])])},m=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("a",{staticClass:"border",attrs:{href:"#"}},[t("h2",[e._v("Sign-up now!")])])}],b={name:"Footer",data:function(){return{socials:[{href:"#",icon:"facebook",alt:"Facebook Logo"},{href:"#",icon:"../assets/img/footer-twitter.png",alt:"Twitter Logo"},{href:"#",icon:"../assets/img/footer-youtube.png",alt:"YouTube Logo"},{href:"#",icon:"../assets/img/footer-pinterest.png",alt:"Pinterest Logo"},{href:"#",icon:"../assets/img/footer-periscope.png",alt:"Periscope Logo"}],navs:[{title:"DC Comics",links:[{text:"characters",url:"#"},{text:"comics",url:"#",active:!0},{text:"movies",url:"#"},{text:"tv",url:"#"},{text:"games",url:"#"},{text:"collectibles",url:"#"},{text:"videos",url:"#"},{text:"fans",url:"#"},{text:"news",url:"#"},{text:"shop",url:"#"}]},{title:"Shop",links:[{text:"shop dc",url:"#"},{text:"shop dc collectibles",url:"#"}]},{title:"DC",links:[{text:"terms of use",url:"#"},{text:"privacy policy",url:"#"},{text:"ad choices",url:"#"},{text:"advertising",url:"#"},{text:"jobs",url:"#"},{text:"subscriptions",url:"#"},{text:"talent workshop",url:"#"},{text:"CPSC certificates",url:"#"},{text:"ratings",url:"#"},{text:"shop help",url:"#"},{text:"contact us",url:"#"}]},{title:"sites",links:[{text:"DC",url:"#"},{text:"MAD magazine",url:"#"},{text:"DC kids",url:"#"},{text:"DC universe",url:"#"},{text:"DC power visa",url:"#"}]}]}}},C=b,w=(t("ee3a"),Object(l["a"])(C,g,m,!1,null,"0f70f729",null)),y=w.exports,O={name:"App",components:{Header:f,Main:h,Footer:y}},k=O,P=(t("5c0b"),Object(l["a"])(k,n,U,!1,null,null,null)),X=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(X)}}).$mount("#app")},"5c0b":function(e,s,t){"use strict";t("9c0c")},"65f5":function(e,s,t){},"6df7":function(e,s,t){},"813d":function(e,s,t){},"90c6":function(e,s,t){"use strict";t("813d")},9100:function(e,s,t){"use strict";t("6df7")},"9c0c":function(e,s,t){},"9f51":function(e,s){e.exports="data:image/png;base64,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"},ee3a:function(e,s,t){"use strict";t("65f5")}});
//# sourceMappingURL=app.1cf1169d.js.map