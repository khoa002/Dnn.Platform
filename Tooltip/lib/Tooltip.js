!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("react-tooltip")):"function"==typeof define&&define.amd?define(["react","react-tooltip"],e):"object"==typeof exports?exports.Tooltip=e(require("react"),require("react-tooltip")):t.Tooltip=e(t.react,t["react-tooltip"])}(this,function(t,e){return function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function n(t){switch(t){case"info":return f["default"];case"error":return m["default"];case"global":return h["default"]}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(1),l=r(i),a=o(18),c=r(a),u=o(15),p=r(u),s=o(5),f=r(s),d=o(3),m=r(d),v=o(4),h=r(v),b=o(2),y=r(b);o(17);var g=function(t){return t&&t.length?1===t.length?t[0]:"- "+t.join("<br />- "):""},x=function(t){var e=t.messages,o=t.type,r=t.rendered,i=t.tooltipPlace,a=t.style,u=t.className,s=t.delayHide,f=t.customIcon,d=t.tooltipClass,m=t.onClick,v=(0,p["default"])("tooltip-"),h="dnn-ui-common-tooltip "+o+" "+(u?u:""),b=g(e),x=f?y["default"]:n(o);return b&&r!==!1?l["default"].createElement("div",{className:h,style:a},l["default"].createElement("div",{className:"icon","data-tip":!0,"data-for":v,onClick:m},l["default"].createElement(x,{icon:f?f:null})),l["default"].createElement(c["default"],{id:v,effect:"solid",place:i,type:o,"class":"tooltip-text"+(d?" "+d:""),delayHide:s,multiline:!0},l["default"].createElement("div",{dangerouslySetInnerHTML:{__html:b}}))):l["default"].createElement("noscript",null)};x.propTypes={messages:i.PropTypes.array.isRequired,type:i.PropTypes.oneOf(["error","info","global"]).isRequired,rendered:i.PropTypes.bool,tooltipPlace:i.PropTypes.string,style:i.PropTypes.object,className:i.PropTypes.string,delayHide:i.PropTypes.number,customIcon:i.PropTypes.node,tooltipClass:i.PropTypes.string,onClick:i.PropTypes.func},x.defaultProps={tooltipPlace:"top",type:"info",delayHide:100},e["default"]=x},function(e,o){e.exports=t},function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),i=r(n),l=function(t){return i["default"].createElement("div",{dangerouslySetInnerHTML:{__html:t.icon}})};l.propTypes={icon:n.PropTypes.string},e["default"]=l},function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},i=o(1),l=r(i),a=function(t){return l["default"].createElement("svg",n({},t,{fill:"currentcolor",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}),l["default"].createElement("path",{d:"M18.696 4.992c-1.663-1.661-3.959-2.688-6.495-2.688-5.077 0-9.192 4.115-9.192 9.192s4.115 9.192 9.192 9.192c2.536 0 4.832-1.027 6.496-2.688 1.663-1.665 2.691-3.964 2.691-6.504s-1.029-4.839-2.692-6.504zM11.496 5.484h1.908c0.576 0 0.66 0.336 0.66 0.528v0.372l-0.396 6.984c0 0.528-0.288 0.624-0.672 0.624h-0.996c-0.384 0-0.624-0.108-0.672-0.636l-0.396-6.96v-0.396c-0.012-0.18 0.072-0.516 0.612-0.516zM12.48 18.9c-0.994 0-1.8-0.806-1.8-1.8s0.806-1.8 1.8-1.8c0.994 0 1.8 0.806 1.8 1.8-0.006 0.975-0.781 1.767-1.749 1.8z"}))};e["default"]=a},function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},i=o(1),l=r(i),a=function(t){return l["default"].createElement("svg",n({},t,{fill:"currentcolor",width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2048 2048"}),l["default"].createElement("path",{d:"M1024,256.8c-423.1,0-766.1,343-766.1,766.1S600.9,1789,1024,1789s766.1-343,766.1-766.1\r S1447.1,256.8,1024,256.8z M1481,1269.2l17.1,51.9l-26.6,53.3l-53.4,52L1379,1470l-70.1,76.5c-16.7,18.3-83.8,87.2-149.8,107.5\r h-108.4l82.9-75.7l22.3-41.4l19.1-51l-16.9-35.9l-70.6-30.3l-50.3-68.2l-22.1-63.2l12.5-65.1L855,1130.4l-96-58.6l-75.7-88.2\r l-64.4-40.7l-34-110.5l29.8-85l-29.8-93.5l35.4-57.4l89.3-114.8c39.5-29.7,82.1-32,128-51.8l43.5-16l55.4,48l52.1,23.2l50.3,78.8\r l71.3,6.2l98.8,24.7l-33.2,76.1l-51,29.8l-37.3,36.1l-29.7,33.9l-33.7,6.5l-18.3,25.5l-21.2,110.5l-68.4-52.1l-29.4,1.1l-36.9,21.3\r l-25.5,51l34.5,74.8l36.8,58l85.4,40.4l99.3-8.2l70.9-28.6l84.3,3.8l54.2,39.4l46.3,54.7l100.2,16.5l26.8,38L1481,1269.2z"}))};e["default"]=a},function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},i=o(1),l=r(i),a=function(t){return l["default"].createElement("svg",n({},t,{fill:"currentcolor",version:"1.1",width:"32",height:"32",viewBox:"0 0 32 32"}),l["default"].createElement("path",{d:"M25.92 7.36c-4.8-4.8-12.48-4.8-17.28 0s-4.8 12.48 0 17.28c4.8 4.8 12.48 4.8 17.28 0s4.8-12.48 0-17.28zM16.96 5.92c1.28 0 2.4 1.12 2.4 2.4s-1.12 2.4-2.4 2.4c-1.28 0-2.4-1.12-2.4-2.4 0.16-1.44 1.12-2.4 2.4-2.4zM20.8 23.2c0 0.48-0.16 0.8-0.8 0.8h-6.080c-0.48 0-0.8-0.32-0.8-0.8v-1.6c0-0.48 0.32-0.8 0.8-0.8h1.12v-6.4h-1.12c-0.48 0-0.64-0.32-0.64-0.8v-1.6c0-0.48 0.16-0.8 0.8-0.8h4.16c0.48 0 0.8 0.16 0.8 0.8v8.8h1.12c0.48 0 0.8 0.16 0.8 0.8v1.6z"}))};e["default"]=a},function(t,e,o){e=t.exports=o(7)(),e.push([t.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.dnn-ui-common-tooltip .tooltip-text{z-index:10000;max-width:255px;text-align:center;padding:7px 15px;pointer-events:auto!important;word-wrap:break-word;word-break:keep-all}.dnn-ui-common-tooltip .tooltip-text:hover{visibility:visible!important;opacity:1!important}.dnn-ui-common-tooltip .tooltip-text.place-top:after{border-top:6px solid!important}.dnn-ui-common-tooltip .tooltip-text.place-bottom:after{border-bottom:6px solid!important}.dnn-ui-common-tooltip .tooltip-text.place-left:after{border-left:6px solid!important}.dnn-ui-common-tooltip .tooltip-text.place-right:after{border-right:6px solid!important}.dnn-ui-common-tooltip.error .icon svg{color:#ea2134;fill:#ea2134}.dnn-ui-common-tooltip.error .tooltip-text{background-color:#ea2134!important;color:#fff}.dnn-ui-common-tooltip.error .tooltip-text.place-top:after{border-top-color:#ea2134!important}.dnn-ui-common-tooltip.error .tooltip-text.place-bottom:after{border-bottom-color:#ea2134!important}.dnn-ui-common-tooltip.info .icon svg{color:#c8c8c8;fill:#c8c8c8}.dnn-ui-common-tooltip.info .tooltip-text{background-color:#4b4e4f!important;color:#fff}.dnn-ui-common-tooltip.info .tooltip-text.place-top:after{border-top-color:#4b4e4f!important}.dnn-ui-common-tooltip.info .tooltip-text.place-bottom:after{border-bottom-color:#4b4e4f!important}.dnn-ui-common-tooltip.global .icon svg{color:#21a3da;fill:#21a3da}.dnn-ui-common-tooltip.global .tooltip-text{background-color:#21a3da!important;color:#fff}.dnn-ui-common-tooltip.global .tooltip-text.place-top:after{border-top-color:#21a3da!important}.dnn-ui-common-tooltip.global .tooltip-text.place-bottom:after{border-bottom-color:#21a3da!important}.dnn-ui-common-tooltip .icon svg{width:20px;height:20px}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var o=this[e];o[2]?t.push("@media "+o[2]+"{"+o[1]+"}"):t.push(o[1])}return t.join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(r[i]=!0)}for(n=0;n<e.length;n++){var l=e[n];"number"==typeof l[0]&&r[l[0]]||(o&&!l[2]?l[2]=o:o&&(l[2]="("+l[2]+") and ("+o+")"),t.push(l))}},t}},function(t,e,o){var r=o(11),n=r.Symbol;t.exports=n},function(t,e,o){function r(t){if("string"==typeof t)return t;if(i(t))return c?c.call(t):"";var e=t+"";return"0"==e&&1/t==-l?"-0":e}var n=o(8),i=o(13),l=1/0,a=n?n.prototype:void 0,c=a?a.toString:void 0;t.exports=r},function(t,e){(function(e){var o="object"==typeof e&&e&&e.Object===Object&&e;t.exports=o}).call(e,function(){return this}())},function(t,e,o){var r=o(10),n="object"==typeof self&&self&&self.Object===Object&&self,i=r||n||Function("return this")();t.exports=i},function(t,e){function o(t){return!!t&&"object"==typeof t}t.exports=o},function(t,e,o){function r(t){return"symbol"==typeof t||n(t)&&a.call(t)==i}var n=o(12),i="[object Symbol]",l=Object.prototype,a=l.toString;t.exports=r},function(t,e,o){function r(t){return null==t?"":n(t)}var n=o(9);t.exports=r},function(t,e,o){function r(t){var e=++i;return n(t)+e}var n=o(14),i=0;t.exports=r},function(t,e,o){function r(t,e){for(var o=0;o<t.length;o++){var r=t[o],n=d[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(u(r.parts[i],e))}else{for(var l=[],i=0;i<r.parts.length;i++)l.push(u(r.parts[i],e));d[r.id]={id:r.id,refs:1,parts:l}}}}function n(t){for(var e=[],o={},r=0;r<t.length;r++){var n=t[r],i=n[0],l=n[1],a=n[2],c=n[3],u={css:l,media:a,sourceMap:c};o[i]?o[i].parts.push(u):e.push(o[i]={id:i,parts:[u]})}return e}function i(t,e){var o=h(),r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?o.insertBefore(e,r.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(e)}}function l(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function c(t){var e=document.createElement("link");return e.rel="stylesheet",i(t,e),e}function u(t,e){var o,r,n;if(e.singleton){var i=y++;o=b||(b=a(e)),r=p.bind(null,o,i,!1),n=p.bind(null,o,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=c(e),r=f.bind(null,o),n=function(){l(o),o.href&&URL.revokeObjectURL(o.href)}):(o=a(e),r=s.bind(null,o),n=function(){l(o)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else n()}}function p(t,e,o,r){var n=o?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,n);else{var i=document.createTextNode(n),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(i,l[e]):t.appendChild(i)}}function s(t,e){var o=e.css,r=e.media;e.sourceMap;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}function f(t,e){var o=e.css,r=(e.media,e.sourceMap);r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var n=new Blob([o],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(n),i&&URL.revokeObjectURL(i)}var d={},m=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},v=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=m(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,y=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=v()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var o=n(t);return r(o,e),function(t){for(var i=[],l=0;l<o.length;l++){var a=o[l],c=d[a.id];c.refs--,i.push(c)}if(t){var u=n(t);r(u,e)}for(var l=0;l<i.length;l++){var c=i[l];if(0===c.refs){for(var p=0;p<c.parts.length;p++)c.parts[p]();delete d[c.id]}}}};var x=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}()},function(t,e,o){var r=o(6);"string"==typeof r&&(r=[[t.id,r,""]]);o(16)(r,{});r.locals&&(t.exports=r.locals)},function(t,o){t.exports=e}])});