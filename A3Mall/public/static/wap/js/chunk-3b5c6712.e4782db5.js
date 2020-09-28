(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b5c6712"],{3050:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{wrap:t.placeholder}},[a("div",{staticClass:"nav-bar",class:{"nav-bar-fixed":t.fixed,"nav-bar-transparent":t.transparent},style:t.obj},[t.leftArrow?a("div",{staticClass:"nav-bar-left",on:{click:t.left}},[a("i",{staticClass:"icon iconfont",class:{"nav-bar-icon":t.transparent},staticStyle:{"font-size":"18px"}},[t._v("")])]):t._e(),a("div",{staticClass:"nav-bar-middle",class:{"nav-bar-title":t.transparent}},[t._v(t._s(t.title))]),t.rightArrow?a("div",{staticClass:"nav-bar-right",on:{click:t.right}},["share"==t.rightIcon?a("i",{staticClass:"icon iconfont",class:{"nav-bar-icon":t.transparent},staticStyle:{"font-size":"18px"}},[t._v("")]):t._e(),"delete"==t.rightIcon?a("i",{staticClass:"icon iconfont",class:{"nav-bar-icon":t.transparent},staticStyle:{"font-size":"16px"}},[t._v("")]):t._e()]):t._e()])])},i=[],n=(a("a9e3"),{name:"NavBar",props:{title:{type:String,default:""},zIndex:{type:Number,default:0},fixed:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1},backgroundColor:{type:String,default:""},placeholder:{type:Boolean,default:!1},leftArrow:{type:Boolean,default:!1},rightArrow:{type:Boolean,default:!1},rightIcon:{type:String,default:""}},data:function(){return{obj:{}}},mounted:function(){this.zIndex>0&&(this.obj={"z-index":this.zIndex}),""!=this.backgroundColor&&Object.assign(this.obj,{"background-color":this.backgroundColor})},methods:{left:function(){this.$emit("click-left")},right:function(){this.$emit("click-right")}}}),s=n,o=(a("f18a"),a("2877")),c=Object(o["a"])(s,r,i,!1,null,"646e11e8",null);e["a"]=c.exports},3698:function(t,e,a){"use strict";a.r(e);var r,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-bar",{attrs:{title:"订单列表","left-arrow":"",fixed:!0,placeholder:!0,"z-index":9999,transparent:!0,"background-color":"#b91922"},on:{"click-left":t.prev}}),a("div",{},[a("div",{staticClass:"menu"},[a("div",{staticClass:"menu-wrap"},[a("span",{class:{active:"/order/list/1"==t.$route.path},on:{click:function(e){return t.go("1")}}},[t._v("待付款")]),a("span",{class:{active:"/order/list/2"==t.$route.path},on:{click:function(e){return t.go("2")}}},[t._v("待发货")]),a("span",{class:{active:"/order/list/3"==t.$route.path},on:{click:function(e){return t.go("3")}}},[t._v("待收货")]),a("span",{class:{active:"/order/list/4"==t.$route.path},on:{click:function(e){return t.go("4")}}},[t._v("待评价")]),a("span",{class:{active:"/order/list/5"==t.$route.path},on:{click:function(e){return t.go("5")}}},[t._v("己完成")])])]),a("div",{staticClass:"placeholder-box"})]),a("div",{staticClass:"list-wrap"},[t.isEmpty?a("van-empty",{attrs:{image:t.emptyImage,description:t.emptyDescription}}):t._e(),t.isEmpty?t._e():a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("div",{staticClass:"list-box"},t._l(t.list,(function(e,r){return a("div",{key:r,staticClass:"list-item-box"},[a("div",{staticClass:"top"},[a("span",{staticClass:"order-type"},[t._v(t._s(e.type))]),a("span",{staticClass:"time"},[t._v(t._s(e.create_time))]),a("span",{staticClass:"satus"},[t._v(t._s(e.order_status))])]),a("div",{staticClass:"goods-box",on:{click:function(a){return t.$router.push("/order/detail/"+e.order_id)}}},t._l(e.item,(function(e,r){return a("div",{key:r,staticClass:"goods-item clear"},[a("div",{staticClass:"goods-img"},[a("img",{attrs:{src:e.thumb_image}})]),a("div",{staticClass:"goods-info"},[a("div",{staticClass:"t"},[a("span",[t._v(t._s(e.title))]),a("span",[t._v("￥"+t._s(e.price))])]),a("div",{staticClass:"b"},[a("span",[t._v(t._s(e.spec))]),a("span",[t._v("× "+t._s(e.nums))])])])])})),0),a("div",{staticClass:"order",class:{addBorder:6==e.active}},[a("div",{staticClass:"total"},[t._v(" 共"+t._s(e.item.length)+"件商品，总金额 "),a("span",[t._v("￥"),a("i",[t._v(t._s(e.order_amount))])])])]),6!=e.active?a("div",{staticClass:"botttom"},[1==e.active?a("span",{staticClass:"cancel",on:{click:function(a){return t.cancel(e.order_id)}}},[t._v("取消订单")]):t._e(),1==e.active?a("span",{staticClass:"pay",on:{click:function(a){return t.$router.push("/order/detail/"+e.order_id)}}},[t._v("立即付款")]):t._e(),2==e.active||3==e.active||4==e.active?a("span",{staticClass:"cancel",on:{click:function(a){return t.$router.push("/order/refund/"+e.order_id)}}},[t._v("申请退款")]):t._e(),2==e.active||3==e.active||4==e.active?a("span",{staticClass:"cancel",on:{click:function(a){return t.$router.push("/order/express/"+e.order_id)}}},[t._v("查看物流")]):t._e(),2==e.active||3==e.active||4==e.active?a("span",{staticClass:"pay",on:{click:function(a){return t.$router.push("/order/confirm_delivery/"+e.order_id)}}},[t._v("确认收货")]):t._e(),5==e.active?a("span",{staticClass:"pay",on:{click:function(a){return t.$router.push("/order/evaluate/"+e.order_id)}}},[t._v("待评价")]):t._e()]):t._e()])})),0)])],1)],1)},n=[],s=(a("99af"),a("c740"),a("a434"),a("b0c0"),a("ac1f"),a("5319"),a("e7e5"),a("d399")),o=a("ade3"),c=(a("91d5"),a("f0ca")),l=(a("2994"),a("2bdd")),d=a("3050"),u={name:"OrderList",components:(r={},Object(o["a"])(r,d["a"].name,d["a"]),Object(o["a"])(r,l["a"].name,l["a"]),Object(o["a"])(r,c["a"].name,c["a"]),r),data:function(){return{isEmpty:!1,emptyImage:"search",emptyDescription:"您搜索的关键字暂无内容",list:[],loading:!1,finished:!1,clientHeight:window.outerHeight-100,page:1}},created:function(){},mounted:function(){},watch:{$route:function(t,e){this.list=[],this.page=1,this.onLoad()}},methods:{onLoad:function(){var t=this;this.isEmpty=!1;var e=this.$request.domain()+"static/images/order-empty.png";this.$http.getOrderList({type:this.$route.params.id,page:this.page}).then((function(a){void 0==a.data.list&&1==t.page?(t.isEmpty=!0,t.emptyImage=e,t.emptyDescription="暂无订单信息"):1==a.status?(t.list=t.list.concat(a.data.list),t.loading=!1,t.page++):-1==a.status&&(void 0==a.data&&1==t.page?(t.isEmpty=!0,t.emptyImage=e,t.emptyDescription="暂无订单信息"):(t.loading=!1,t.finished=!0))})).catch((function(e){t.isEmpty=!0,t.emptyImage="network",t.emptyDescription="网络出错，请检查网络是否连接"}))},cancel:function(t){var e=this;s["a"].loading({message:"加载中...",forbidClick:!0,loadingType:"spinner",duration:0}),this.$http.getOrderListCancel({order_id:t}).then((function(a){if(s["a"].clear(),a.status){var r=e.list.findIndex((function(e){return e.order_id==t}));e.list.splice(r,1),e.list.length<=0&&(e.isEmpty=!0,e.emptyImage=e.$request.domain()+"static/images/order-empty.png",e.emptyDescription="暂无订单信息"),Object(s["a"])(a.info)}else Object(s["a"])(a.info)})).catch((function(t){s["a"].clear(),Object(s["a"])("网络出错，请检查网络是否连接")}))},prev:function(){this.$router.replace("/ucenter/index")},go:function(t){t!=this.$route.params.id&&this.$router.replace({name:"OrderList",params:{id:t}})}}},f=u,p=(a("5d5e"),a("2877")),h=Object(p["a"])(f,i,n,!1,null,"6d9a502f",null);e["default"]=h.exports},3971:function(t,e,a){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),i=a("5899"),n="["+i+"]",s=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),c=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5d5e":function(t,e,a){"use strict";var r=a("c93e"),i=a.n(r);i.a},7156:function(t,e,a){var r=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var n,s;return i&&"function"==typeof(n=e.constructor)&&n!==a&&r(s=n.prototype)&&s!==a.prototype&&i(t,s),t}},"72cf":function(t,e,a){},"91d5":function(t,e,a){"use strict";a("68ef"),a("72cf")},a434:function(t,e,a){"use strict";var r=a("23e7"),i=a("23cb"),n=a("a691"),s=a("50c4"),o=a("7b0b"),c=a("65f0"),l=a("8418"),d=a("1dde"),u=a("ae40"),f=d("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var a,r,d,u,f,p,y=o(this),_=s(y.length),b=i(t,_),x=arguments.length;if(0===x?a=r=0:1===x?(a=0,r=_-b):(a=x-2,r=v(h(n(e),0),_-b)),_+a-r>g)throw TypeError(m);for(d=c(y,r),u=0;u<r;u++)f=b+u,f in y&&l(d,u,y[f]);if(d.length=r,a<r){for(u=b;u<_-r;u++)f=u+r,p=u+a,f in y?y[p]=y[f]:delete y[p];for(u=_;u>_-r+a;u--)delete y[u-1]}else if(a>r)for(u=_-r;u>b;u--)f=u+r-1,p=u+a-1,f in y?y[p]=y[f]:delete y[p];for(u=0;u<a;u++)y[u+b]=arguments[u+2];return y.length=_-r+a,d}})},a9e3:function(t,e,a){"use strict";var r=a("83ab"),i=a("da84"),n=a("94ca"),s=a("6eeb"),o=a("5135"),c=a("c6b6"),l=a("7156"),d=a("c04e"),u=a("d039"),f=a("7c73"),p=a("241c").f,h=a("06cf").f,v=a("9bf2").f,g=a("58a8").trim,m="Number",y=i[m],_=y.prototype,b=c(f(_))==m,x=function(t){var e,a,r,i,n,s,o,c,l=d(t,!1);if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+l}for(n=l.slice(2),s=n.length,o=0;o<s;o++)if(c=n.charCodeAt(o),c<48||c>i)return NaN;return parseInt(n,r)}return+l};if(n(m,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var E,C=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof C&&(b?u((function(){_.valueOf.call(a)})):c(a)!=m)?l(new y(x(e)),a,C):x(e)},k=r?p(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;k.length>I;I++)o(y,E=k[I])&&!o(C,E)&&v(C,E,h(y,E));C.prototype=_,_.constructor=C,s(i,m,C)}},b727:function(t,e,a){var r=a("0366"),i=a("44ad"),n=a("7b0b"),s=a("50c4"),o=a("65f0"),c=[].push,l=function(t){var e=1==t,a=2==t,l=3==t,d=4==t,u=6==t,f=5==t||u;return function(p,h,v,g){for(var m,y,_=n(p),b=i(_),x=r(h,v,3),E=s(b.length),C=0,k=g||o,I=e?k(p,E):a?k(p,0):void 0;E>C;C++)if((f||C in b)&&(m=b[C],y=x(m,C,_),t))if(e)I[C]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return C;case 2:c.call(I,m)}else if(d)return!1;return u?-1:l||d?d:I}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c740:function(t,e,a){"use strict";var r=a("23e7"),i=a("b727").findIndex,n=a("44d2"),s=a("ae40"),o="findIndex",c=!0,l=s(o);o in[]&&Array(1)[o]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!l},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(o)},c93e:function(t,e,a){},f0ca:function(t,e,a){"use strict";var r=a("d282"),i={render:function(){var t=arguments[0],e=function(e,a,r){return t("stop",{attrs:{"stop-color":e,offset:a+"%","stop-opacity":r}})};return t("svg",{attrs:{viewBox:"0 0 160 160",xmlns:"http://www.w3.org/2000/svg"}},[t("defs",[t("linearGradient",{attrs:{id:"c",x1:"64.022%",y1:"100%",x2:"64.022%",y2:"0%"}},[e("#FFF",0,.5),e("#F2F3F5",100)]),t("linearGradient",{attrs:{id:"d",x1:"64.022%",y1:"96.956%",x2:"64.022%",y2:"0%"}},[e("#F2F3F5",0,.3),e("#F2F3F5",100)]),t("linearGradient",{attrs:{id:"h",x1:"50%",y1:"0%",x2:"50%",y2:"84.459%"}},[e("#EBEDF0",0),e("#DCDEE0",100,0)]),t("linearGradient",{attrs:{id:"i",x1:"100%",y1:"0%",x2:"100%",y2:"100%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:"k",x1:"100%",y1:"100%",x2:"100%",y2:"0%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:"m",x1:"0%",y1:"43.982%",x2:"100%",y2:"54.703%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:"n",x1:"94.535%",y1:"43.837%",x2:"5.465%",y2:"54.948%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("radialGradient",{attrs:{id:"g",cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54835 0 .5 -.5)"}},[e("#EBEDF0",0),e("#FFF",100,0)])]),t("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[t("g",{attrs:{opacity:".8"}},[t("path",{attrs:{d:"M0 124V46h20v20h14v58H0z",fill:"url(#c)",transform:"matrix(-1 0 0 1 36 7)"}}),t("path",{attrs:{d:"M40.5 5a8.504 8.504 0 018.13 6.009l.12-.005L49 11a8 8 0 11-1 15.938V27H34v-.174a6.5 6.5 0 11-1.985-12.808A8.5 8.5 0 0140.5 5z",fill:"url(#d)",transform:"translate(2 7)"}}),t("path",{attrs:{d:"M96.016 0a4.108 4.108 0 013.934 2.868l.179-.004c2.138 0 3.871 1.71 3.871 3.818 0 2.109-1.733 3.818-3.871 3.818-.164 0-.325-.01-.484-.03v.03h-6.774v-.083a3.196 3.196 0 01-.726.083C90.408 10.5 89 9.111 89 7.398c0-1.636 1.284-2.976 2.911-3.094a3.555 3.555 0 01-.008-.247c0-2.24 1.842-4.057 4.113-4.057z",fill:"url(#d)",transform:"translate(2 7)"}}),t("path",{attrs:{d:"M121 8h22.231v14H152v77.37h-31V8z",fill:"url(#c)",transform:"translate(2 7)"}})]),t("path",{attrs:{fill:"url(#g)",d:"M0 139h160v21H0z"}}),t("path",{attrs:{d:"M37 18a7 7 0 013 13.326v26.742c0 1.23-.997 2.227-2.227 2.227h-1.546A2.227 2.227 0 0134 58.068V31.326A7 7 0 0137 18z",fill:"url(#h)","fill-rule":"nonzero",transform:"translate(43 36)"}}),t("g",{attrs:{opacity:".6","stroke-linecap":"round","stroke-width":"7"}},[t("path",{attrs:{d:"M20.875 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#i)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M9.849 0C3.756 6.225 0 14.747 0 24.146c0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#i)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M57.625 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#k)",transform:"rotate(-180 76.483 42.257)"}}),t("path",{attrs:{d:"M73.216 0c-6.093 6.225-9.849 14.747-9.849 24.146 0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#k)",transform:"rotate(-180 89.791 42.146)"}})]),t("g",{attrs:{transform:"translate(31 105)","fill-rule":"nonzero"}},[t("rect",{attrs:{fill:"url(#m)",width:"98",height:"34",rx:"2"}}),t("rect",{attrs:{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.114"}}),t("rect",{attrs:{fill:"url(#n)",x:"15",y:"12",width:"18",height:"6",rx:"1.114"}})])])])}},n=Object(r["a"])("empty"),s=n[0],o=n[1],c=["error","search","default"];e["a"]=s({props:{description:String,image:{type:String,default:"default"}},methods:{genImageContent:function(){var t=this.$createElement,e=this.slots("image");if(e)return e;if("network"===this.image)return t(i);var a=this.image;return-1!==c.indexOf(a)&&(a="https://img.yzcdn.cn/vant/empty-image-"+a+".png"),t("img",{attrs:{src:a}})},genImage:function(){var t=this.$createElement;return t("div",{class:o("image")},[this.genImageContent()])},genDescription:function(){var t=this.$createElement,e=this.slots("description")||this.description;if(e)return t("p",{class:o("description")},[e])},genBottom:function(){var t=this.$createElement,e=this.slots();if(e)return t("div",{class:o("bottom")},[e])}},render:function(){var t=arguments[0];return t("div",{class:o()},[this.genImage(),this.genDescription(),this.genBottom()])}})},f18a:function(t,e,a){"use strict";var r=a("3971"),i=a.n(r);i.a}}]);