(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e79d0ff6"],{a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("div",{staticClass:"close"},[t._v("×")]),t._m(0),s("van-form",{staticClass:"form",on:{submit:t.onSubmit}},[s("van-field",{attrs:{name:"手机号码",placeholder:"手机号码",rules:[{required:!0,message:"请填写手机号码"}]},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}}),s("van-field",{attrs:{type:"password",name:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),s("div",[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("登录")])],1)],1),s("router-link",{attrs:{to:"/register"}},[s("van-button",{staticClass:"link-register",attrs:{round:"",block:""}},[t._v("注册")])],1)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("span",{staticClass:"iconfont iconnew"})])}],o={data:function(){return{form:{username:"",password:""}}},methods:{onSubmit:function(t){var e=this;this.$axios({url:"/login",method:"POST",data:this.form}).then((function(t){var s=t.data,a=s.message,n=s.data;console.log(t),e.$toast.success(a),localStorage.setItem("userInfo",JSON.stringify(n)),console.log(t.data.data.token),e.$router.push("/personal")}))}}},r=o,i=(s("e5f3"),s("2877")),l=Object(i["a"])(r,a,n,!1,null,"2d92416e",null);e["default"]=l.exports},ab92:function(t,e,s){},e5f3:function(t,e,s){"use strict";var a=s("ab92"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-e79d0ff6.201d133d.js.map