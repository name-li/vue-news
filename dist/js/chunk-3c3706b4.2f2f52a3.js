(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c3706b4"],{"19b1":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"imgText"},[a("div",{staticClass:"imgText-left"},[a("h4",[t._v(t._s(t.data.title))]),a("p",[t._v(t._s(t.data.user.nickname)+" "+t._s(t.data.comment_length)+"跟帖")])]),a("img",{attrs:{src:t.$axios.defaults.baseURL+t.data.cover[0].url}})])])},s=[],n={props:["data"]},r=n,o=(a("b65e"),a("2877")),c=Object(o["a"])(r,i,s,!1,null,"26de7dca",null);e["a"]=c.exports},"4de4":function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").filter,n=a("1dde"),r=a("ae40"),o=n("filter"),c=r("filter");i({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"4f58":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video"},[a("h4",[t._v(t._s(t.data.title))]),a("div",{staticClass:"cover"},[a("img",{attrs:{src:t.$axios.defaults.baseURL+t.data.cover[0].url,alt:""}}),t._m(0)]),a("p",[t._v(t._s(t.data.user.nickname)+" "+t._s(t.data.comments_length)+"跟帖")])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cover-layer"},[a("span",{staticClass:"iconfont iconshipin"})])}],n={props:["data"]},r=n,o=(a("e213"),a("2877")),c=Object(o["a"])(r,i,s,!1,null,"04a6a8aa",null);e["a"]=c.exports},"53f0":function(t,e,a){},"57cc":function(t,e,a){},7376:function(t,e,a){"use strict";var i=a("53f0"),s=a.n(i);s.a},"7d8f":function(t,e,a){},"8e9d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"imgList"},[a("h4",[t._v(t._s(t.data.title))]),a("div",{staticClass:"images"},t._l(t.data.cover,(function(e,i){return a("img",{key:i,attrs:{src:t.$axios.defaults.baseURL+e.url}})})),0),a("p",[t._v(t._s(t.data.user.nickname)+" "+t._s(t.data.comment_length)+"跟帖")])])},s=[],n={props:["data"]},r=n,o=(a("7376"),a("2877")),c=Object(o["a"])(r,i,s,!1,null,"51f75d51",null);e["a"]=c.exports},9778:function(t,e,a){},"993a":function(t,e,a){"use strict";var i=a("7d8f"),s=a.n(i);s.a},"99af":function(t,e,a){"use strict";var i=a("23e7"),s=a("d039"),n=a("e8b5"),r=a("861d"),o=a("7b0b"),c=a("50c4"),l=a("8418"),d=a("65f0"),u=a("1dde"),f=a("b622"),h=a("2d00"),v=f("isConcatSpreadable"),g=9007199254740991,p="Maximum allowed index exceeded",m=h>=51||!s((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),_=u("concat"),b=function(t){if(!r(t))return!1;var e=t[v];return void 0!==e?!!e:n(t)},k=!m||!_;i({target:"Array",proto:!0,forced:k},{concat:function(t){var e,a,i,s,n,r=o(this),u=d(r,0),f=0;for(e=-1,i=arguments.length;e<i;e++)if(n=-1===e?r:arguments[e],b(n)){if(s=c(n.length),f+s>g)throw TypeError(p);for(a=0;a<s;a++,f++)a in n&&l(u,f,n[a])}else{if(f>=g)throw TypeError(p);l(u,f++,n)}return u.length=f,u}})},b65e:function(t,e,a){"use strict";var i=a("57cc"),s=a.n(i);s.a},d504:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"header"},[a("div",{staticClass:"iconfont iconnew"}),a("router-link",{staticClass:"search",attrs:{to:"/search"}},[a("span",{staticClass:"iconfont iconsearch"}),a("span",[t._v("搜素新闻")])]),a("router-link",{attrs:{to:"/personal"}},[a("span",{staticClass:"iconfont iconwode"})])],1),a("van-tabs",{attrs:{swipeable:"",sticky:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.categories,(function(e,i){return 1===e.is_top||"V"===e.name?a("van-tab",{key:i,attrs:{title:e.name}},[a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[a("van-list",{attrs:{"immediate-check":"",finished:e.finished,"finished-text":"我也是有底线的"},on:{load:t.onLoad},model:{value:e.loading,callback:function(a){t.$set(e,"loading",a)},expression:"item.loading"}},t._l(e.list,(function(e,i){return a("div",{key:i},[1===e.type&&e.cover.length<3?a("Postitem1",{attrs:{data:e}}):t._e(),1===e.type&&e.cover.length>=3?a("Postitem2",{attrs:{data:e}}):t._e(),2===e.type?a("Postitem3",{attrs:{data:e}}):t._e()],1)})),0)],1)],1):t._e()})),1)],1)},s=[],n=(a("99af"),a("4de4"),a("d81d"),a("b0c0"),a("2909")),r=a("19b1"),o=a("8e9d"),c=a("4f58"),l={data:function(){return{categories:[],active:0,refreshing:!1,token:""}},watch:{active:function(){var t=this.categories.filter((function(t){return t.is_top||"V"===t.name}));this.active===t.length-1&&this.$router.push("/category"),this.getList()}},components:{Postitem1:r["a"],Postitem2:o["a"],Postitem3:c["a"]},mounted:function(){var t=JSON.parse(localStorage.getItem("userInfo"))||{},e=t.token,a=JSON.parse(localStorage.getItem("categories"));this.token=e,a?e&&"关注"!==a[0].name||!e&&"关注"==a[0].name?this.getData():(this.categories=a,this.handleNav()):this.getData()},methods:{handleNav:function(){this.categories=this.categories.map((function(t){return t.list=[],t.loading=!1,t.finished=!1,t.scrollY=0,t.isload=!1,t.pageIndex=1,t})),this.getList()},getData:function(){var t=this,e={url:"/category"};this.token&&(e.headers={Authorization:this.token}),this.$axios(e).then((function(e){var a=e.data.data;a.push({name:"V"}),t.categories=a,localStorage.setItem("categories",JSON.stringify(a)),t.handleNav()}))},getList:function(){var t=this,e=this.categories[this.active],a=e.id,i=e.pageIndex,s=e.finished,r=e.name,o=e.isload;if(!o&&(this.categories[this.active].lsload=!0,this.categories[this.active].pageIndex+=1,!s)){var c={url:"/post",params:{pageSize:5,pageIndex:i,category:a}};"关注"===r&&(c.headers={Authorization:this.token}),this.$axios(c).then((function(e){var a=e.data,i=a.data,s=a.total;t.categories[t.active].list=[].concat(Object(n["a"])(t.categories[t.active].list),Object(n["a"])(i)),t.categories=Object(n["a"])(t.categories),t.categories[t.active].loading=!1,t.categories[t.active].list.length===s&&(t.categories[t.active].finished=!0),t.categories[t.active].isload=!1}))}},onLoad:function(){this.getList()},onRefresh:function(){this.refreshing=!1}}},d=l,u=(a("993a"),a("2877")),f=Object(u["a"])(d,i,s,!1,null,"692faf1b",null);e["default"]=f.exports},d81d:function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").map,n=a("1dde"),r=a("ae40"),o=n("map"),c=r("map");i({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},e213:function(t,e,a){"use strict";var i=a("9778"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-3c3706b4.2f2f52a3.js.map