(this["webpackJsonpreact-hw-04-movies"]=this["webpackJsonpreact-hw-04-movies"]||[]).push([[3],{34:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(38);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},35:function(t,e,r){"use strict";r.d(e,"e",(function(){return s})),r.d(e,"b",(function(){return f})),r.d(e,"a",(function(){return h})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return p}));var n=r(40),o=r.n(n),i=r(41),a="https://api.themoviedb.org/3/",c="18f3850d2e2b26a030fc97b3b8448670";function u(){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(o.a.mark((function t(){var e,r,n,i=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",r=i.length>1&&void 0!==i[1]?i[1]:{},t.next=4,fetch(e,r);case 4:if(!(n=t.sent).ok){t.next=11;break}return t.next=8,n.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return u("".concat(a,"trending/all/day?api_key=").concat(c,"&page=").concat(t),{params:3})}function f(t){return u("".concat(a,"movie/").concat(t,"?api_key=").concat(c))}function h(t){return u("".concat(a,"movie/").concat(t,"/credits?api_key=").concat(c,"&language=en-US"))}function d(t){return u("".concat(a,"movie/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))}function p(t,e){return u("".concat(a,"search/movie?api_key=").concat(c,"&query=").concat(t,"&language=en-US&page=1&include_adult=false&page=").concat(e))}},36:function(t,e,r){"use strict";r(0);var n=r.p+"static/media/cat.65c09fc9.jpg",o=r(1);e.a=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("img",{src:n,width:"150",alt:"Cat-cry"})})}},38:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(39);function o(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},39:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},40:function(t,e,r){t.exports=r(42)},41:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},42:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(F){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function y(){}function b(){}function m(){}var g={};u(g,i,(function(){return this}));var j=Object.getPrototypeOf,x=j&&j(j(G([])));x&&x!==r&&n.call(x,i)&&(g=x);var w=m.prototype=y.prototype=Object.create(g);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function G(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return b.prototype=m,u(w,"constructor",m),u(m,"constructor",b),b.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=G,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},70:function(t,e,r){t.exports={button:"MovieDetails_button__1iJHg"}},88:function(t,e,r){"use strict";r.r(e);var n=r(34),o=r(2),i=r(0),a=r(5),c=r(35),u=r(36),l=r(70),s=r.n(l),f=r(1),h=Object(i.lazy)((function(){return r.e(2).then(r.bind(null,71))})),d=Object(i.lazy)((function(){return r.e(4).then(r.bind(null,72))}));e.default=function(){var t,e,r,l,p,v,y,b,m,g,j,x,w,O=Object(o.f)(),L=Object(o.g)(),_=Object(o.h)().moviesId,E=Object(o.i)(),k=E.url,S=E.path,G=Object(i.useState)(null),A=Object(n.a)(G,2),F=A[0],N=A[1];Object(i.useEffect)((function(){c.b(_).then((function(t){N(t)}))}),[_]);return Object(f.jsxs)(f.Fragment,{children:[F&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{className:s.a.button,type:"button",onClick:function(){L&&L.state&&L.state.form?O.push(L.state.form.location):O.push("/")},children:null!==(t=null===L||void 0===L||null===(e=L.state)||void 0===e||null===(r=e.form)||void 0===r?void 0:r.label)&&void 0!==t?t:"Go back"}),Object(f.jsx)("hr",{}),F.poster_path?Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(F.poster_path),alt:" ",width:"200px"}):Object(f.jsx)(u.a,{}),Object(f.jsx)("h3",{children:"Genres: "}),F.genres&&F.genres.map((function(t){return Object(f.jsx)("li",{children:t.name},t.id)})),Object(f.jsx)("h3",{children:F.title}),Object(f.jsxs)("p",{children:["Author: ",F.title]}),Object(f.jsxs)("p",{children:["Overview: ",F.overview]}),Object(f.jsxs)("p",{children:["tmbd: ",Object(f.jsx)("span",{children:F.vote_average})]}),Object(f.jsx)("hr",{}),Object(f.jsx)("p",{children:"Additional information"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(a.c,{to:{pathname:"".concat(k,"/cast"),state:{form:{location:null===L||void 0===L||null===(l=L.state)||void 0===l||null===(p=l.form)||void 0===p?void 0:p.location,label:null!==(v=null===L||void 0===L||null===(y=L.state)||void 0===y||null===(b=y.form)||void 0===b?void 0:b.label)&&void 0!==v?v:"Go back"}}},children:"Cast"})},_),Object(f.jsx)("li",{children:Object(f.jsx)(a.c,{to:{pathname:"".concat(k,"/reviews"),state:{form:{location:null===L||void 0===L||null===(m=L.state)||void 0===m||null===(g=m.form)||void 0===g?void 0:g.location,label:null!==(j=null===L||void 0===L||null===(x=L.state)||void 0===x||null===(w=x.form)||void 0===w?void 0:w.label)&&void 0!==j?j:"Go back"}}},children:"Reviews"})})]})]}),Object(f.jsx)("hr",{}),Object(f.jsxs)(i.Suspense,{fallback:Object(f.jsx)("h1",{children:"Loader ..."}),children:[Object(f.jsx)(o.a,{path:"".concat(S,"/cast"),exact:!0,children:F&&Object(f.jsx)(h,{})}),Object(f.jsx)(o.a,{path:"".concat(S,"/reviews"),exact:!0,children:F&&Object(f.jsx)(d,{})})]})]})}}}]);
//# sourceMappingURL=MovieDetails.9adfe78e.chunk.js.map