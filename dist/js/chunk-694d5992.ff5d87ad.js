(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-694d5992"],{2176:function(e,t,i){"use strict";var n=i("c0c4"),r=i.n(n);r.a},"2b2e":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"person_centered"},[i("span",{staticClass:"iconfont iconjiantou",on:{click:function(t){return e.$router.back()}}}),i("strong",{staticClass:"centered"},[e._v(e._s(e.title))]),e.shouyeShow?i("span",{staticClass:"iconfont iconshouye",on:{click:function(t){return e.$router.push("/")}}}):i("span",{staticClass:"iconfont iconshouye",staticStyle:{opacity:"0"}})])},r=[],c={props:["title","shouyeShow"]},o=c,s=(i("5880"),i("2877")),a=Object(s["a"])(o,n,r,!1,null,"f75b0014",null);t["a"]=a.exports},4886:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("NavigateBar",{attrs:{title:"栏目管理"}}),i("div",{staticClass:"category"},[i("div",{staticClass:"category_edit"},[i("p",[e._v("点击删除以下频道")]),i("div",e._l(e.categoriesDle,(function(t,n){return i("span",{key:n,class:["关注","头条"].includes(t.name)?"active":"",on:{click:function(i){return e.handleDel(t,n)}}},[e._v(e._s(t.name))])})),0)]),i("div",{staticClass:"category_add"},[i("p",[e._v("点击添加以下频道")]),i("div",e._l(e.categoriesAdd,(function(t,n){return i("span",{key:n,on:{click:function(i){return e.handleAdd(t,n)}}},[e._v(e._s(t.name))])})),0)])])],1)},r=[],c=(i("99af"),i("4de4"),i("caad"),i("a434"),i("b0c0"),i("2909")),o=i("2b2e"),s={data:function(){return{categories:[],categoriesDle:[],categoriesAdd:[]}},components:{NavigateBar:o["a"]},mounted:function(){this.categories=JSON.parse(localStorage.getItem("categories")),this.categoriesDle=this.categories.filter((function(e){return 1===e.is_top})),this.categoriesAdd=this.categories.filter((function(e){return 0===e.is_top})),console.log(this.categories[this.categories.length-1])},methods:{handleDel:function(e,t){["关注","头条"].includes(e.name)||(this.categoriesDle.splice(t,1),e.is_top=0,this.categoriesAdd.push(e))},handleAdd:function(e,t){this.categoriesAdd.splice(t,1),e.is_top=1,this.categoriesDle.push(e)}},destroyed:function(){this.categories=[].concat(Object(c["a"])(this.categoriesDle),Object(c["a"])(this.categoriesAdd),[this.categories[this.categories.length-1]]);var e=JSON.stringify(this.categories);localStorage.setItem("categories",e)}},a=s,l=(i("2176"),i("2877")),u=Object(l["a"])(a,n,r,!1,null,"2e6e47d0",null);t["default"]=u.exports},"4de4":function(e,t,i){"use strict";var n=i("23e7"),r=i("b727").filter,c=i("1dde"),o=i("ae40"),s=c("filter"),a=o("filter");n({target:"Array",proto:!0,forced:!s||!a},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},5880:function(e,t,i){"use strict";var n=i("bf50"),r=i.n(n);r.a},"99af":function(e,t,i){"use strict";var n=i("23e7"),r=i("d039"),c=i("e8b5"),o=i("861d"),s=i("7b0b"),a=i("50c4"),l=i("8418"),u=i("65f0"),d=i("1dde"),f=i("b622"),h=i("2d00"),g=f("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",b=h>=51||!r((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),_=d("concat"),y=function(e){if(!o(e))return!1;var t=e[g];return void 0!==t?!!t:c(e)},m=!b||!_;n({target:"Array",proto:!0,forced:m},{concat:function(e){var t,i,n,r,c,o=s(this),d=u(o,0),f=0;for(t=-1,n=arguments.length;t<n;t++)if(c=-1===t?o:arguments[t],y(c)){if(r=a(c.length),f+r>p)throw TypeError(v);for(i=0;i<r;i++,f++)i in c&&l(d,f,c[i])}else{if(f>=p)throw TypeError(v);l(d,f++,c)}return d.length=f,d}})},a434:function(e,t,i){"use strict";var n=i("23e7"),r=i("23cb"),c=i("a691"),o=i("50c4"),s=i("7b0b"),a=i("65f0"),l=i("8418"),u=i("1dde"),d=i("ae40"),f=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,p=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!h},{splice:function(e,t){var i,n,u,d,f,h,_=s(this),y=o(_.length),m=r(e,y),A=arguments.length;if(0===A?i=n=0:1===A?(i=0,n=y-m):(i=A-2,n=p(g(c(t),0),y-m)),y+i-n>v)throw TypeError(b);for(u=a(_,n),d=0;d<n;d++)f=m+d,f in _&&l(u,d,_[f]);if(u.length=n,i<n){for(d=m;d<y-n;d++)f=d+n,h=d+i,f in _?_[h]=_[f]:delete _[h];for(d=y;d>y-n+i;d--)delete _[d-1]}else if(i>n)for(d=y-n;d>m;d--)f=d+n-1,h=d+i-1,f in _?_[h]=_[f]:delete _[h];for(d=0;d<i;d++)_[d+m]=arguments[d+2];return _.length=y-n+i,u}})},bf50:function(e,t,i){},c0c4:function(e,t,i){},caad:function(e,t,i){"use strict";var n=i("23e7"),r=i("4d64").includes,c=i("44d2"),o=i("ae40"),s=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!s},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")}}]);
//# sourceMappingURL=chunk-694d5992.ff5d87ad.js.map