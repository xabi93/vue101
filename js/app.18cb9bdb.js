(function(t){function e(e){for(var i,s,u=e[0],l=e[1],a=e[2],p=0,d=[];p<u.length;p++)s=u[p],r[s]&&d.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={1:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="https://xabi93.github.io/vue101/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var c=l;o.push([3,0]),n()})({3:function(t,e,n){t.exports=n("Vtdi")},"A+Bx":function(t,e,n){},EDI0:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);n("a1Th"),n("VRzm");var i=n("Kw5r"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("title-header"),n("input-field",{on:{itemSubmited:t.addItem}}),n("items-list",{attrs:{items:t.items},on:{removeItem:t.removeItem}})],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box",class:t.inputStatus},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input",domProps:{value:t.title},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),t.titleSubmited(e)):null},input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Description")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],ref:"description",staticClass:"input",domProps:{value:t.description},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),t.todoSubmited(e)):null},input:function(e){e.target.composing||(t.description=e.target.value)}}})])])},u=[],l={name:"input-field",data:function(){return{title:"",description:"",error:!1}},computed:{inputStatus:function(){if(this.error)return["error"]}},methods:{titleSubmited:function(){this.$refs.description.focus()},todoSubmited:function(){""!==this.title&&""!==this.description?(this.error=!1,this.$emit("itemSubmited",{title:this.title,description:this.description}),this.title="",this.description=""):this.error=!0}},watch:{title:function(){this.error=!1},description:function(){this.error=!1}}},a=l,c=(n("WWbi"),n("KHd+")),p=Object(c["a"])(a,s,u,!1,null,"6df0cf4c",null),d=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items-list"},[n("h2",{staticClass:"subtitle"},[t._v("Tasks list")]),t.hasItems?n("div",[n("table",{staticClass:"table is-fullwidth"},[n("tbody",t._l(t.items,function(e,i){return n("tr",{key:i},[n("th",[n("item",{key:i,staticClass:"item",attrs:{title:e.title,description:e.description},on:{removeMe:function(e){t.removeItem(i)}}})],1)])}))])]):n("div",[n("h3",[t._v("Great! you don't have any task")])])])},m=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v(t._s(t._f("uppercase")(t.title))+": ")]),n("span",{domProps:{textContent:t._s(t.description)}}),n("button",{on:{click:function(e){return e.preventDefault(),t.removeMe(e)}}},[t._v("X")])])},h=[],b={name:"item",props:{title:{type:String,required:!0},description:{type:String}},methods:{removeMe:function(t){this.$emit("removeMe",t)}}},y=b,_=Object(c["a"])(y,v,h,!1,null,null,null),g=_.exports,x={name:"input-field",components:{Item:g},props:{items:{type:Array,default:function(){return[]}}},computed:{hasItems:function(){return this.items.length>0}},methods:{removeItem:function(t){this.$emit("removeItem",t)}}},C=x,S=(n("lDiS"),Object(c["a"])(C,f,m,!1,null,null,null)),j=S.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-primary"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("\n        Todo app\n      ")])])])])}],I={},O=Object(c["a"])(I,k,w,!1,null,null,null),$=O.exports,E={name:"App",components:{InputField:d,ItemsList:j,TitleHeader:$},data:function(){return{items:[]}},methods:{addItem:function(t){this.items.push(t)},removeItem:function(t){this.items.splice(t,1)}},mounted:function(){alert("Welcome to the super todo app!")}},P=E,D=(n("ZL7j"),Object(c["a"])(P,r,o,!1,null,null,null)),M=D.exports;i["a"].config.productionTip=!1,i["a"].filter("uppercase",function(t){return t?(t=t.toString(),t.toUpperCase()):""}),new i["a"]({render:function(t){return t(M)}}).$mount("#app")},WWbi:function(t,e,n){"use strict";var i=n("nsxz"),r=n.n(i);r.a},ZL7j:function(t,e,n){"use strict";var i=n("EDI0"),r=n.n(i);r.a},lDiS:function(t,e,n){"use strict";var i=n("A+Bx"),r=n.n(i);r.a},nsxz:function(t,e,n){}});
//# sourceMappingURL=app.18cb9bdb.js.map