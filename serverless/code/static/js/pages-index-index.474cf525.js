(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"24fb":function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"===typeof btoa){var a=function(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}(i),o=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[n].concat(o).concat([a]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"===typeof t&&(t=[[null,t,""]]);var a={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);i&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},"302b":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"v-tabs",attrs:{id:t.elId}},[n("v-uni-scroll-view",{style:{position:t.fixed?"fixed":"relative",zIndex:1993},attrs:{"scroll-x":t.scroll,"scroll-left":t.scroll?t.scrollLeft:0,"scroll-with-animation":t.scroll}},[n("v-uni-view",{staticClass:"v-tabs__container",style:{display:t.scroll?"inline-flex":"flex",whiteSpace:t.scroll?"nowrap":"normal",background:t.bgColor,padding:t.padding}},[t._l(t.tabs,(function(e,i){return n("v-uni-view",{key:i,staticClass:"v-tabs__container-item",style:{color:t.current==i?t.activeColor:t.color,fontSize:(t.current,t.fontSize)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change(i)}}},[n("v-uni-image",{attrs:{src:e.icon,mode:""}}),n("v-uni-view",[t._v(t._s(e.text))])],1)})),t.pills?n("v-uni-view",{staticClass:"v-tabs__container-pills",style:{background:t.pillsColor,borderRadius:t.pillsBorderRadius,left:t.pillsLeft+"px",width:t.currentWidth+"px",height:t.height}}):n("v-uni-view",{staticClass:"v-tabs__container-line",style:{background:t.lineColor,width:t.lineWidth+"px",height:t.lineHeight,borderRadius:t.lineRadius,left:t.lineLeft+"px",transform:"translateX(-"+t.lineWidth/2+"px)"}})],2)],1),n("v-uni-view",{staticClass:"v-tabs__placeholder",style:{height:t.fixed?t.height:"0",padding:t.padding}})],1)},a=[]},"320f":function(t,e,n){"use strict";n.r(e);var i=n("302b"),a=n("362f");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("a722");var r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"5a2ad58a",null,!1,i["a"],void 0);e["default"]=c.exports},"347e":function(t,e,n){var i=n("e28c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("77ff2c93",i,!0,{sourceMap:!1,shadowMode:!1})},"362f":function(t,e,n){"use strict";n.r(e);var i=n("622e"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"4f06":function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},a=0;a<e.length;a++){var o=e[a],r=o[0],c=o[1],s=o[2],u=o[3],l={id:t+":"+a,css:c,media:s,sourceMap:u};i[r]?i[r].parts.push(l):n.push(i[r]={id:r,parts:[l]})}return n}n.r(e),n.d(e,"default",(function(){return f}));var a="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},r=a&&(document.head||document.getElementsByTagName("head")[0]),c=null,s=0,u=!1,l=function(){},d=null,p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t,e,n,a){u=n,d=a||{};var r=i(t,e);return h(r),function(e){for(var n=[],a=0;a<r.length;a++){var c=r[a],s=o[c.id];s.refs--,n.push(s)}e?(r=i(t,e),h(r)):r=[];for(a=0;a<n.length;a++){s=n[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete o[s.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],i=o[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(g(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var r=[];for(a=0;a<n.parts.length;a++)r.push(g(n.parts[a]));o[n.id]={id:n.id,refs:1,parts:r}}}}function v(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function g(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(u)return l;i.parentNode.removeChild(i)}if(p){var a=s++;i=c||(c=v()),e=m.bind(null,i,a,!1),n=m.bind(null,i,a,!0)}else i=v(),e=x.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,i){var a=n?"":A(i.css);if(t.styleSheet)t.styleSheet.cssText=b(e,a);else{var o=document.createTextNode(a),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function x(t,e){var n=A(e.css),i=e.media,a=e.sourceMap;if(i&&t.setAttribute("media",i),d.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var w=/%\?([+-]?\d+(\.\d+)?)\?%/g,y=/\.\?%PAGE\?%/g,_=/\?%PAGE\?%\[data-v-[a-z0-9]{8}\]/g,C=/uni-page-body\[data-v-[a-z0-9]{8}\]/g,k=/var\(--status-bar-height\)/gi,I=/var\(--window-top\)/gi,S=/var\(--window-bottom\)/gi,F=/var\(--window-left\)/gi,L=/var\(--window-right\)/gi;function A(t){var e=function(){var t="function"===typeof getApp&&getApp();return t&&t.$route&&t.$route.meta&&t.$route.meta.name||""}();if("undefined"!==typeof uni&&!uni.canIUse("css.var")){var n=function(){var t="function"===typeof getApp&&getApp();if(t&&t.$route&&t.$route.meta&&t.$route.meta.name)return{top:t.$route.meta.windowTop,bottom:t.$route.meta.isTabBar?50:0};return{top:0,bottom:0}}();t=t.replace(k,"0px").replace(I,n.top+"px").replace(S,n.bottom+"px").replace(F,"0px").replace(L,"0px")}return t.replace(_,e).replace(y,"").replace(C,"body."+e+" uni-page-body").replace(/\{[\s\S]+?\}|@media.+?\{/g,(function(t){return"undefined"===typeof uni?t:t.replace(w,(function(t,e){return uni.upx2px(e)+"px"}))}))}},"5b41":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={vTabs:n("320f").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-tabs",{staticClass:"tab",attrs:{tabs:t.tabs},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab.apply(void 0,arguments)}},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}}),n("v-uni-view",{ref:"coupon",staticClass:"coupon"},t._l(t.couponList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCoupon(i)}}},[n("v-uni-view",{staticClass:"top"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-image",{staticClass:"icon",attrs:{src:e.icon,mode:"widthFix"}}),n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))])],1),1==e.type?n("v-uni-view",{staticClass:"text"},[t._v("天天可领")]):2==e.type?n("v-uni-view",{staticClass:"text"},[t._v("限时秒杀")]):t._e()],1),n("v-uni-view",{staticClass:"right"},[t._v("免费领取")])],1),n("v-uni-view",{staticClass:"bottom"},[n("v-uni-image",{attrs:{src:e.bannerPic,mode:"widthFix"}})],1)],1)})),1)],1)},o=[]},"60e8":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.v-tabs[data-v-5a2ad58a]{width:100%;box-sizing:border-box;overflow:hidden;height:%?200?%;display:flex;align-items:center;background-color:#fff}.v-tabs uni-scroll-view[data-v-5a2ad58a]{width:%?750?%}.v-tabs__container[data-v-5a2ad58a]{min-width:100%;position:relative;display:inline-flex;align-items:center;white-space:nowrap;overflow:hidden}.v-tabs__container-item[data-v-5a2ad58a]{display:flex;flex-direction:column;align-items:center;height:100%;position:relative;z-index:10;transition:all .2s;white-space:nowrap;flex-wrap:wrap;justify-content:center;padding:0 %?35?%;padding-bottom:%?10?%}.v-tabs__container-item uni-image[data-v-5a2ad58a]{width:%?80?%;height:%?80?%;display:block}.v-tabs__container-line[data-v-5a2ad58a]{position:absolute;bottom:0;transition:all .2s linear}.v-tabs__container-pills[data-v-5a2ad58a]{position:absolute;transition:all .2s linear;z-index:9}\n/* /deep/ ::-webkit-scrollbar {\n  display: none;\n} */',""]),t.exports=e},"622e":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("ac1f");var i={props:{value:{type:Number,default:0},tabs:{type:Array,default:function(){return[]}},bgColor:{type:String,default:"#fff"},padding:{type:String,default:"0"},color:{type:String,default:"#333"},activeColor:{type:String,default:"#2979ff"},fontSize:{type:String,default:"28rpx"},activeFontSize:{type:String,default:"32rpx"},bold:{type:Boolean,default:!0},scroll:{type:Boolean,default:!0},height:{type:String,default:"70rpx"},lineColor:{type:String,default:"#2979ff"},lineHeight:{type:String,default:"10rpx"},lineScale:{type:Number,default:.5},lineRadius:{type:String,default:"10rpx"},pills:{type:Boolean,deafult:!1},pillsColor:{type:String,default:"#2979ff"},pillsBorderRadius:{type:String,default:"10rpx"},field:{type:String,default:""},fixed:{type:Boolean,default:!1},paddingItem:{type:String,default:"0 22rpx"}},data:function(){return{elId:"",lineWidth:30,currentWidth:0,lineLeft:0,pillsLeft:0,scrollLeft:0,containerWidth:0,current:0}},watch:{value:function(t){var e=this;this.current=t,this.$nextTick((function(){e.getTabItemWidth()}))},current:function(t){this.$emit("input",t)},tabs:function(t){var e=this;this.$nextTick((function(){e.getTabItemWidth()}))}},methods:{randomString:function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=e.length,i="",a=0;a<t;a++)i+=e.charAt(Math.floor(Math.random()*n));return i},change:function(t){this.current!==t&&(this.current=t,this.$emit("change",t))},getTabItemWidth:function(){var t=this,e=uni.createSelectorQuery().in(this);e.select("#".concat(this.elId)).boundingClientRect((function(e){!t.containerWidth&&e&&(t.containerWidth=e.width)})).exec(),e.selectAll(".v-tabs__container-item").boundingClientRect((function(e){if(e){var n=0,i=0;if(e)for(var a=0;a<e.length;a++)if(a<t.current)n+=e[a].width;else{if(a!=t.current)break;i=e[a].width}t.currentWidth=i,t.lineWidth=i*t.lineScale*1,t.lineLeft=n+i/2,t.pillsLeft=n,t.scroll&&(t.scrollLeft=t.lineLeft-t.containerWidth/2)}})).exec()}},mounted:function(){var t=this;this.elId="xfjpeter_"+this.randomString(),this.current=this.value,this.$nextTick((function(){t.getTabItemWidth()}))}};e.default=i},7640:function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e25e"),n("14d9");var i={data:function(){return{current:0,tabs:[{icon:"/static/all.png",text:"全部",tabId:0},{icon:"/static/ele.png",text:"饿了么",tabId:1},{icon:"/static/meituan.png",text:"美团",tabId:2},{icon:"/static/11.png",text:"双十一",tabId:5},{icon:"/static/jd.png",text:"京东",tabId:3},{icon:"/static/vip.png",text:"VIP会员",tabId:4}],couponList:[],coupons:[{name:"饿了么红包",icon:"/static/coupon/ele.png",bannerPic:"/static/coupon/ele_banner.png",url:"https://s.click.ele.me/frZOjvu",type:1,tabId:1,minapp:{appid:"wxece3a9a4c82f58c9",path:"pages/sharePid/web/index?scene=https://s.click.ele.me/wR9ecuu"}},{name:"美团外卖红包",icon:"/static/coupon/meituan.png",bannerPic:"/static/coupon/meituan_banner.png",url:"https://runion.meituan.com/url?key=cd23768d09c339d1641b2738df39aa67&url=https%3A%2F%2Fi.meituan.com%2Fawp%2Fhfe%2Fblock%2Fa945391288b790d558b7%2F78716%2Findex.html%3Fappkey%3Dcd23768d09c339d1641b2738df39aa67%3Ajuhe&sid=juhe",type:1,tabId:2,minapp:{appid:"wxde8ac0a21135c07d",path:"/index/pages/h5/h5?weburl=https%3A%2F%2Frunion.meituan.com%2Furl%3Fkey%3D591ec05930c57331c1212b936e6785c1%26url%3Dhttps%253A%252F%252Fi.meituan.com%252Fawp%252Fhfe%252Fblock%252Fa13b87919a9ace9cfab4%252F89400%252Findex.html%253Fappkey%253D591ec05930c57331c1212b936e6785c1%253A000001%26sid%3D000001&lch=cps:waimai:5:591ec05930c57331c1212b936e6785c1:000001&f_token=1&f_userId=1"}},{name:"爱奇艺会员",icon:"/static/coupon/vip.png",bannerPic:"/static/coupon/vip_banner.png",url:"https://p.pinduoduo.com/VJ7bHo5d",type:2,tabId:4},{name:"三只松鼠大礼包",icon:"/static/coupon/jd.png",bannerPic:"/static/coupon/sanzhisongshu.png",url:"https://u.jd.com/tFDejq",type:0,tabId:3},{name:"饿了么果蔬",icon:"/static/coupon/ele.png",bannerPic:"/static/coupon/ele_guosu.png",url:"https://s.click.ele.me/RpRFhvu",type:1,tabId:1,minapp:{appid:"wxece3a9a4c82f58c9",path:"pages/sharePid/web/index?scene=https://s.click.ele.me/I4Yacuu"}},{name:"抽红包立减",icon:"/static/11.png",bannerPic:"/static/coupon/11.jpg",url:"https://s.click.taobao.com/Gcs9vuu",type:2,tabId:5}]}},onLoad:function(t){var e=this.$route.query.tabId?parseInt(this.$route.query.tabId):0;for(var n in this.tabs)e==this.tabs[n].tabId&&(this.current=parseInt(n));this.changeTab(this.current)},onShareAppMessage:function(t){var e=[{title:"美团饿了么大额红包，每日可领！",path:"/pages/index/index"},{title:"吃了这么多年外卖，你知道这个秘密吗？",path:"/pages/index/index"}];return e[Math.floor(Math.random()*e.length)]},methods:{changeTab:function(e){var n=this;if(t.log("当前选中的项："+e),this.couponList=[],uni.showLoading({title:"获取优惠中"}),0==e)this.couponList=this.coupons;else for(var i in this.coupons)this.coupons[i].tabId==this.tabs[e].tabId&&this.couponList.push(this.coupons[i]);this.$nextTick((function(){n.$refs.coupon.scrollTop=0})),setTimeout((function(){uni.hideLoading()}),500)},toCoupon:function(e){t.log(this.couponList[e]),window.location.href=this.couponList[e].url}}};e.default=i}).call(this,n("5a52")["default"])},"90be":function(t,e,n){"use strict";n.r(e);var i=n("7640"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},a722:function(t,e,n){"use strict";var i=n("e0de"),a=n.n(i);a.a},db1a:function(t,e,n){"use strict";n.r(e);var i=n("5b41"),a=n("90be");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("f070");var r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"fc2d4772",null,!1,i["a"],void 0);e["default"]=c.exports},e0de:function(t,e,n){var i=n("60e8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("e6caf7b0",i,!0,{sourceMap:!1,shadowMode:!1})},e28c:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-fc2d4772]{background-color:#f8f8f8}body.?%PAGE?%[data-v-fc2d4772]{background-color:#f8f8f8}.container[data-v-fc2d4772]{font-size:14px;line-height:24px;position:relative}.container .tab[data-v-fc2d4772]{position:fixed;top:var(--window-top);left:0;z-index:9999}.container .coupon[data-v-fc2d4772]{padding-top:%?200?%}.container .coupon .item[data-v-fc2d4772]{background-color:#fff;margin:%?30?%;border-radius:%?10?%;padding:0 %?30?% %?30?% %?30?%}.container .coupon .item .top[data-v-fc2d4772]{height:%?116?%;display:flex;align-items:center;justify-content:space-between}.container .coupon .item .top .left[data-v-fc2d4772]{height:%?116?%;width:%?400?%;display:flex;align-items:center;justify-content:space-between}.container .coupon .item .top .left .content[data-v-fc2d4772]{width:100%}.container .coupon .item .top .left .icon[data-v-fc2d4772]{display:inline-block;vertical-align:bottom;width:%?52?%;height:auto}.container .coupon .item .top .left .name[data-v-fc2d4772]{text-align:left;display:inline-block;vertical-align:bottom;font-size:%?34?%;color:#000;line-height:%?50?%;font-weight:700;margin-left:%?15?%}.container .coupon .item .top .left .text[data-v-fc2d4772]{width:%?150?%;height:%?38?%;line-height:%?38?%;text-align:center;font-size:%?24?%;color:#61300e;background:linear-gradient(90deg,#f9db8d,#f8d98a);border-radius:%?6?%}.container .coupon .item .top .right[data-v-fc2d4772]{width:%?170?%;height:%?60?%;border-radius:%?30?%;background:linear-gradient(90deg,#ec6f43,#ea4a36);color:#fff;font-size:%?28?%;line-height:%?60?%;text-align:center}.container .coupon .item .bottom[data-v-fc2d4772]{height:auto;width:100%}.container .coupon .item .bottom uni-image[data-v-fc2d4772]{display:block;width:100%;height:auto}',""]),t.exports=e},f070:function(t,e,n){"use strict";var i=n("347e"),a=n.n(i);a.a}}]);