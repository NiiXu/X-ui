(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{337:function(t,s){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},338:function(t,s,o){var n=o(2),e=o(30),a=o(17),r=o(337),c=n("".replace),i="["+r+"]",l=RegExp("^"+i+i+"*"),f=RegExp(i+i+"*$"),d=function(t){return function(s){var o=a(e(s));return 1&t&&(o=c(o,l,"")),2&t&&(o=c(o,f,"")),o}};t.exports={start:d(1),end:d(2),trim:d(3)}},339:function(t,s,o){"use strict";var n=o(4),e=o(338).trim;n({target:"String",proto:!0,forced:o(340)("trim")},{trim:function(){return e(this)}})},340:function(t,s,o){var n=o(83).PROPER,e=o(3),a=o(337);t.exports=function(t){return e((function(){return!!a[t]()||"​᠎"!=="​᠎"[t]()||n&&a[t].name!==t}))}},342:function(t,s,o){"use strict";var n=o(12),e=o(0),a=o(2),r=o(112),c=o(18),i=o(9),l=o(181),f=o(31),d=o(85),u=o(182),v=o(3),p=o(51).f,g=o(32).f,m=o(13).f,C=o(345),_=o(338).trim,h=e.Number,w=h.prototype,x=e.TypeError,b=a("".slice),N=a("".charCodeAt),E=function(t){var s=u(t,"number");return"bigint"==typeof s?s:y(s)},y=function(t){var s,o,n,e,a,r,c,i,l=u(t,"number");if(d(l))throw x("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=_(l),43===(s=N(l,0))||45===s){if(88===(o=N(l,2))||120===o)return NaN}else if(48===s){switch(N(l,1)){case 66:case 98:n=2,e=49;break;case 79:case 111:n=8,e=55;break;default:return+l}for(r=(a=b(l,2)).length,c=0;c<r;c++)if((i=N(a,c))<48||i>e)return NaN;return parseInt(a,n)}return+l};if(r("Number",!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var O,I=function(t){var s=arguments.length<1?0:h(E(t)),o=this;return f(w,o)&&v((function(){C(o)}))?l(Object(s),o,I):s},R=n?p(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),S=0;R.length>S;S++)i(h,O=R[S])&&!i(I,O)&&m(I,O,g(h,O));I.prototype=w,w.constructor=I,c(e,"Number",I)}},345:function(t,s,o){var n=o(2);t.exports=n(1..valueOf)},350:function(t,s,o){},351:function(t,s,o){},358:function(t,s,o){"use strict";o(350)},359:function(t,s,o){"use strict";o(351)},367:function(t,s,o){"use strict";o(342),o(8),o(111);var n={name:"XRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){console.log("rowClass");var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(s){s.gutter=t.gutter}))}},e=(o(358),o(50)),a=Object(e.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"5098ea0d",null);s.a=a.exports},368:function(t,s,o){"use strict";var n=o(41),e=(o(113),o(8),o(111),o(183),o(342),o(184),function(t){var s=Object.keys(t),o=!0;return s.forEach((function(t){["span","offset"].includes(t)||(o=!1)})),o}),a={name:"XCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:e},narrowPc:{type:Object,validator:e},pc:{type:Object,validator:e},widePc:{type:Object,validator:e}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var o=[];return t.span&&o.push("col-".concat(s).concat(t.span)),t.offset&&o.push("offset-".concat(s).concat(t.offset)),o}},computed:{colClass:function(){var t=this.span,s=this.offset,o=this.ipad,e=this.narrowPc,a=this.pc,r=this.widePc,c=this.createClasses;return[].concat(Object(n.a)(c({span:t,offset:s})),Object(n.a)(c(o,"ipad-")),Object(n.a)(c(e,"narrow-pc-")),Object(n.a)(c(a,"pc-")),Object(n.a)(c(r,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},r=(o(359),o(50)),c=Object(r.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"4e400b90",null);s.a=c.exports},401:function(t,s,o){},447:function(t,s,o){"use strict";o(401)},478:function(t,s,o){"use strict";o.r(s);o(339),o(29),o(82);var n=o(367),e=o(368),a={components:{"x-row":n.a,"x-col":e.a},data:function(){return{content:'\n          * {\n            box-sizing: border-box;\n          }\n\n          <g-row class="demoRow" gutter="10">\n            <g-col span="8">\n              <div class="demoCol">8</div>\n            </g-col>\n            <g-col span="8" offset="8">\n              <div class="demoCol">8</div>\n            </g-col>\n          </g-row>\n          <g-row class="demoRow" gutter="10">\n            <g-col span="6" offset="6">\n              <div class="demoCol">6</div>\n            </g-col>\n            <g-col span="6" offset="6">\n              <div class="demoCol">6</div>\n            </g-col>\n          </g-row>\n          <g-row class="demoRow" gutter="10">\n            <g-col span="4">\n              <div class="demoCol">4</div>\n            </g-col>\n            <g-col span="4" offset="4">\n              <div class="demoCol">4</div>\n            </g-col>\n            <g-col span="4" offset="8">\n              <div class="demoCol">4</div>\n            </g-col>\n          </g-row>\n          <g-row class="demoRow" gutter="10">\n            <g-col span="2">\n              <div class="demoCol">2</div>\n            </g-col>\n            <g-col span="2" offset="2">\n              <div class="demoCol">2</div>\n            </g-col>\n            <g-col span="2">\n              <div class="demoCol">2</div>\n            </g-col>\n            <g-col span="2" offset="2">\n              <div class="demoCol">2</div>\n            </g-col>\n            <g-col span="2">\n              <div class="demoCol">2</div>\n            </g-col>\n            <g-col span="2" offset="2">\n              <div class="demoCol">2</div>\n            </g-col>\n            <g-col span="2">\n              <div class="demoCol">2</div>\n            </g-col>\n            <g-col span="2" offset="2">\n              <div class="demoCol">2</div>\n            </g-col>\n          </g-row>\n      '.replace(/^ {8}/gm,"").trim()}}},r=(o(447),o(50)),c=Object(r.a)(a,(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticStyle:{"padding-top":"16px"}},[o("h2",[t._v("设置空隙")]),t._v(" "),t._m(0),t._v(" "),o("x-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[o("x-col",{attrs:{span:"8"}},[o("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),o("x-col",{attrs:{span:"8",offset:"8"}},[o("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),o("x-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[o("x-col",{attrs:{span:"6",offset:"6"}},[o("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),o("x-col",{attrs:{span:"6",offset:"6"}},[o("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),o("x-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[o("x-col",{attrs:{span:"4"}},[o("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),o("x-col",{attrs:{span:"4",offset:"4"}},[o("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),o("x-col",{attrs:{span:"4",offset:"8"}},[o("div",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),o("x-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[o("x-col",{attrs:{span:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("x-col",{attrs:{span:"2",offset:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("x-col",{attrs:{span:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("x-col",{attrs:{span:"2",offset:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("x-col",{attrs:{span:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("x-col",{attrs:{span:"2",offset:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("x-col",{attrs:{span:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("x-col",{attrs:{span:"2",offset:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])])],1),t._v(" "),t._m(1),t._v(" "),o("pre",[o("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])}],!1,null,"1914360f",null);s.default=c.exports}}]);