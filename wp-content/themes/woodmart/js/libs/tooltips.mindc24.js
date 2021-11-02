!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],b):b(a.bootstrap={},a.jQuery)}(this,function(a,b){"use strict";function c(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function d(a,b,d){return b&&c(a.prototype,b),d&&c(a,d),a}function e(){return e=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},e.apply(this,arguments)}function f(a){var b=!1;return function(){b||(b=!0,window.Promise.resolve().then(function(){b=!1,a()}))}}function g(a){var b=!1;return function(){b||(b=!0,setTimeout(function(){b=!1,a()},na))}}function h(a){var b={};return a&&"[object Function]"===b.toString.call(a)}function i(a,b){if(1!==a.nodeType)return[];var c=getComputedStyle(a,null);return b?c[b]:c}function j(a){return"HTML"===a.nodeName?a:a.parentNode||a.host}function k(a){if(!a)return document.body;switch(a.nodeName){case"HTML":case"BODY":return a.ownerDocument.body;case"#document":return a.body}var b=i(a),c=b.overflow,d=b.overflowX;return/(auto|scroll)/.test(c+b.overflowY+d)?a:k(j(a))}function l(a){var b=a&&a.offsetParent,c=b&&b.nodeName;return c&&"BODY"!==c&&"HTML"!==c?-1!==["TD","TABLE"].indexOf(b.nodeName)&&"static"===i(b,"position")?l(b):b:a?a.ownerDocument.documentElement:document.documentElement}function m(a){var b=a.nodeName;return"BODY"!==b&&("HTML"===b||l(a.firstElementChild)===a)}function n(a){return null!==a.parentNode?n(a.parentNode):a}function o(a,b){if(!(a&&a.nodeType&&b&&b.nodeType))return document.documentElement;var c=a.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_FOLLOWING,d=c?a:b,e=c?b:a,f=document.createRange();f.setStart(d,0),f.setEnd(e,0);var g=f.commonAncestorContainer;if(a!==g&&b!==g||d.contains(e))return m(g)?g:l(g);var h=n(a);return h.host?o(h.host,b):o(a,n(b).host)}function p(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",c="top"===b?"scrollTop":"scrollLeft",d=a.nodeName;if("BODY"===d||"HTML"===d){var e=a.ownerDocument.documentElement;return(a.ownerDocument.scrollingElement||e)[c]}return a[c]}function q(a,b){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=p(b,"top"),e=p(b,"left"),f=c?-1:1;return a.top+=d*f,a.bottom+=d*f,a.left+=e*f,a.right+=e*f,a}function r(a,b){var c="x"===b?"Left":"Top",d="Left"===c?"Right":"Bottom";return parseFloat(a["border"+c+"Width"],10)+parseFloat(a["border"+d+"Width"],10)}function s(a,b,c,d){return Math.max(b["offset"+a],b["scroll"+a],c["client"+a],c["offset"+a],c["scroll"+a],sa()?c["offset"+a]+d["margin"+("Height"===a?"Top":"Left")]+d["margin"+("Height"===a?"Bottom":"Right")]:0)}function t(){var a=document.body,b=document.documentElement,c=sa()&&getComputedStyle(b);return{height:s("Height",a,b,c),width:s("Width",a,b,c)}}function u(a){return wa({},a,{right:a.left+a.width,bottom:a.top+a.height})}function v(a){var b={};if(sa())try{b=a.getBoundingClientRect();var c=p(a,"top"),d=p(a,"left");b.top+=c,b.left+=d,b.bottom+=c,b.right+=d}catch(m){}else b=a.getBoundingClientRect();var e={left:b.left,top:b.top,width:b.right-b.left,height:b.bottom-b.top},f="HTML"===a.nodeName?t():{},g=f.width||a.clientWidth||e.right-e.left,h=f.height||a.clientHeight||e.bottom-e.top,j=a.offsetWidth-g,k=a.offsetHeight-h;if(j||k){var l=i(a);j-=r(l,"x"),k-=r(l,"y"),e.width-=j,e.height-=k}return u(e)}function w(a,b){var c=sa(),d="HTML"===b.nodeName,e=v(a),f=v(b),g=k(a),h=i(b),j=parseFloat(h.borderTopWidth,10),l=parseFloat(h.borderLeftWidth,10),m=u({top:e.top-f.top-j,left:e.left-f.left-l,width:e.width,height:e.height});if(m.marginTop=0,m.marginLeft=0,!c&&d){var n=parseFloat(h.marginTop,10),o=parseFloat(h.marginLeft,10);m.top-=j-n,m.bottom-=j-n,m.left-=l-o,m.right-=l-o,m.marginTop=n,m.marginLeft=o}return(c?b.contains(g):b===g&&"BODY"!==g.nodeName)&&(m=q(m,b)),m}function x(a){var b=a.ownerDocument.documentElement,c=w(a,b),d=Math.max(b.clientWidth,window.innerWidth||0),e=Math.max(b.clientHeight,window.innerHeight||0),f=p(b),g=p(b,"left");return u({top:f-c.top+c.marginTop,left:g-c.left+c.marginLeft,width:d,height:e})}function y(a){var b=a.nodeName;return"BODY"!==b&&"HTML"!==b&&("fixed"===i(a,"position")||y(j(a)))}function z(a,b,c,d){var e={top:0,left:0},f=o(a,b);if("viewport"===d)e=x(f);else{var g=void 0;"scrollParent"===d?(g=k(j(b)),"BODY"===g.nodeName&&(g=a.ownerDocument.documentElement)):g="window"===d?a.ownerDocument.documentElement:d;var h=w(g,f);if("HTML"!==g.nodeName||y(f))e=h;else{var i=t(),l=i.height,m=i.width;e.top+=h.top-h.marginTop,e.bottom=l+h.top,e.left+=h.left-h.marginLeft,e.right=m+h.left}}return e.left+=c,e.top+=c,e.right-=c,e.bottom-=c,e}function A(a){return a.width*a.height}function B(a,b,c,d,e){var f=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===a.indexOf("auto"))return a;var g=z(c,d,f,e),h={top:{width:g.width,height:b.top-g.top},right:{width:g.right-b.right,height:g.height},bottom:{width:g.width,height:g.bottom-b.bottom},left:{width:b.left-g.left,height:g.height}},i=Object.keys(h).map(function(a){return wa({key:a},h[a],{area:A(h[a])})}).sort(function(a,b){return b.area-a.area}),j=i.filter(function(a){var b=a.width,d=a.height;return b>=c.clientWidth&&d>=c.clientHeight}),k=j.length>0?j[0].key:i[0].key,l=a.split("-")[1];return k+(l?"-"+l:"")}function C(a,b,c){return w(c,o(b,c))}function D(a){var b=getComputedStyle(a),c=parseFloat(b.marginTop)+parseFloat(b.marginBottom),d=parseFloat(b.marginLeft)+parseFloat(b.marginRight);return{width:a.offsetWidth+d,height:a.offsetHeight+c}}function E(a){var b={left:"right",right:"left",bottom:"top",top:"bottom"};return a.replace(/left|right|bottom|top/g,function(a){return b[a]})}function F(a,b,c){c=c.split("-")[0];var d=D(a),e={width:d.width,height:d.height},f=-1!==["right","left"].indexOf(c),g=f?"top":"left",h=f?"left":"top",i=f?"height":"width",j=f?"width":"height";return e[g]=b[g]+b[i]/2-d[i]/2,e[h]=c===h?b[h]-d[j]:b[E(h)],e}function G(a,b){return Array.prototype.find?a.find(b):a.filter(b)[0]}function H(a,b,c){if(Array.prototype.findIndex)return a.findIndex(function(a){return a[b]===c});var d=G(a,function(a){return a[b]===c});return a.indexOf(d)}function I(a,b,c){return(void 0===c?a:a.slice(0,H(a,"name",c))).forEach(function(a){a.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var c=a.function||a.fn;a.enabled&&h(c)&&(b.offsets.popper=u(b.offsets.popper),b.offsets.reference=u(b.offsets.reference),b=c(b,a))}),b}function J(){if(!this.state.isDestroyed){var a={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};a.offsets.reference=C(this.state,this.popper,this.reference),a.placement=B(this.options.placement,a.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),a.originalPlacement=a.placement,a.offsets.popper=F(this.popper,a.offsets.reference,a.placement),a.offsets.popper.position="absolute",a=I(this.modifiers,a),this.state.isCreated?this.options.onUpdate(a):(this.state.isCreated=!0,this.options.onCreate(a))}}function K(a,b){return a.some(function(a){var c=a.name;return a.enabled&&c===b})}function L(a){for(var b=[!1,"ms","Webkit","Moz","O"],c=a.charAt(0).toUpperCase()+a.slice(1),d=0;d<b.length-1;d++){var e=b[d],f=e?""+e+c:a;if(void 0!==document.body.style[f])return f}return null}function M(){return this.state.isDestroyed=!0,K(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[L("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function N(a){var b=a.ownerDocument;return b?b.defaultView:window}function O(a,b,c,d){var e="BODY"===a.nodeName,f=e?a.ownerDocument.defaultView:a;f.addEventListener(b,c,{passive:!0}),e||O(k(f.parentNode),b,c,d),d.push(f)}function P(a,b,c,d){c.updateBound=d,N(a).addEventListener("resize",c.updateBound,{passive:!0});var e=k(a);return O(e,"scroll",c.updateBound,c.scrollParents),c.scrollElement=e,c.eventsEnabled=!0,c}function Q(){this.state.eventsEnabled||(this.state=P(this.reference,this.options,this.state,this.scheduleUpdate))}function R(a,b){return N(a).removeEventListener("resize",b.updateBound),b.scrollParents.forEach(function(a){a.removeEventListener("scroll",b.updateBound)}),b.updateBound=null,b.scrollParents=[],b.scrollElement=null,b.eventsEnabled=!1,b}function S(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function T(a){return""!==a&&!isNaN(parseFloat(a))&&isFinite(a)}function U(a,b){Object.keys(b).forEach(function(c){var d="";-1!==["width","height","top","right","bottom","left"].indexOf(c)&&T(b[c])&&(d="px"),a.style[c]=b[c]+d})}function V(a,b){Object.keys(b).forEach(function(c){!1!==b[c]?a.setAttribute(c,b[c]):a.removeAttribute(c)})}function W(a){return U(a.instance.popper,a.styles),V(a.instance.popper,a.attributes),a.arrowElement&&Object.keys(a.arrowStyles).length&&U(a.arrowElement,a.arrowStyles),a}function X(a,b,c,d,e){var f=C(e,b,a),g=B(c.placement,f,b,a,c.modifiers.flip.boundariesElement,c.modifiers.flip.padding);return b.setAttribute("x-placement",g),U(b,{position:"absolute"}),c}function Y(a,b){var c=b.x,d=b.y,e=a.offsets.popper,f=G(a.instance.modifiers,function(a){return"applyStyle"===a.name}).gpuAcceleration;void 0!==f&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var g=void 0!==f?f:b.gpuAcceleration,h=l(a.instance.popper),i=v(h),j={position:e.position},k={left:Math.floor(e.left),top:Math.floor(e.top),bottom:Math.floor(e.bottom),right:Math.floor(e.right)},m="bottom"===c?"top":"bottom",n="right"===d?"left":"right",o=L("transform"),p=void 0,q=void 0;if(q="bottom"===m?-i.height+k.bottom:k.top,p="right"===n?-i.width+k.right:k.left,g&&o)j[o]="translate3d("+p+"px, "+q+"px, 0)",j[m]=0,j[n]=0,j.willChange="transform";else{var r="bottom"===m?-1:1,s="right"===n?-1:1;j[m]=q*r,j[n]=p*s,j.willChange=m+", "+n}var t={"x-placement":a.placement};return a.attributes=wa({},t,a.attributes),a.styles=wa({},j,a.styles),a.arrowStyles=wa({},a.offsets.arrow,a.arrowStyles),a}function Z(a,b,c){var d=G(a,function(a){return a.name===b}),e=!!d&&a.some(function(a){return a.name===c&&a.enabled&&a.order<d.order});if(!e){var f="`"+b+"`",g="`"+c+"`";console.warn(g+" modifier is required by "+f+" modifier in order to work, be sure to include it before "+f+"!")}return e}function $(a,b){var c;if(!Z(a.instance.modifiers,"arrow","keepTogether"))return a;var d=b.element;if("string"==typeof d){if(!(d=a.instance.popper.querySelector(d)))return a}else if(!a.instance.popper.contains(d))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),a;var e=a.placement.split("-")[0],f=a.offsets,g=f.popper,h=f.reference,j=-1!==["left","right"].indexOf(e),k=j?"height":"width",l=j?"Top":"Left",m=l.toLowerCase(),n=j?"left":"top",o=j?"bottom":"right",p=D(d)[k];h[o]-p<g[m]&&(a.offsets.popper[m]-=g[m]-(h[o]-p)),h[m]+p>g[o]&&(a.offsets.popper[m]+=h[m]+p-g[o]),a.offsets.popper=u(a.offsets.popper);var q=h[m]+h[k]/2-p/2,r=i(a.instance.popper),s=parseFloat(r["margin"+l],10),t=parseFloat(r["border"+l+"Width"],10),v=q-a.offsets.popper[m]-s-t;return v=Math.max(Math.min(g[k]-p,v),0),a.arrowElement=d,a.offsets.arrow=(c={},va(c,m,Math.round(v)),va(c,n,""),c),a}function _(a){return"end"===a?"start":"start"===a?"end":a}function aa(a){var b=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=ya.indexOf(a),d=ya.slice(c+1).concat(ya.slice(0,c));return b?d.reverse():d}function ba(a,b){if(K(a.instance.modifiers,"inner"))return a;if(a.flipped&&a.placement===a.originalPlacement)return a;var c=z(a.instance.popper,a.instance.reference,b.padding,b.boundariesElement),d=a.placement.split("-")[0],e=E(d),f=a.placement.split("-")[1]||"",g=[];switch(b.behavior){case za.FLIP:g=[d,e];break;case za.CLOCKWISE:g=aa(d);break;case za.COUNTERCLOCKWISE:g=aa(d,!0);break;default:g=b.behavior}return g.forEach(function(h,i){if(d!==h||g.length===i+1)return a;d=a.placement.split("-")[0],e=E(d);var j=a.offsets.popper,k=a.offsets.reference,l=Math.floor,m="left"===d&&l(j.right)>l(k.left)||"right"===d&&l(j.left)<l(k.right)||"top"===d&&l(j.bottom)>l(k.top)||"bottom"===d&&l(j.top)<l(k.bottom),n=l(j.left)<l(c.left),o=l(j.right)>l(c.right),p=l(j.top)<l(c.top),q=l(j.bottom)>l(c.bottom),r="left"===d&&n||"right"===d&&o||"top"===d&&p||"bottom"===d&&q,s=-1!==["top","bottom"].indexOf(d),t=!!b.flipVariations&&(s&&"start"===f&&n||s&&"end"===f&&o||!s&&"start"===f&&p||!s&&"end"===f&&q);(m||r||t)&&(a.flipped=!0,(m||r)&&(d=g[i+1]),t&&(f=_(f)),a.placement=d+(f?"-"+f:""),a.offsets.popper=wa({},a.offsets.popper,F(a.instance.popper,a.offsets.reference,a.placement)),a=I(a.instance.modifiers,a,"flip"))}),a}function ca(a){var b=a.offsets,c=b.popper,d=b.reference,e=a.placement.split("-")[0],f=Math.floor,g=-1!==["top","bottom"].indexOf(e),h=g?"right":"bottom",i=g?"left":"top",j=g?"width":"height";return c[h]<f(d[i])&&(a.offsets.popper[i]=f(d[i])-c[j]),c[i]>f(d[h])&&(a.offsets.popper[i]=f(d[h])),a}function da(a,b,c,d){var e=a.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),f=+e[1],g=e[2];if(!f)return a;if(0===g.indexOf("%")){var h=void 0;switch(g){case"%p":h=c;break;case"%":case"%r":default:h=d}return u(h)[b]/100*f}if("vh"===g||"vw"===g){return("vh"===g?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*f}return f}function ea(a,b,c,d){var e=[0,0],f=-1!==["right","left"].indexOf(d),g=a.split(/(\+|\-)/).map(function(a){return a.trim()}),h=g.indexOf(G(g,function(a){return-1!==a.search(/,|\s/)}));g[h]&&-1===g[h].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var i=/\s*,\s*|\s+/,j=-1!==h?[g.slice(0,h).concat([g[h].split(i)[0]]),[g[h].split(i)[1]].concat(g.slice(h+1))]:[g];return j=j.map(function(a,d){var e=(1===d?!f:f)?"height":"width",g=!1;return a.reduce(function(a,b){return""===a[a.length-1]&&-1!==["+","-"].indexOf(b)?(a[a.length-1]=b,g=!0,a):g?(a[a.length-1]+=b,g=!1,a):a.concat(b)},[]).map(function(a){return da(a,e,b,c)})}),j.forEach(function(a,b){a.forEach(function(c,d){T(c)&&(e[b]+=c*("-"===a[d-1]?-1:1))})}),e}function fa(a,b){var c=b.offset,d=a.placement,e=a.offsets,f=e.popper,g=e.reference,h=d.split("-")[0],i=void 0;return i=T(+c)?[+c,0]:ea(c,f,g,h),"left"===h?(f.top+=i[0],f.left-=i[1]):"right"===h?(f.top+=i[0],f.left+=i[1]):"top"===h?(f.left+=i[0],f.top-=i[1]):"bottom"===h&&(f.left+=i[0],f.top+=i[1]),a.popper=f,a}function ga(a,b){var c=b.boundariesElement||l(a.instance.popper);a.instance.reference===c&&(c=l(c));var d=z(a.instance.popper,a.instance.reference,b.padding,c);b.boundaries=d;var e=b.priority,f=a.offsets.popper,g={primary:function(a){var c=f[a];return f[a]<d[a]&&!b.escapeWithReference&&(c=Math.max(f[a],d[a])),va({},a,c)},secondary:function(a){var c="right"===a?"left":"top",e=f[c];return f[a]>d[a]&&!b.escapeWithReference&&(e=Math.min(f[c],d[a]-("right"===a?f.width:f.height))),va({},c,e)}};return e.forEach(function(a){var b=-1!==["left","top"].indexOf(a)?"primary":"secondary";f=wa({},f,g[b](a))}),a.offsets.popper=f,a}function ha(a){var b=a.placement,c=b.split("-")[0],d=b.split("-")[1];if(d){var e=a.offsets,f=e.reference,g=e.popper,h=-1!==["bottom","top"].indexOf(c),i=h?"left":"top",j=h?"width":"height",k={start:va({},i,f[i]),end:va({},i,f[i]+f[j]-g[j])};a.offsets.popper=wa({},g,k[d])}return a}function ia(a){if(!Z(a.instance.modifiers,"hide","preventOverflow"))return a;var b=a.offsets.reference,c=G(a.instance.modifiers,function(a){return"preventOverflow"===a.name}).boundaries;if(b.bottom<c.top||b.left>c.right||b.top>c.bottom||b.right<c.left){if(!0===a.hide)return a;a.hide=!0,a.attributes["x-out-of-boundaries"]=""}else{if(!1===a.hide)return a;a.hide=!1,a.attributes["x-out-of-boundaries"]=!1}return a}function ja(a){var b=a.placement,c=b.split("-")[0],d=a.offsets,e=d.popper,f=d.reference,g=-1!==["left","right"].indexOf(c),h=-1===["top","left"].indexOf(c);return e[g?"left":"top"]=f[c]-(h?e[g?"width":"height"]:0),a.placement=E(b),a.offsets.popper=u(e),a}b=b&&b.hasOwnProperty("default")?b.default:b;for(var ka=function(a){function b(a){return{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function c(){return{bindType:h.end,delegateType:h.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}}}function d(){return("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"}}function e(b){var c=this,d=!1;return a(this).one(j.TRANSITION_END,function(){d=!0}),setTimeout(function(){d||j.triggerTransitionEnd(c)},b),this}function f(){h=d(),a.fn.emulateTransitionEnd=e,j.supportsTransitionEnd()&&(a.event.special[j.TRANSITION_END]=c())}function g(b){return b="function"==typeof a.escapeSelector?a.escapeSelector(b).substr(1):b.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1")}var h=!1,i=1e6,j={TRANSITION_END:"bsTransitionEnd",getUID:function(a){do{a+=~~(Math.random()*i)}while(document.getElementById(a));return a},getSelectorFromElement:function(b){var c=b.getAttribute("data-target");c&&"#"!==c||(c=b.getAttribute("href")||""),"#"===c.charAt(0)&&(c=g(c));try{return a(document).find(c).length>0?c:null}catch(d){return null}},reflow:function(a){return a.offsetHeight},triggerTransitionEnd:function(b){a(b).trigger(h.end)},supportsTransitionEnd:function(){return Boolean(h)},isElement:function(a){return(a[0]||a).nodeType},typeCheckConfig:function(a,c,d){for(var e in d)if(Object.prototype.hasOwnProperty.call(d,e)){var f=d[e],g=c[e],h=g&&j.isElement(g)?"element":b(g);if(!new RegExp(f).test(h))throw new Error(a.toUpperCase()+': Option "'+e+'" provided type "'+h+'" but expected type "'+f+'".')}}};return f(),j}(b),la="undefined"!=typeof window&&"undefined"!=typeof document,ma=["Edge","Trident","Firefox"],na=0,oa=0;oa<ma.length;oa+=1)if(la&&navigator.userAgent.indexOf(ma[oa])>=0){na=1;break}var pa=la&&window.Promise,qa=pa?f:g,ra=void 0,sa=function(){return void 0===ra&&(ra=-1!==navigator.appVersion.indexOf("MSIE 10")),ra},ta=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},ua=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),va=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a},wa=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},xa=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ya=xa.slice(3),za={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},Aa={shift:{order:100,enabled:!0,fn:ha},offset:{order:200,enabled:!0,fn:fa,offset:0},preventOverflow:{order:300,enabled:!0,fn:ga,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:ca},arrow:{order:500,enabled:!0,fn:$,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:ba,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:ja},hide:{order:800,enabled:!0,fn:ia},computeStyle:{order:850,enabled:!0,fn:Y,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:W,onLoad:X,gpuAcceleration:void 0}},Ba={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Aa},Ca=function(){function a(b,c){var d=this,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};ta(this,a),this.scheduleUpdate=function(){return requestAnimationFrame(d.update)},this.update=qa(this.update.bind(this)),this.options=wa({},a.Defaults,e),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=b&&b.jquery?b[0]:b,this.popper=c&&c.jquery?c[0]:c,this.options.modifiers={},Object.keys(wa({},a.Defaults.modifiers,e.modifiers)).forEach(function(b){d.options.modifiers[b]=wa({},a.Defaults.modifiers[b]||{},e.modifiers?e.modifiers[b]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(a){return wa({name:a},d.options.modifiers[a])}).sort(function(a,b){return a.order-b.order}),this.modifiers.forEach(function(a){a.enabled&&h(a.onLoad)&&a.onLoad(d.reference,d.popper,d.options,a,d.state)}),this.update();var f=this.options.eventsEnabled;f&&this.enableEventListeners(),this.state.eventsEnabled=f}return ua(a,[{key:"update",value:function(){return J.call(this)}},{key:"destroy",value:function(){return M.call(this)}},{key:"enableEventListeners",value:function(){return Q.call(this)}},{key:"disableEventListeners",value:function(){return S.call(this)}}]),a}();Ca.Utils=("undefined"!=typeof window?window:global).PopperUtils,Ca.placements=xa,Ca.Defaults=Ba;var Da=function(a){var b="tooltip",c="4.0.0",f="bs.tooltip",g="."+f,h=a.fn[b],i=150,j="bs-tooltip",k=new RegExp("(^|\\s)"+j+"\\S+","g"),l={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},m={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},n={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},o={SHOW:"show",OUT:"out"},p={HIDE:"hide"+g,HIDDEN:"hidden"+g,SHOW:"show"+g,SHOWN:"shown"+g,INSERTED:"inserted"+g,CLICK:"click"+g,FOCUSIN:"focusin"+g,FOCUSOUT:"focusout"+g,MOUSEENTER:"mouseenter"+g,MOUSELEAVE:"mouseleave"+g},q={FADE:"fade",SHOW:"show"},r={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},s={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},t=function(){function h(a,b){if(void 0===Ca)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=a,this.config=this._getConfig(b),this.tip=null,this._setListeners()}var t=h.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(b){if(this._isEnabled)if(b){var c=this.constructor.DATA_KEY,d=a(b.currentTarget).data(c);d||(d=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(c,d)),d._activeTrigger.click=!d._activeTrigger.click,d._isWithActiveTrigger()?d._enter(null,d):d._leave(null,d)}else{if(a(this.getTipElement()).hasClass(q.SHOW))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),a.removeData(this.element,this.constructor.DATA_KEY),a(this.element).off(this.constructor.EVENT_KEY),a(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&a(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var b=this;if("none"===a(this.element).css("display"))throw new Error("Please use show on visible elements");var c=a.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){a(this.element).trigger(c);var d=a.contains(this.element.ownerDocument.documentElement,this.element);if(c.isDefaultPrevented()||!d)return;var e=this.getTipElement(),f=ka.getUID(this.constructor.NAME);e.setAttribute("id",f),this.element.setAttribute("aria-describedby",f),this.setContent(),this.config.animation&&a(e).addClass(q.FADE);var g="function"==typeof this.config.placement?this.config.placement.call(this,e,this.element):this.config.placement,i=this._getAttachment(g);this.addAttachmentClass(i);var j=!1===this.config.container?document.body:a(this.config.container);a(e).data(this.constructor.DATA_KEY,this),a.contains(this.element.ownerDocument.documentElement,this.tip)||a(e).appendTo(j),a(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Ca(this.element,e,{placement:i,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:r.ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(a){a.originalPlacement!==a.placement&&b._handlePopperPlacementChange(a)},onUpdate:function(a){b._handlePopperPlacementChange(a)}}),a(e).addClass(q.SHOW),"ontouchstart"in document.documentElement&&a("body").children().on("mouseover",null,a.noop);var k=function(){b.config.animation&&b._fixTransition();var c=b._hoverState;b._hoverState=null,a(b.element).trigger(b.constructor.Event.SHOWN),c===o.OUT&&b._leave(null,b)};ka.supportsTransitionEnd()&&a(this.tip).hasClass(q.FADE)?a(this.tip).one(ka.TRANSITION_END,k).emulateTransitionEnd(h._TRANSITION_DURATION):k()}},t.hide=function(b){var c=this,d=this.getTipElement(),e=a.Event(this.constructor.Event.HIDE),f=function(){c._hoverState!==o.SHOW&&d.parentNode&&d.parentNode.removeChild(d),c._cleanTipClass(),c.element.removeAttribute("aria-describedby"),a(c.element).trigger(c.constructor.Event.HIDDEN),null!==c._popper&&c._popper.destroy(),b&&b()};a(this.element).trigger(e),e.isDefaultPrevented()||(a(d).removeClass(q.SHOW),"ontouchstart"in document.documentElement&&a("body").children().off("mouseover",null,a.noop),this._activeTrigger[s.CLICK]=!1,this._activeTrigger[s.FOCUS]=!1,this._activeTrigger[s.HOVER]=!1,ka.supportsTransitionEnd()&&a(this.tip).hasClass(q.FADE)?a(d).one(ka.TRANSITION_END,f).emulateTransitionEnd(i):f(),this._hoverState="")},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(b){a(this.getTipElement()).addClass(j+"-"+b)},t.getTipElement=function(){return this.tip=this.tip||a(this.config.template)[0],this.tip},t.setContent=function(){var b=a(this.getTipElement());this.setElementContent(b.find(r.TOOLTIP_INNER),this.getTitle()),b.removeClass(q.FADE+" "+q.SHOW)},t.setElementContent=function(b,c){var d=this.config.html;"object"==typeof c&&(c.nodeType||c.jquery)?d?a(c).parent().is(b)||b.empty().append(c):b.text(a(c).text()):b[d?"html":"text"](c)},t.getTitle=function(){var a=this.element.getAttribute("data-original-title");return a||(a="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),a},t._getAttachment=function(a){return m[a.toUpperCase()]},t._setListeners=function(){var b=this;this.config.trigger.split(" ").forEach(function(c){if("click"===c)a(b.element).on(b.constructor.Event.CLICK,b.config.selector,function(a){return b.toggle(a)});else if(c!==s.MANUAL){var d=c===s.HOVER?b.constructor.Event.MOUSEENTER:b.constructor.Event.FOCUSIN,e=c===s.HOVER?b.constructor.Event.MOUSELEAVE:b.constructor.Event.FOCUSOUT;a(b.element).on(d,b.config.selector,function(a){return b._enter(a)}).on(e,b.config.selector,function(a){return b._leave(a)})}a(b.element).closest(".modal").on("hide.bs.modal",function(){return b.hide()})}),this.config.selector?this.config=e({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var a=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==a)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(b,c){var d=this.constructor.DATA_KEY;return c=c||a(b.currentTarget).data(d),c||(c=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(d,c)),b&&(c._activeTrigger["focusin"===b.type?s.FOCUS:s.HOVER]=!0),a(c.getTipElement()).hasClass(q.SHOW)||c._hoverState===o.SHOW?void(c._hoverState=o.SHOW):(clearTimeout(c._timeout),c._hoverState=o.SHOW,c.config.delay&&c.config.delay.show?void(c._timeout=setTimeout(function(){c._hoverState===o.SHOW&&c.show()},c.config.delay.show)):void c.show())},t._leave=function(b,c){var d=this.constructor.DATA_KEY;if(c=c||a(b.currentTarget).data(d),c||(c=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(d,c)),b&&(c._activeTrigger["focusout"===b.type?s.FOCUS:s.HOVER]=!1),!c._isWithActiveTrigger()){if(clearTimeout(c._timeout),c._hoverState=o.OUT,!c.config.delay||!c.config.delay.hide)return void c.hide();c._timeout=setTimeout(function(){c._hoverState===o.OUT&&c.hide()},c.config.delay.hide)}},t._isWithActiveTrigger=function(){for(var a in this._activeTrigger)if(this._activeTrigger[a])return!0;return!1},t._getConfig=function(c){return c=e({},this.constructor.Default,a(this.element).data(),c),"number"==typeof c.delay&&(c.delay={show:c.delay,hide:c.delay}),"number"==typeof c.title&&(c.title=c.title.toString()),"number"==typeof c.content&&(c.content=c.content.toString()),ka.typeCheckConfig(b,c,this.constructor.DefaultType),c},t._getDelegateConfig=function(){var a={};if(this.config)for(var b in this.config)this.constructor.Default[b]!==this.config[b]&&(a[b]=this.config[b]);return a},t._cleanTipClass=function(){var b=a(this.getTipElement()),c=b.attr("class").match(k);null!==c&&c.length>0&&b.removeClass(c.join(""))},t._handlePopperPlacementChange=function(a){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(a.placement))},t._fixTransition=function(){var b=this.getTipElement(),c=this.config.animation;null===b.getAttribute("x-placement")&&(a(b).removeClass(q.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=c)},h._jQueryInterface=function(b){return this.each(function(){var c=a(this).data(f),d="object"==typeof b&&b;if((c||!/dispose|hide/.test(b))&&(c||(c=new h(this,d),a(this).data(f,c)),"string"==typeof b)){if(void 0===c[b])throw new TypeError('No method named "'+b+'"');c[b]()}})},d(h,null,[{key:"VERSION",get:function(){return c}},{key:"Default",get:function(){return n}},{key:"NAME",get:function(){return b}},{key:"DATA_KEY",get:function(){return f}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return g}},{key:"DefaultType",get:function(){return l}}]),h}();return a.fn[b]=t._jQueryInterface,a.fn[b].Constructor=t,a.fn[b].noConflict=function(){return a.fn[b]=h,t._jQueryInterface},t}(b);!function(a){if(void 0===a)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var b=a.fn.jquery.split(" ")[0].split("."),c=9;if(b[0]<2&&b[1]<c||1===b[0]&&b[1]===c&&b[2]<1||b[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(b),a.Util=ka,a.Tooltip=Da,Object.defineProperty(a,"__esModule",{value:!0})});