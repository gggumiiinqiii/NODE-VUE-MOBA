(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s={app:0},i=[];function c(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"25294f59"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"d09890e0"}[t]+".css",s=o.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){l=p[c],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}s[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/web/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0fed":function(t,e,n){"use strict";n("aac7")},"27f0":function(t,e,n){t.exports=n.p+"img/3.aa158f24.jpeg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i=n("2877"),c={},o=Object(i["a"])(c,r,s,!1,null,null,null),l=o.exports,u=(n("be35"),n("98b9"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card p-3 bg-white mt-3 "},[n("div",{staticClass:"card-header d-flex ai-center pt-2 pb-3"},[n("i",{staticClass:"iconfont",class:"icon-"+t.icon}),n("div",{staticClass:"fs-xl flex-1 px-2"},[t._v(t._s(t.title))]),n("i",{staticClass:"iconfont icon-menu"})]),n("div",{staticClass:"card-body pt-3"},[t._t("default")],2)])}),p=[],d={props:{title:{type:String,default:"新闻资讯",required:!0},icon:{type:String,required:!0}},data:function(){return{}}},f=d,v=(n("e45b"),Object(i["a"])(f,u,p,!1,null,null,null)),m=v.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-card",{attrs:{icon:t.icon,title:t.title}},[n("div",{staticClass:"nav jc-between"},t._l(t.categories,(function(e,a){return n("div",{key:a,staticClass:"nav-item",class:{active:t.active===a},on:{click:function(e){return t.changeactive(a)}}},[n("div",{staticClass:"nav-link "},[t._v(t._s(e.name))])])})),0),n("div",{staticClass:"pt-3"},[n("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.active=t.$refs.list.swiper.realIndex}}},t._l(t.categories,(function(e,a){return n("swiper-slide",{key:a},[t._t("items",null,{category:e})],2)})),1)],1)])},g=[],b={data:function(){return{active:0}},props:{icon:{type:String,required:!0},title:{type:String,required:!0},categories:{type:Array,required:!0}},methods:{changeactive:function(t){this.$refs.list.swiper.slideTo(t)}}},_=b,y=Object(i["a"])(_,h,g,!1,null,null,null),x=y.exports,C=n("bc3a"),w=n.n(C),k=n("7212"),j=n.n(k),O=(n("bbe3"),n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"bg-primary pt-3 pb-2"},[n("div",{staticClass:"nav jc-around nav-inverse pb-1"},t._l(t.path,(function(e,a){return n("div",{key:a,staticClass:"nav-item ",class:{active:t.active===a},on:{click:function(e){return t.change(a)}}},[n("router-link",{staticClass:"nav-link",attrs:{to:""+e.path,tag:"div"}},[t._v(t._s(e.name))])],1)})),0)]),n("router-view",{key:t.$route.path})],1)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topbar bg-black py-2 px-3 d-flex ai-center"},[a("img",{attrs:{src:n("9d64"),height:"30",alt:"logo",srcset:""}}),a("div",{staticClass:"px-2 flex-1"},[a("div",{staticClass:"text-white"},[t._v("王者荣耀")]),a("div",{staticClass:"text-grey-1 fs-xxs"},[t._v("团队成就更多")])]),a("button",{staticClass:"btn bg-primary ",attrs:{type:"button"}},[t._v(" 立即下载 ")])])}],$={data:function(){return{path:[{path:"/",name:"首页"},{path:"/strategy",name:"攻略中心"},{path:"/match",name:"赛事中心"}],active:0}},methods:{change:function(t){this.active=t}}},A=$,P=(n("c0f7"),Object(i["a"])(A,E,S,!1,null,null,null)),M=P.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("swiper",{attrs:{options:t.swiperOptions}},[a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:n("cbcd"),alt:"",srcset:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:n("708e"),alt:"",srcset:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:n("27f0"),alt:"",srcset:""}})]),a("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-2",attrs:{slot:"pagination"},slot:"pagination"})],1),a("div",{staticClass:"nav-icons bg-white mt-3 d-flex flex-wrap text-center pt-3 text-dark-1"},[a("div",{ref:"content",staticClass:"d-flex flex-wrap",class:{activeclose:1===t.active}},[t._l(10,(function(e){return a("div",{key:e,staticClass:"nav-item mb-3"},[a("i",{staticClass:"sprite sprite-news"}),a("div",{staticClass:"py-2"},[t._v(" 爆料站 ")])])})),t._m(0)],2),a("div",{staticClass:"w-100 bg-light py-2 fs-sm"},[a("i",{staticClass:"sprite sprite-arrow mr-1",class:{trans:1===t.active}}),a("span",{on:{click:function(e){return t.change()}}},[t._v(t._s(t.openorclocse))])])]),a("m-list-card",{attrs:{icon:"Menu",title:"新闻资讯",categories:t.newCats},scopedSlots:t._u([{key:"items",fn:function(e){var n=e.category;return t._l(n.newsList,(function(e,n){return a("router-link",{key:n,staticClass:"py-2 fs-lg d-flex",attrs:{tag:"div",to:"/articles/"+e._id}},[a("span",{staticClass:"text-info"},[t._v(t._s(e.categoryname))]),a("span",{staticClass:"px-2"},[t._v("|")]),a("span",{staticClass:"flex-1 text-dark text-ellipsis pr-2"},[t._v(t._s(e.title))]),a("span",{staticClass:"time text-grey"},[t._v(t._s(t._f("date")(e.createdAt)))])])}))}}])}),a("m-list-card",{attrs:{icon:"-superhero",title:"英雄列表",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(e){var n=e.category;return[a("div",{staticClass:"d-flex flex-wrap",staticStyle:{margin:"0rem -0.5rem"}},t._l(n.heroesList,(function(e,n){return a("router-link",{key:n,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heroes/"+e._id}},[a("img",{staticClass:"w-100",attrs:{src:e.avatar,alt:""}}),a("div",[t._v(t._s(e.name))])])})),1)]}}])})],1)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-item mb-3"},[n("i",{staticClass:"sprite sprite-story"}),n("div",{staticClass:"py-2"},[t._v(" 故事站 ")])])}],N=n("ade3"),R=n("1da1"),q=(n("96cf"),n("5a0c")),D=n.n(q),H=Object(N["a"])({name:"Home",filters:{date:function(t){return D()(t).format("MM/DD")}},data:function(){return{swiperOptions:{pagination:{el:".pagination-home"}},newCats:[],heroCats:[],active:1}},computed:{openorclocse:function(){return 1===this.active?"展开":"关闭"}},created:function(){},methods:{fetchNewsCats:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("news/list");case 2:n=e.sent,t.newCats=n.data;case 4:case"end":return e.stop()}}),e)})))()},fetchHeroCats:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/list");case 2:n=e.sent,t.heroCats=n.data;case 4:case"end":return e.stop()}}),e)})))()},change:function(){1===this.active?this.active=0:this.active=1}}},"created",(function(){this.fetchNewsCats(),this.fetchHeroCats()})),U=H,B=(n("de16"),Object(i["a"])(U,L,T,!1,null,null,null)),Y=B.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.model?n("div",{staticClass:"page-article"},[n("div",{staticClass:"d-flex py-3 px-1",staticStyle:{"border-bottom":"1px solid #d4d4d5"}},[n("div",{staticClass:"iconfont icon-back text-blue"}),n("div",{staticClass:"flex-1 text-ellipsis text-blue pl-2"},[t._v(t._s(t.model.title))]),n("div",{staticClass:"text-grey fs-xs"},[t._v(t._s(t._f("date")(t.model.createdAt)))])]),n("div",{staticClass:"px-2 content fs-lg",domProps:{innerHTML:t._s(t.model.content)}}),n("div",{staticClass:"px-3 py-2",staticStyle:{"border-top":"3px solid #d4d4d5"}},[t._m(0),t._l(t.model.related,(function(e){return n("router-link",{key:e._id,staticClass:"text-ellipsis mt-2",attrs:{tag:"div",to:"/articles/"+e._id}},[t._v(" "+t._s(e.title)+" ")])}))],2)]):t._e()},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex ai-center pb-2"},[n("i",{staticClass:"iconfont icon-Menu"}),n("div",{staticClass:"text-blue fs-lg ml-2"},[t._v("相关资讯")])])}],V={filters:{date:function(t){return D()(t).format("YYYY/MM/DD")}},props:{id:{required:!0}},data:function(){return{model:null}},methods:{fetchArticles:function(){var t=this;return Object(R["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("articles/".concat(t.id));case 2:n=e.sent,t.model=n.data;case 4:case"end":return e.stop()}}),e)})))()}},watch:{id:"fetchArticles"},created:function(){this.fetchArticles()}},F=V,K=(n("0fed"),Object(i["a"])(F,I,J,!1,null,null,null)),z=K.exports;a["a"].use(O["a"]);var G=[{path:"/",name:"main",component:M,children:[{path:"/",name:"home",component:Y},{path:"/articles/:id",name:"article",component:z,props:!0},{path:"/match",name:"Match",component:function(){return n.e("about").then(n.bind(null,"42f7"))}},{path:"/strategy",name:"Strategy",component:function(){return n.e("about").then(n.bind(null,"93ad"))}}]},{path:"/heroes/:id",name:"Hero",component:function(){return n.e("about").then(n.bind(null,"5d88"))},props:!0}],Q=new O["a"]({routes:G}),W=Q;a["a"].config.productionTip=!1,a["a"].component("m-card",m),a["a"].component("m-list-card",x),a["a"].prototype.$http=w.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/web/"}).VUE_APP_API_URL||"/admin/api"}),a["a"].use(j.a),new a["a"]({router:W,render:function(t){return t(l)}}).$mount("#app")},"708e":function(t,e,n){t.exports=n.p+"img/2.c740b860.jpeg"},"8d91":function(t,e,n){},"98b9":function(t,e,n){},"9cff":function(t,e,n){},"9d64":function(t,e,n){t.exports=n.p+"img/logo.b3b3bca8.png"},aac7:function(t,e,n){},be35:function(t,e,n){},be7d:function(t,e,n){},c0f7:function(t,e,n){"use strict";n("9cff")},cbcd:function(t,e,n){t.exports=n.p+"img/1.c9424d08.jpeg"},de16:function(t,e,n){"use strict";n("8d91")},e45b:function(t,e,n){"use strict";n("be7d")}});
//# sourceMappingURL=app.68b53032.js.map