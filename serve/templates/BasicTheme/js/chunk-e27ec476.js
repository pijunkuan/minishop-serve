(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e27ec476"],{"3e23":function(e,t,i){"use strict";var s=i("506b"),o=i.n(s);o.a},"506b":function(e,t,i){},"7d57":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login-background"},[i("page-loading",{attrs:{loading:e.loading}}),i("div",{staticClass:"login-form"},[i("shop-image",{staticClass:"login-form-avatar",attrs:{width:80,circled:""}},[i("div",{attrs:{slot:"placeholder"},slot:"placeholder"},[i("shop-icon",{staticStyle:{"background-color":"#fff"},attrs:{name:"iconzhucetouxiang"}})],1),i("div",{attrs:{slot:"error"},slot:"error"},[i("shop-icon",{staticStyle:{"background-color":"#fff"},attrs:{name:"iconzhucetouxiang"}})],1)]),i("shop-input",{ref:"mobile",staticClass:"login-form-input",attrs:{validate:"",rules:e.rules.mobile},model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}},[i("span",{staticClass:"login-prepend",attrs:{slot:"prepend"},slot:"prepend"},[e._v("手机号")])]),i("shop-input",{ref:"verification",staticClass:"login-form-input verify-input",attrs:{validate:"",rules:e.rules.verification_code},model:{value:e.user.verification_code,callback:function(t){e.$set(e.user,"verification_code",t)},expression:"user.verification_code"}},[i("span",{staticClass:"login-prepend",attrs:{slot:"prepend"},slot:"prepend"},[e._v("验证码")]),i("span",{attrs:{slot:"append"},on:{click:e.getVerify},slot:"append"},[e._v(e._s(e.code_tip))])]),i("shop-input",{ref:"password",staticClass:"login-form-input",attrs:{type:e.passType,validate:"",rules:e.rules.password},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}},[i("span",{staticClass:"login-prepend",attrs:{slot:"prepend"},slot:"prepend"},[e._v("新密码")]),i("span",{attrs:{slot:"append"},on:{click:function(t){e.passType="text"}},slot:"append"},["password"===e.passType?i("shop-icon",{attrs:{name:"yanjing-bi",size:"mini"}}):e._e()],1),i("span",{attrs:{slot:"append"},on:{click:function(t){e.passType="password"}},slot:"append"},["text"===e.passType?i("shop-icon",{attrs:{name:"yanjing",size:"mini"}}):e._e()],1)]),i("shop-button",{staticClass:"login-form-button",on:{click:e.confirmForget}},[e._v("重设密码")]),i("div",{staticClass:"login-form-bottom"},[i("div",[e._v("已有账号？"),i("div",{staticClass:"bottom-btn",on:{click:e.toLogin}},[e._v("登录")])]),i("div",{staticClass:"bottom-btn",on:{click:e.toRegister}},[e._v("注册账号")])])],1)],1)},o=[],a=i("76a0"),n=i("7ded"),r={data:function(){return{passType:"password",user:{mobile:"",verification_code:"",password:""},rules:{email:[{required:!0,message:"请输入邮箱"}],mobile:[{required:!0,message:"请输入手机号"}],verification_code:[{required:!0,message:"请输入验证码"},{len:4,message:"验证码为4位"}],password:[{required:!0,message:"请输入密码"},{min:6,message:"密码至少为6位"}]},loading:!0,code_tip:"获取验证码",codeLoading:!1,time:30,btnLoading:!1}},created:function(){var e=this;setTimeout((function(){e.loading=!1}),1e3)},methods:{changeType:function(e,t){this.$refs[e].clearValidate(),this.regType=t},toLogin:function(){this.$router.push({name:"Login"})},toRegister:function(){this.$router.push({name:"Register"})},getVerify:function(){this.codeLoading||(this.codeLoading=!0,this.$refs.verification.clearValidate(),this.verifyLoading=!0,this.code_tip=this.time+"s后重试",this.timeOut(),Object(n["c"])({mobile:this.user.mobile}).then((function(){Object(a["Toast"])("验证码已发送至手机，请及时查收")})))},timeOut:function(){var e=this;if(0===this.time)return this.code_tip="获取验证码",this.time=30,void(this.codeLoading=!1);setTimeout((function(){e.time--,e.code_tip=e.time+"s后重试",e.timeOut()}),1e3)},confirmForget:function(){var e=this;this.btnLoading||this.$refs.mobile.validation((function(t){e.$refs.password.validation((function(i){e.$refs.verification.validation((function(s){t&&i&&s&&(e.btnLoading=!0,e.forget())}))}))}))},forget:function(){var e=this;Object(n["a"])(this.user).then((function(){Object(a["Toast"])({message:"密码已重置，正在跳转登录中...",duration:2e3}),e.$store.dispatch("login",{mobile:e.user.mobile,password:e.user.password}).then((function(){"Login"===e.$route.query.from||void 0===e.$route.query.from?e.$router.push({name:"UserHome"}):e.$router.push({name:e.$route.query.from})})),setTimeout((function(){e.$refs.mobile.clearValidate(),e.$refs.password.clearValidate(),e.$refs.verification.clearValidate(),e.btnLoading=!1}),2e3)})).catch((function(t){Object(a["Toast"])({message:t.response.data.message,duration:2e3}),e.btnLoading=!1}))}}},c=r,l=(i("89cb"),i("3e23"),i("2877")),d=Object(l["a"])(c,s,o,!1,null,"aa722ba0",null);t["default"]=d.exports},"89cb":function(e,t,i){"use strict";var s=i("c1d0"),o=i.n(s);o.a},c1d0:function(e,t,i){}}]);