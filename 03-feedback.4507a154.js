!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var o,r,f,u,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=o,i=r;return o=r=void 0,l=t,u=e.apply(i,n)}function h(e){return l=e,a=setTimeout(w,t),d?b(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=f}function w(){var e=p();if(O(e))return T(e);a=setTimeout(w,function(e){var n=t-(e-c);return s?g(n,f-(e-l)):n}(e))}function T(e){return a=void 0,v&&o?b(e):(o=r=void 0,u)}function S(){var e=p(),n=O(e);if(o=arguments,r=this,c=e,n){if(void 0===a)return h(c);if(s)return a=setTimeout(w,t),b(c)}return void 0===a&&(a=setTimeout(w,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,f=(s="maxWait"in n)?m(j(n.maxWait)||0,t):f,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=r=a=void 0},S.flush=function(){return void 0===a?u:T(p())},S}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||a.test(t)?c(t.slice(2),i?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};var h=document.querySelector(".feedback-form"),O={},w="feedback-form-state",T=localStorage;if(T.getItem(w)){try{O=JSON.parse(T.getItem(w))}catch(e){console.log(e.name),console.log(e.message)}for(var S in O)h.elements[S].value=O[S]}h.addEventListener("input",e(t)((function(e){var t=e.target;O[t.name]=t.value,T.setItem(w,JSON.stringify(O))}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),console.log(O),localStorage.removeItem("feedback-form-state"),h.reset(),O={}}))}();
//# sourceMappingURL=03-feedback.4507a154.js.map