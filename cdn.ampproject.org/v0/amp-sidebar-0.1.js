;
(self.AMP=self.AMP||[]).push({m:0,v:"2303151529000",n:"amp-sidebar",ev:"0.1",l:!0,f:function(t,i){!function(){function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t,i){return(n=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function r(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&n(t,i)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return i(t)}function a(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(i){var e=s(this).constructor;n=Reflect.construct(r,arguments,e)}else n=r.apply(this,arguments);return o(this,n)}}function h(t){return t?Array.prototype.slice.call(t):[]}var u=Array.isArray;function f(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=t[n];return r}function c(t,i){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,i){if(t){if("string"==typeof t)return f(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,i):void 0}}(t))||i&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,v,d=Object.prototype;function m(t){return 1==(null==t?void 0:t.nodeType)}function p(t,i,n,r,s,e,o,a,h,u,f){return t}function b(t){return(t.ownerDocument||t).defaultView}function y(t,i){return t.replace(/^|,/g,"$&".concat(i," "))}function w(t,i){return t.closest?t.closest(i):function(t,i,n){var r;for(r=t;r&&void 0!==r;r=r.parentElement)if(i(r))return r;return null}(t,(function(t){return function(t,i){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!n&&n.call(t,i)}(t,i)}))}function g(t){return function(t,i){for(var n=[],r=t.firstElementChild;r;r=r.nextElementSibling)void 0,o=void 0,"string"==typeof(e=s=r)?o=e:m(e)&&(o=e.tagName),!(o&&o.toLowerCase().startsWith("i-")||s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("placeholder")||s.hasAttribute("fallback")||s.hasAttribute("overflow")))&&n.push(r);var s,e,o;return n}(t)}function k(t){var i=t.isConnected;if(void 0!==i)return i;for(var n=t;(n=x(n)).host;)n=n.host;return n.nodeType===Node.DOCUMENT_NODE}function x(t){if(Node.prototype.getRootNode)return t.getRootNode();var i,n;for(i=t;i.parentNode&&(!(n=i)||"I-AMPHTML-SHADOW-ROOT"!=n.tagName&&(11!=n.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(n)));i=i.parentNode);return i}function M(t){try{t.focus()}catch(t){}}function A(t){var i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;var n=t.message,r=t.stack,s=new Error(n);for(var e in t)s[e]=t[e];return s.stack=r,s}function O(t){for(var i,n=null,r="",s=c(arguments,!0);!(i=s()).done;){var e=i.value;e instanceof Error&&!n?n=A(e):(r&&(r+=" "),r+=e)}return n?r&&(n.message=r+": "+n.message):n=new Error(r),n}function S(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function E(t){var i=O.apply(null,arguments);setTimeout((function(){throw S(i),i}))}function j(t){try{for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return t.apply(null,n)}catch(t){E(t)}}d.hasOwnProperty,d.toString;var D=["Webkit","webkit","Moz","moz","ms","O","o"],X={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function z(t,i,n,r,s){var e=function(t,i,n){if(i.startsWith("--"))return i;var r;v||(r=Object.create(null),v=r);var s=v[i];if(!s||n){if(s=i,void 0===t[i]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),o=function(t,i){for(var n=0;n<D.length;n++){var r=D[n]+i;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(s=o)}n||(v[i]=s)}return s}(t.style,i,s);if(e){var o,a=r?n+r:n;t.style.setProperty((o=e.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),D.some((function(t){return o.startsWith(t+"-")}))?"-".concat(o):o),a)}}function R(t,i){for(var n in i)z(t,n,i[n])}function P(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}function _(t,i){return t.getComputedStyle(i)||X}var I=/vertical/,T=new WeakMap,C=new WeakMap,W=new WeakMap;function B(t){var i=T.get(t);return i||(i=new t.ResizeObserver(L),T.set(t,i)),i}function L(t){for(var i=new Set,n=t.length-1;n>=0;n--){var r=t[n],s=r.target;if(!i.has(s)){i.add(s);var e=C.get(s);if(e){W.set(s,r);for(var o=0;o<e.length;o++){var a=e[o],h=a.callback;N(a.type,h,r)}}}}}function N(t,i,n){if(0==t){var r=n.contentRect,s=r.height;j(i,{width:r.width,height:s})}else if(1==t){var e,o=n.borderBoxSize;if(o)e=o.length>0?o[0]:{inlineSize:0,blockSize:0};else{var a,h,u=n.target,f=b(u),c=I.test(_(f,u).writingMode),l=u,v=l.offsetHeight,d=l.offsetWidth;c?(h=d,a=v):(a=d,h=v),e={inlineSize:a,blockSize:h}}j(i,e)}}var Y=[],V="__AMP_MODAL_SAVED_TAB_INDEX";function q(t){for(var i=[],n=t;n;n=n.parentNode||n.host)i.push(n);return i}function F(t,i,n){null===n||null==n?t.removeAttribute(i):t.setAttribute(i,n)}var H="i-amphtml-element",U=function(t){return t.unmount()};function $(t,i,n,r){for(var s,e=u(s=t)?s:[s],o=0;o<e.length;o++)G(e[o],i,n,r)}function G(t,i,n,r){if(i&&t.classList.contains(H)){var s=t;if(j(r,s),!n){var e=s.getPlaceholder();return void(e&&G(e,!0,!1,r))}}for(var o=t.getElementsByClassName(H),a=null,h=0;h<o.length;h++){var u=o[h];if(n)j(r,u);else{a=a||[];for(var f=!1,c=0;c<a.length;c++)if(a[c].contains(u)){f=!0;break}f||(a.push(u),j(r,u))}}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var Z,J=self.__AMP_LOG;function K(t){return J.user||(J.user=Q()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(J.user.win,t)?J.userForEmbed||(J.userForEmbed=Q()):J.user}function Q(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function tt(t,i,n,r,s,e,o,a,h,u,f){return t}function it(t,i){return ot(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function nt(t,i){return ot(et(st(t)),i)}function rt(t,i){var n=et(st(t));return at(n,i)?ot(n,i):null}function st(t){return t.nodeType?(i=b(t),it(i,"ampdoc")).getAmpDoc(t):t;var i}function et(t){var i=st(t);return i.isSingleDoc()?i.win:i}function ot(t,i){tt(at(t,i));var n=function(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return n.obj||(tt(n.ctor),tt(n.context),n.obj=new n.ctor(n.context),tt(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function at(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var ht,ut=function(t){return nt(t,"owners")},ft=function(t){return ot(t,"timer")};function ct(t){if(void 0!==ht)return ht;ht=!1;try{var i={get passive(){return ht=!0,!1}};t.addEventListener("test-options",null,i),t.removeEventListener("test-options",null,i)}catch(t){}return ht}function lt(t,i){var n,r=function(t,i){if(void 0!==l?l:l=function(t){try{var i=t.ownerDocument,n=i.createElement("div"),r=i.createElement("div");return n.appendChild(r),n.querySelector(":scope div")===r}catch(t){return!1}}(t))return t.querySelector(y(i,":scope"));var n=function(t,i){var n=t.classList,r="i-amphtml-scoped";n.add(r);var s=y(":not([toolbar]) [autoscroll]",".".concat(r)),e=t.querySelectorAll(s);return n.remove(r),e}(t)[0];return void 0===n?null:n}(i,":not([toolbar]) [autoscroll]");if(r){var s=_(t.win,i)["overflow-y"];"scroll"==s||"auto"==s?(n=t,nt(n,"viewport")).animateScrollWithinParent(r,i,"center",0):K().error("AMP-SIDEBAR","for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work.")}}function vt(t,i){var n=ft(t);return n.promise(1).then((function(){return n.promise(i)}))}var dt=function(){function t(){this.te=null}var i=t.prototype;return i.add=function(t){var i=this;return this.te||(this.te=[]),this.te.push(t),function(){i.remove(t)}},i.remove=function(t){var i,n,r;this.te&&(n=t,-1!=(r=(i=this.te).indexOf(n))&&i.splice(r,1))},i.removeAll=function(){this.te&&(this.te.length=0)},i.fire=function(t){if(this.te)for(var i,n=c(this.te.slice(),!0);!(i=n()).done;)(0,i.value)(t)},i.getHandlerCount=function(){var t,i;return null!==(t=null===(i=this.te)||void 0===i?void 0:i.length)&&void 0!==t?t:0},t}(),mt=function(){function t(t,i,n){var r=this;this.xh=ft(t),this.Eh=i,this.Oh=n||0,this.Ph=-1,this.Th=0,this.kn=!1,this.Ih=function(){r.Mh()}}var i=t.prototype;return i.isPending=function(){return-1!=this.Ph},i.schedule=function(t){var i=t||this.Oh;this.kn&&i<10&&(i=10);var n=Date.now()+i;return(!this.isPending()||n-this.Th<-10)&&(this.cancel(),this.Th=n,this.Ph=this.xh.delay(this.Ih,i),!0)},i.Mh=function(){this.Ph=-1,this.Th=0,this.kn=!0,this.Eh(),this.kn=!1},i.cancel=function(){this.isPending()&&(this.xh.cancel(this.Ph),this.Ph=-1)},t}(),pt="__AMP_Gestures",bt=function(t,i,n,r){this.type=t,this.data=i,this.time=n,this.event=r},yt=function(){function t(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.En=t,this.HO=[],this.Ag=[],this.po=[],this.VO=[],this.GO=null;var r=t.ownerDocument.defaultView,s=ct(r);this.BO=i||s,this.FO=n,this.WO=!1,this.Mh=new mt(b(t),this.gp.bind(this)),this.XO=new dt,this.qO=Object.create(null),this.ZO=this.Xr.bind(this),this.$O=this.ts.bind(this),this.KO=this.Qr.bind(this),this.JO=this.Rg.bind(this),this.En.addEventListener("touchstart",this.ZO,!!s&&{passive:!0}),this.En.addEventListener("touchend",this.$O),this.En.addEventListener("touchmove",this.KO,!!s&&{passive:!0}),this.En.addEventListener("touchcancel",this.JO),this.QO=!1}t.get=function(i){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=i[pt];return s||(s=new t(i,n,r),i[pt]=s),s};var i=t.prototype;return i.cleanup=function(){this.En.removeEventListener("touchstart",this.ZO),this.En.removeEventListener("touchend",this.$O),this.En.removeEventListener("touchmove",this.KO),this.En.removeEventListener("touchcancel",this.JO),delete this.En[pt],this.Mh.cancel()},i.onGesture=function(t,i){var n=new t(this),r=n.getType(),s=this.qO[r];return s||(this.HO.push(n),s=new dt,this.qO[r]=s),s.add(i)},i.removeGesture=function(t){var i=new t(this).getType(),n=this.qO[i];if(n){n.removeAll();var r=function(t,n){for(var r=0;r<t.length;r++)if(t[r].getType()==i)return r;return-1}(this.HO);return!(r<0||(this.HO.splice(r,1),this.po.splice(r,1),this.VO.splice(r,1),this.Ag.splice(r,1),delete this.qO[i],0))}return!1},i.onPointerDown=function(t){return this.XO.add(t)},i.Xr=function(t){var i=Date.now();this.WO=!1,this.XO.fire(t);for(var n=0;n<this.HO.length;n++)this.po[n]||(this.VO[n]&&this.VO[n]<i&&this._g(n),this.HO[n].onTouchStart(t)&&this.kg(n));this.t_(t)},i.Qr=function(t){for(var i=Date.now(),n=0;n<this.HO.length;n++)this.Ag[n]&&(this.VO[n]&&this.VO[n]<i?this._g(n):this.HO[n].onTouchMove(t)||this._g(n));this.t_(t)},i.ts=function(t){for(var i=Date.now(),n=0;n<this.HO.length;n++)if(this.Ag[n])if(this.VO[n]&&this.VO[n]<i)this._g(n);else{this.HO[n].onTouchEnd(t);var r=!this.VO[n],s=this.VO[n]<i;this.GO==this.HO[n]||!r&&!s||this._g(n)}this.t_(t)},i.Rg=function(t){for(var i=0;i<this.HO.length;i++)this.i_(i);this.t_(t)},i.Bi=function(t,i){if(this.GO)t.acceptCancel();else{for(var n=Date.now(),r=0;r<this.HO.length;r++)this.HO[r]==t&&(this.po[r]=n+i,this.VO[r]=0);this.QO=!0}},i.n_=function(t,i){if(this.GO)t.acceptCancel();else for(var n=Date.now(),r=0;r<this.HO.length;r++)this.HO[r]==t&&(this.VO[r]=n+i)},i.r_=function(t){this.GO==t&&(this.GO=null,this.WO=!0)},i.o_=function(t,i,n){p(this.GO==t);var r=this.qO[t.getType()];r&&r.fire(new bt(t.getType(),i,Date.now(),n))},i.t_=function(t){var i=!!this.GO||this.WO;if(this.WO=!1,!i)for(var n=Date.now(),r=0;r<this.HO.length;r++)if(this.po[r]||this.VO[r]&&this.VO[r]>=n){i=!0;break}i?(t.stopPropagation(),this.BO||t.preventDefault()):this.FO&&t.stopPropagation(),this.QO&&(this.QO=!1,this.gp())},i.gp=function(){for(var t=Date.now(),i=-1,n=0;n<this.HO.length;n++)this.po[n]?(-1==i||this.po[n]>this.po[i])&&(i=n):this.VO[n]&&this.VO[n]<t&&this._g(n);if(-1!=i){for(var r=0,s=0;s<this.HO.length;s++)!this.po[s]&&this.Ag[s]&&(r=Math.max(r,this.VO[s]-t));r<2?this.a_(i):this.Mh.schedule(r)}},i.a_=function(t){for(var i=this.HO[t],n=0;n<this.HO.length;n++)n!=t&&this.i_(n);this.po[t]=0,this.VO[t]=0,this.GO=i,i.acceptStart()},i.kg=function(t){this.Ag[t]=!0,this.VO[t]=0},i._g=function(t){this.Ag[t]=!1,this.VO[t]=0,this.po[t]||this.HO[t].acceptCancel()},i.i_=function(t){this.po[t]=0,this._g(t)},t}(),wt=function(){function t(t,i){this.s_=t,this.Ly=i}var i=t.prototype;return i.getType=function(){return this.s_},i.signalReady=function(t){this.Ly.Bi(this,t)},i.signalPending=function(t){this.Ly.n_(this,t)},i.signalEnd=function(){this.Ly.r_(this)},i.signalEmit=function(t,i){this.Ly.o_(this,t,i)},i.acceptStart=function(){},i.acceptCancel=function(){},i.onTouchStart=function(t){return!1},i.onTouchMove=function(t){return!1},i.onTouchEnd=function(t){},t}();function gt(t,i,n){i<1&&(i=1);var r=t/i,s=.5+Math.min(i/33.34,.5);return r*s+n*(1-s)}Math.round(-16.67/Math.log(.95));var kt=function(t){r(n,t);var i=a(n);function n(t){return i.call(this,"swipe-x",t,!0,!1)}return n}(function(t){r(n,t);var i=a(n);function n(t,n,r,s){var e;return(e=i.call(this,t,n)).e_=r,e.u_=s,e.GO=!1,e.h_=0,e.c_=0,e.l_=0,e.m_=0,e.f_=0,e.p_=0,e.Bl=0,e.d_=0,e.v_=0,e.y_=0,e.g_=0,e}var s=n.prototype;return s.onTouchStart=function(t){var i=t.touches;return!!(this.GO&&i&&i.length>1)||!(!i||1!=i.length)&&(this.Bl=Date.now(),this.h_=i[0].clientX,this.c_=i[0].clientY,!0)},s.onTouchMove=function(t){var i=t.touches;if(i&&i.length>=1){var n=i[0],r=n.clientX,s=n.clientY;if(this.l_=r,this.m_=s,this.GO)this.b_(!1,!1,t);else{var e=Math.abs(r-this.h_),o=Math.abs(s-this.c_);if(this.e_&&this.u_)(e>=8||o>=8)&&this.signalReady(-10);else if(this.e_){if(e>=8&&e>o)this.signalReady(-10);else if(o>=8)return!1}else{if(!this.u_)return!1;if(o>=8&&o>e)this.signalReady(-10);else if(e>=8)return!1}}return!0}return!1},s.onTouchEnd=function(t){var i=t.touches;i&&0==i.length&&this.x_(t)},s.acceptStart=function(){this.GO=!0,this.f_=this.h_,this.p_=this.c_,this.v_=this.Bl,this.h_=this.l_,this.c_=this.m_,this.b_(!0,!1,null)},s.acceptCancel=function(){this.GO=!1},s.b_=function(t,i,n){this.d_=Date.now();var r=this.d_-this.v_;if(!i&&r>4||i&&r>16){var s=gt(this.l_-this.f_,r,this.y_),e=gt(this.m_-this.p_,r,this.g_);(!i||r>32||0!=s||0!=e)&&(this.y_=Math.abs(s)>1e-4?s:0,this.g_=Math.abs(e)>1e-4?e:0),this.f_=this.l_,this.p_=this.m_,this.v_=this.d_}this.signalEmit({first:t,last:i,time:this.d_,deltaX:this.l_-this.h_,deltaY:this.m_-this.c_,startX:this.h_,startY:this.c_,lastX:this.l_,lastY:this.m_,velocityX:this.y_,velocityY:this.g_},n)},s.x_=function(t){this.GO&&(this.GO=!1,this.b_(!1,!0,t),this.signalEnd())},n}(wt)),xt="backward",Mt="horizontal",At=function(){function t(t,i,n){this.t=t,this.VI=i,this.t5=n,this.i5=xt,this.n5=Mt,this.r5=null,this.e5=null}var i=t.prototype;return i.s5=function(){return this.n5==Mt?this.r5.offsetWidth:this.r5.offsetHeight},i.o5=function(t,i){var n=this.n5==Mt?t:i;return this.i5==xt?-Math.min(n,0):Math.max(n,0)},i.a5=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this.i5==xt?-t:t,r=this.n5==Mt?"".concat(n).concat(i):0,s=this.n5==Mt?0:"".concat(n).concat(i);return"translate(".concat(r,", ").concat(s,")")},i.startSwipe=function(t){var i=t.direction,n=t.mask,r=t.orientation,s=t.swipeElement;this.r5=s,this.e5=n,this.i5=i,this.n5=r},i.swipeMove=function(t){this.h5(t,!1)},i.endSwipe=function(t){this.h5(t,!0)},i.u5=function(t,i){var n=.75*i;return R(this.r5,{transform:this.a5(t,"px"),transition:"".concat(n,"ms transform ").concat("cubic-bezier(0.15, .55, .3, 0.95)")}),vt(this.t,n)},i.f5=function(t){var i=this,n=.8*t;return this.VI((function(){R(i.r5,{transform:i.a5(0),transition:"".concat(n,"ms transform ease-in")}),R(i.e5,{opacity:"",transition:"".concat(n,"ms opacity ease-in")})})).then((function(){return vt(i.t,n)}))},i.c5=function(t){var i=this,n=.75*(this.s5()-t);return this.VI((function(){R(i.r5,{transform:i.a5(100,"%"),transition:"".concat(n,"ms transform ease-out")}),R(i.e5,{opacity:0,transition:"".concat(n,"ms opacity ease-out")})})).then((function(){return vt(i.t,n)})).then((function(){return i.t5()}))},i.l5=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";R(this.r5,{transform:t,transition:""}),R(this.e5,{opacity:i,transition:""})},i.v5=function(t,i,n,r){var s=this,e=22.5*t+n,o=22.5*i+r,a=this.o5(e,o),h=this.o5(t,i),u=.5*this.s5();return a<u&&h<.65?this.u5(a,h).then((function(){return s.f5(a)})):this.c5(a)},i.h5=function(t,i){var n=this,r=t.deltaX,s=t.deltaY,e=t.velocityX,o=t.velocityY;this.VI((function(){if(i)n.v5(e,o,r,s).then((function(){n.l5()}));else{var t=n.o5(r,s),a=t/n.s5(),h=Math.max(0,1-a);n.l5(n.a5(t,"px"),h)}}))},t}(),Ot=function(){function t(t,i){this.In=i,this.d5=t,this.Vo=i.getAmpDoc(),this.m5=this.d5.getAttribute("toolbar"),this.p5=null,this.b5=void 0,this.y5=!1,this.d5.classList.add("amp-sidebar-toolbar-target-hidden"),this.w5()}var i=t.prototype;return i.onLayoutChange=function(){this.Vo.win.matchMedia(this.m5).matches?this.g5():this.k5()},i.w5=function(){this.p5=this.d5.cloneNode(!0);var t,i,n=(t=this.d5.getAttribute("toolbar-target"),'"toolbar-target" is required',i=this.d5,K().assert(t,'"toolbar-target" is required',i,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),r=this.Vo.getElementById(n);if(!r)throw K().createError("Could not find the toolbar-target element with an id: ".concat(n));this.b5=r,this.p5.classList.add("i-amphtml-toolbar"),P(this.b5,!1)},i.O5=function(){return this.y5},i.g5=function(){var t=this;return this.O5()?Z||(Z=Promise.resolve(void 0)):this.In.mutateElement((function(){t.b5&&(P(t.b5,!0),t.b5.contains(t.p5)||t.b5.appendChild(t.p5),t.d5.classList.add("amp-sidebar-toolbar-target-shown"),t.d5.classList.remove("amp-sidebar-toolbar-target-hidden"),t.y5=!0,lt(t.Vo,t.p5))}))},i.k5=function(){var t=this;this.O5()&&this.In.mutateElement((function(){t.b5&&(P(t.b5,!1),t.d5.classList.add("amp-sidebar-toolbar-target-hidden"),t.d5.classList.remove("amp-sidebar-toolbar-target-shown"),t.y5=!1)}))},t}();function St(t){var i=t.indexOf("#");return-1==i?t:t.substring(0,i)}new Set(["c","v","a","ad"]);var Et="amp-sidebar toolbar",jt="left",Dt="right",Xt=function(t){r(s,t);var n=a(s);function s(t){var r;(r=n.call(this,t)).ac=null,r.Dh=null,r.x5=null,r.Dz=null,r.Nm=r.win.document,r.Lz=r.Nm.documentElement,r.nX=null,r.j5=[];var s=it(r.win,"platform");return r.c1=s.isIos(),r._R=s.isSafari(),r.$Y=-1,r.M5=!1,r.a1=null,r.i1=null,r.E5=0,r.S5=!1,r.A5=null,r.D5=new At(r.win,(function(t){return r.mutateElement(t)}),(function(){return r.X5(!0,3)})),r.Mst=!1,r.Dst=!1,r.lb=r.lb.bind(i(r)),r._5=null,r}var e=s.prototype;return e.buildCallback=function(){var t,i=this,n=this.element;n.classList.add("i-amphtml-overlay"),n.classList.add("i-amphtml-scrollable"),this.nX=n.getAttribute("side"),this.Dst=n.hasAttribute("data-disable-swipe-close"),this.ac=this.getViewport(),this.Dh=function(t){return rt(t,"action")}(n),this.element.parentNode!=this.element.ownerDocument.body&&this.element.parentNode!=this.getAmpDoc().getBody()&&this.user().warn(Et,"".concat(Et," is recommended to be a direct child of the <body> element to preserve a logical DOM order.")),this.nX!=jt&&this.nX!=Dt&&(this.nX=this.R5("rtl"==((t=this.Nm).body.getAttribute("dir")||t.documentElement.getAttribute("dir")||"ltr")?Dt:jt),n.setAttribute("side",this.nX)),this.P5(),n.addEventListener("amp:dom-update",(function(){i.P5()})),this.getAmpDoc().whenReady().then((function(){h(n.querySelectorAll("nav[toolbar]")).forEach((function(t){try{i.j5.push(new Ot(t,i))}catch(t){i.user().error(Et,"Failed to instantiate toolbar",t)}})),i.lb()})),this.c1&&this.T5(),n.hasAttribute("role")||n.setAttribute("role","menu"),n.tabIndex=-1,this.Lz.addEventListener("keydown",(function(t){"Escape"==t.key&&i.Cx(3)&&t.preventDefault()})),this.a1=this.Y1(),this.a1||(this.a1=this.createScreenReaderCloseButton(),n.insertBefore(this.a1,this.element.firstChild)),n.appendChild(this.createScreenReaderCloseButton()),this.registerDefaultAction((function(t){var n=t.caller,r=t.trust;i.mX(r,n)}),"open"),this.registerAction("close",(function(t){i.Cx(t.trust)})),this.registerAction("toggle",(function(t){var n=t.caller,r=t.trust;i.S5?i.Cx(r):i.mX(r,n)})),this.Dh.addToAllowlist("amp-sidebar",["open","close","toggle"],["email"]),n.addEventListener("click",(function(t){var r=w(t.target,"A");if(r&&r.href){var s=function(t){return rt(t,"url")}(n).parse(r.href),e=i.getAmpDoc().getUrl();if(St(r.href)!=St(e))return;s.hash&&i.Cx(3)}}),!0),this.kY(this.element)},e.attachedCallback=function(){this._5=this.ac.onResize(function(t,i,n){var r=0,s=0,e=null;function o(){r=0;var n,a=100-(t.Date.now()-s);a>0?r=t.setTimeout(o,a):(n=e,e=null,i.apply(null,n))}return function(){s=t.Date.now();for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];e=n,r||(r=t.setTimeout(o,100))}}(this.win,this.lb)),this.lb()},e.detachedCallback=function(){this._5&&(this._5(),this._5=null)},e.P5=function(){if(!this.A5){var t=this.element.querySelector("amp-nested-menu");t&&((i=this.win,it(i,"extensions")).installExtensionForDoc(this.getAmpDoc(),"amp-nested-menu"),this.A5=t)}var i},e.Y1=function(){for(var t=this.element.querySelectorAll("[on]"),i=0;i<t.length;i++){var n=t[i],r=this.Dh.hasResolvableActionForTarget(n,"tap",this.element,tt(n.parentElement)),s=w(n,"[toolbar]");if(r&&!s)return n}return null},e.createScreenReaderCloseButton=function(){var t=this,i=this.element.getAttribute("data-close-button-aria-label")||"Close the sidebar",n=this.Nm.createElement("button");return n.textContent=i,n.classList.add("i-amphtml-screen-reader"),n.tabIndex=-1,n.addEventListener("click",(function(){t.Cx(3)})),n},e.lb=function(){var t=this;this.getAmpDoc().whenReady().then((function(){t.j5.forEach((function(t){t.onLayoutChange()}))}))},e.z5=function(t,i){var n=this;this.x5=t;var r=function(){n.x5===t&&n.mutateElement(t)};i?ft(this.win).delay(r,i):r()},e.I5=function(t){var i=this;P(this.element,!0),P(this.C5(),!0),this.ac.addToFixedLayer(this.element,!0),this.mutateElement((function(){!function(t){p(Y.every((function(i){return i.element!==t}))),p(k(t));var i=function(t){for(var i=[],n=q(t),r=function(t){var r=n[t];if(!r.parentNode)return"continue";h(r.parentNode.children).filter((function(t){return t!=r})).forEach((function(t){return i.push(t)}))},s=0;s<n.length;s++)r(s);return i}(t),n=q(t).filter(m),r=function(t){for(var i=[],n=t;n;){var r=x(n),s=r.querySelectorAll(["a[href]","area[href]","button","details summary","iframe","input","select","textarea","[contenteditable]","[draggable]","[tabindex]"].join(","));Array.prototype.push.apply(i,s),n=r.host}return i}(t),s=r.filter((function(i){return t.contains(i)&&void 0!==i[V]})),e=r.filter((function(i){return!t.contains(i)&&void 0===i[V]})),o=i.concat(n).map((function(t){return{element:t,prevValue:t.getAttribute("aria-hidden")}}));n.forEach((function(t){return t.removeAttribute("aria-hidden")})),i.forEach((function(t){return t.setAttribute("aria-hidden","true")})),e.forEach((function(t){t[V]=t.getAttribute("tabindex"),t.setAttribute("tabindex","-1")})),s.forEach((function(t){p(void 0!==t[V]),F(t,"tabindex",t[V])})),Y.push({element:t,hiddenElementInfos:o,focusableExternalElements:e,focusableInternalElements:s})}(i.element)})),this.c1&&this._R&&this.N5(),this.element.scrollTop=1,this.element.setAttribute("open",""),this.C5().setAttribute("open",""),this.z5((function(){return i.L5(t)}),350),lt(this.getAmpDoc(),this.element)},e.L5=function(t){var i=g(this.element),n=ut(this.element);n.scheduleLayout(this.element,i),n.scheduleResume(this.element,i),this.W5()||M(tt(this.a1)),this.NR("sidebarOpen",t),this.element.setAttribute("i-amphtml-sidebar-opened",""),this.C5().setAttribute("i-amphtml-sidebar-opened",""),this.setAsContainer()},e.B5=function(t,i){var n=this;this.C5().removeAttribute("open"),this.C5().removeAttribute("i-amphtml-sidebar-opened"),this.mutateElement((function(){!function(t){var i=Y.pop();p(i);var n=i.element,r=i.focusableExternalElements,s=i.focusableInternalElements,e=i.hiddenElementInfos;p(k(t)),p(n===t),e.forEach((function(t){return F(t.element,"aria-hidden",t.prevValue)})),s.forEach((function(t){return t.setAttribute("tabindex","-1")})),r.forEach((function(t){p(void 0!==t[V]),F(t,"tabindex",t[V]),t[V]=void 0}))}(n.element)})),this.element.removeAttribute("open"),this.element.removeAttribute("i-amphtml-sidebar-opened"),this.z5((function(){return n.Y5(i)}),t?0:350)},e.Y5=function(t){P(this.element,!1),P(this.C5(),!1),ut(this.element).schedulePause(this.element,g(this.element)),this.NR("sidebarClose",t),this.removeAsContainer(),function(t){$(t,!(arguments.length>1&&void 0!==arguments[1])||arguments[1],!0,U)}(this.element,!1)},e.mX=function(t,i){var n=this;this.S5||(this.S5=!0,this.ac.enterOverlayMode(),this.z5((function(){return n.I5(t)})),this.hX().push((function(){n.c1?n.X5(!0,t):n.Cx(t)})).then((function(t){n.$Y=t})),i&&(this.i1=i,this.E5=this.ac.getScrollTop()),function(t,i,n){var r=t.ownerDocument.defaultView;if(r){var s=C.get(t);if(s||(s=[],C.set(t,s),B(r).observe(t)),!s.some((function(t){return t.callback===n&&0===t.type}))){s.push({type:0,callback:n});var e=W.get(t);e&&setTimeout((function(){return N(0,n,e)}))}}}(this.element,0,this.lb))},e.Cx=function(t){return this.X5(!1,t)},e.X5=function(t,i){var n=this;if(!this.S5)return!1;this.S5=!1,this.ac.leaveOverlayMode();var r=this.E5==this.ac.getScrollTop(),s=this.element.contains(this.Nm.activeElement);return this.z5((function(){return n.B5(t,i)})),t&&(P(this.element,!1),P(this.C5(),!1)),-1!=this.$Y&&(this.hX().pop(this.$Y),this.$Y=-1),this.i1&&s&&r&&(this.W5()||M(this.i1)),function(t,i,n){var r=C.get(t);if(r&&(function(t,i){for(var r=[],s=0,e=0;e<t.length;e++){var o=t[e];(a=o).callback===n&&0===a.type?r.push(o):(s<e&&(t[s]=o),s++)}var a;s<t.length&&(t.length=s)}(r),0==r.length)){C.delete(t),W.delete(t);var s=t.ownerDocument.defaultView;s&&B(s).unobserve(t)}}(this.element,0,this.lb),!0},e.kY=function(t){var i=this;this.Dst||yt.get(t,!0,!0).onGesture(kt,(function(t){var n=t.data,r=t.event;i.F5(n,r)}))},e.F5=function(t,i){var n;if(!t.first)return t.last?(this.Mst&&this.D5.endSwipe(t),void(this.Mst=!1)):void(i&&i.target&&(n=i.target,"input"!==n.nodeName.toLowerCase()||"range"!==n.getAttribute("type"))&&(this.Mst=!0,this.D5.swipeMove(t)));this.D5.startSwipe({swipeElement:this.element,mask:this.Dz,direction:this.nX==jt?xt:"forward",orientation:Mt})},e.R5=function(t){return w(this.element,"amp-story")?t==jt?Dt:jt:t},e.C5=function(){var t=this;if(!this.Dz){var i=this.Nm.createElement("div");i.classList.add("amp-sidebar-mask","i-amphtml-sidebar-mask"),i.addEventListener("click",(function(){t.Cx(3)})),this.getAmpDoc().getBody().appendChild(i),i.addEventListener("touchmove",(function(t){t.preventDefault()})),this.kY(i),this.Dz=i}return this.Dz},e.T5=function(){var t=this;this.element.addEventListener("scroll",(function(i){t.S5&&(t.element.scrollTop<1?(t.element.scrollTop=1,i.preventDefault()):t.element.scrollHeight==t.element.scrollTop+t.element.offsetHeight&&(t.element.scrollTop=t.element.scrollTop-1,i.preventDefault()))}))},e.N5=function(){if(!this.M5){var t=this.Nm.createElement("div");R(t,{"height":"54px","width":"100%","background-color":"transparent"}),this.element.appendChild(t),this.M5=!0}},e.hX=function(){return nt(this.getAmpDoc(),"history")},e.NR=function(t,i){var n=function(t,i,n,r){var s={detail:n};if(Object.assign(s,void 0),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,s);var e=t.document.createEvent("CustomEvent");return e.initCustomEvent(i,!!s.bubbles,!!s.cancelable,n),e}(this.win,"".concat(Et,".").concat(t),{});this.Dh.trigger(this.element,t,n,i)},e.W5=function(){return this.c1&&(t=this.element,nt(t,"viewer")).isEmbedded();var t},s}(t.BaseElement);t.registerElement("amp-sidebar",Xt,"amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.amp-sidebar-mask{background-color:rgba(0,0,0,0.5)}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-sidebar-0.1.js.map