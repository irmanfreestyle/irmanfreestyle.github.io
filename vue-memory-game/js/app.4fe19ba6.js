(function(t){function e(e){for(var i,o,s=e[0],a=e[1],l=e[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);u&&u(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],i=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(i=!1)}i&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},c=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"016d":function(t,e,n){"use strict";var i=n("7f21"),r=n.n(i);r.a},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},1104:function(t,e,n){t.exports=n.p+"img/laptop.d9f422f6.png"},"1e37":function(t,e,n){t.exports=n.p+"img/phone.581e0073.png"},"26ae":function(t,e,n){t.exports=n.p+"img/motor.327d57fd.png"},4629:function(t,e,n){t.exports=n.p+"img/chair.473f8645.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],o=(n("034f"),n("2877")),s={},a=Object(o["a"])(s,r,c,!1,null,null,null),l=a.exports,u=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.startTime>0?n("div",{staticClass:"start-time"},[t._v(t._s(t.startTime))]):t._e(),0===t.startTime?n("div",{staticClass:"start-time"},[t._v(" "+t._s(t._f("addZero")(t.minutes))+":"+t._s(t._f("addZero")(t.seconds))+":"+t._s(t.miliseconds)+" ")]):t._e(),t._l(t.images,(function(e,i){return n("div",{key:i,staticClass:"flex-item"},[n("div",{on:{click:function(n){return t.clicking({id:e.id,index:i})}}},[n("Card",{attrs:{image:e,clicked:e.clicked}})],1)])})),n("Cover")],2)},d=[],p=(n("a4d3"),n("4de4"),n("4e82"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("ac1f"),n("25f0"),n("466d"),n("1276"),n("159b"),n("ade3")),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("img",{attrs:{src:n("7584")("./"+t.image.name),width:"100%",height:"100%"}}),i("div",{staticClass:"cover",class:{clicked:t.clicked}},[t._v(" ? ")])])},h=[],g={props:["image","clicked"]},b=g,v=(n("6a14"),Object(o["a"])(b,m,h,!1,null,"ff701936",null)),O=v.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"cover",staticClass:"cover",class:{open:t.start}},[null!==this.finishTime?n("h2",{staticStyle:{color:"white"}},[t._v(t._s(t.finishTime.minutes)+" Minute "+t._s(t.finishTime.seconds)+" Second")]):t._e(),n("button",{on:{click:function(e){return t.startGame()}}},[t._v("START GAME")])])},y=[],j=n("2f62");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){Object(p["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var T={methods:_({},Object(j["b"])(["toggleStart"]),{startGame:function(){this.toggleStart()}}),computed:{start:function(){return this.$store.state.start},finishTime:function(){return this.$store.state.finishTime}}},P=T,x=(n("016d"),Object(o["a"])(P,k,y,!1,null,"f533375e",null)),C=x.exports;function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){Object(p["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var D={components:{Card:O,Cover:C},data:function(){return{clicked:0,match:[],sameClick:[],startTime:3,seconds:0,minutes:0,miliseconds:0,images:[{id:1,name:"football.png",clicked:!1},{id:2,name:"basketball.png",clicked:!1},{id:3,name:"laptop.png",clicked:!1},{id:4,name:"phone.png",clicked:!1},{id:5,name:"motor.png",clicked:!1},{id:6,name:"chair.png",clicked:!1},{id:1,name:"football.png",clicked:!1},{id:2,name:"basketball.png",clicked:!1},{id:3,name:"laptop.png",clicked:!1},{id:4,name:"phone.png",clicked:!1},{id:5,name:"motor.png",clicked:!1},{id:6,name:"chair.png",clicked:!1}]}},watch:{start:function(t){t&&this.starting()}},methods:E({},Object(j["b"])(["toggleStart","setFinishTime"]),{clicking:function(t){if(this.sameClick.push(t.index),2!==this.clicked&&!this.images[t.index].clicked){this.images[t.index].clicked=!0;var e=this;this.match.push(t.id),this.clicked++,2===this.clicked&&setTimeout((function(){e.match[0]===e.match[1]?(console.log("Correct"),e.checkFinish()):(console.log("Wrong"),e.removeCover(e.match)),console.log("state was restarted"),e.match=[],e.sameClick=[],e.clicked=0}),500)}},checkFinish:function(){var t=!0;if(this.images.forEach((function(e){!1===e.clicked&&(t=!1)})),t){var e=Object.assign({},{minutes:this.minutes,seconds:this.seconds});this.setFinishTime(e),this.toggleStart()}},removeCover:function(t){var e=this;t.forEach((function(t){e.images.forEach((function(n,i){t===n.id&&(e.images[i].clicked=!1)}))}))},starting:function(){var t=this,e=this,n=setInterval((function(){t.startTime--,0===e.startTime&&(clearInterval(n),e.startTimer(),e.toggleOpen())}),1500)},toggleOpen:function(){this.images.forEach((function(t){return t.clicked=!t.clicked}))},startTimer:function(){var t=this;setInterval((function(){t.seconds++,60===t.seconds&&(t.seconds=0,t.minutes++)}),1e3),setInterval((function(){t.miliseconds++,t.miliseconds>=60&&(t.miliseconds=0),t.miliseconds<10&&(t.miliseconds="0"+t.miliseconds)}),15)}}),filters:{addZero:function(t){return t.toString().split("").length<2?"0".concat(t):t}},computed:{start:function(){return this.$store.state.start}},created:function(){this.images.sort((function(){return Math.random()-.5})),this.toggleOpen()}},$=D,M=(n("8c41"),Object(o["a"])($,f,d,!1,null,"26b76e10",null)),F=M.exports;i["a"].use(u["a"]);var I=[{path:"/",name:"home",component:F}],G=new u["a"]({mode:"history",base:"/",routes:I}),Z=G;i["a"].use(j["a"]);var A=new j["a"].Store({state:{clicked:0,match:[],sameClick:[],start:!1,finishTime:null},mutations:{toggleStart:function(t){t.start=!t.start},setFinishTime:function(t,e){t.finishTime=e}},actions:{},modules:{}}),J=new i["a"];i["a"].config.productionTip=!1,i["a"].prototype.$bus=J,new i["a"]({router:Z,store:A,render:function(t){return t(l)}}).$mount("#app")},"6a14":function(t,e,n){"use strict";var i=n("99a2"),r=n.n(i);r.a},7211:function(t,e,n){},7584:function(t,e,n){var i={"./basketball.png":"c4b5","./chair.png":"4629","./football.png":"9002","./laptop.png":"1104","./motor.png":"26ae","./phone.png":"1e37"};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=c,t.exports=r,r.id="7584"},"7f21":function(t,e,n){},"85ec":function(t,e,n){},"8c41":function(t,e,n){"use strict";var i=n("7211"),r=n.n(i);r.a},9002:function(t,e,n){t.exports=n.p+"img/football.870dbed4.png"},"99a2":function(t,e,n){},c4b5:function(t,e,n){t.exports=n.p+"img/basketball.d92754bd.png"}});
//# sourceMappingURL=app.4fe19ba6.js.map