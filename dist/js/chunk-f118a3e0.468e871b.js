(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f118a3e0"],{"2bc9":function(t,n,e){},"2d0c":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("NavigateBar",{attrs:{title:"精彩跟帖"}}),t._l(t.comments,(function(n,a){return e("div",{key:a,staticClass:"comment-item"},[e("p",{staticClass:"date"},[t._v(t._s(t.moment(n.create_date).format("YYYY-MM-DD hh:mm")))]),n.parent?e("div",{staticClass:"parent"},[e("span",{staticClass:"parent-user"},[t._v("回复："+t._s(n.parent.user.nickname))]),e("p",{staticClass:"parent-content"},[t._v(t._s(n.parent.content))])]):t._e(),e("p",{staticClass:"comment-content"},[t._v(t._s(n.content))]),e("router-link",{staticClass:"link-post",attrs:{to:"#"}},[e("div",[t._v("原文："+t._s(n.post.title))]),e("span",{staticClass:"iconfont iconjiantou1"})])],1)}))],2)},s=[],o=e("2b2e"),c=e("c1df"),i=e.n(c),r={data:function(){return{moment:i.a,comments:[]}},components:{NavigateBar:o["a"]},mounted:function(){var t=this,n=JSON.parse(localStorage.getItem("userInfo"));this.$axios({url:"/user_comments",headers:{Authorization:n.token}}).then((function(n){console.log(n);var e=n.data.data;t.comments=e}))}},u=r,l=(e("d07e"),e("2877")),m=Object(l["a"])(u,a,s,!1,null,"44e9255c",null);n["default"]=m.exports},d07e:function(t,n,e){"use strict";var a=e("2bc9"),s=e.n(a);s.a}}]);
//# sourceMappingURL=chunk-f118a3e0.468e871b.js.map