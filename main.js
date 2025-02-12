(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>f});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),d=new URL(t(626),t.b),l=new URL(t(824),t.b),p=i()(o()),u=s()(d),m=s()(l);p.push([e.id,`/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n  \n* {\n    margin: 0;\n}\n  \nbody {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n}\n  \nimg, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n}\n  \ninput, button, textarea, select {\n    font: inherit;\n}\n  \np, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n}\n  \np {\n    text-wrap: pretty;\n}\nh1, h2, h3, h4, h5, h6 {\n    text-wrap: balance;\n}\n  \n#root, #__next {\n    isolation: isolate;\n}\n\ntable {\n    border-collapse: collapse;\n}\ntr {\n    border-bottom: 1px solid #ccc;\n}\nth, td {\n    text-align: left;\n    padding: 4px;\n}\n/* END OF RESET */\n\n@font-face {\n    font-family: 'robotoregular';\n    src: url(${u}) format('woff2'),\n         url(${m}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n:root {\n    font-family: "robotoregular", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --mainclr: white;\n    --secondclr: black;\n    --thirdclr: rgb(136, 195, 202);\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    align-items: center;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10vw;\n    background-color: var(--mainclr);\n    color: var(--thirdclr);\n    padding: 1rem 3rem;\n}\n\nheader input,\nheader button {\n    border: 2px solid var(--thirdclr);\n    border-radius: 0.5rem;\n    background-color: var(--mainclr);\n    color: var(--thirdclr);\n}\n\n#currentWeatherContainer {\n    padding: 1rem;\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: center;\n    background-color: var(--thirdclr);\n    color: var(--mainclr);\n}\n\n#todaysWeatherContainer > h3,\n#todaysWeatherContainer > h4 {\n    text-align: center;\n    color: var(--thirdclr);\n    text-decoration: underline;\n    margin-bottom: 0.5rem;\n}\n\n#todaysWeatherContainer > h3 {\n    font-size: 1.5rem;\n}\n\n#gridContainer {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n    padding: 1rem 4rem;\n\n}\n\n#gridContainer > * {\n    background-color: var(--thirdclr);\n    color: var(--mainclr);\n\n    height: 7rem;\n    padding: 2rem;\n    border-radius: 0.5rem;\n    box-shadow: 2px 2px 5px grey;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}`,""]);const f=p},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},824:(e,n,t)=>{e.exports=t.p+"1d5ffb77339156c3a280.woff"},626:(e,n,t)=>{e.exports=t.p+"c35257629d4835c976a4.woff2"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),d=t(56),l=t.n(d),p=t(540),u=t.n(p),m=t(113),f=t.n(m),h=t(208),v={};async function y(e){try{const n=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?unitGroup=metric&key=HM5U6KZ9J6SDFWKQU9C4GDQLQ&contentType=json`,{mode:"cors"}),t=async function(e){const n=e.resolvedAddress,t={};t.temp=e.currentConditions.temp,t.condition=e.currentConditions.conditions,t.time=e.currentConditions.datetime,t.precip=e.currentConditions.precip;const r={};return r.temp=e.days[0].temp,r.feelsLike=e.days[0].feelslike,r.tempMin=e.days[0].tempmin,r.tempMax=e.days[0].tempmax,r.desc=e.days[0].description,r.precip=e.days[0].precip,{location:n,currentConditions:t,today:r}}(await n.json());return t}catch{throw alert("Could not find location"),Error("Could not find location")}}v.styleTagTransform=f(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),o()(h.A,v),h.A&&h.A.locals&&h.A.locals;const g=document.querySelector("#searchForm");function C(e){const n=document.querySelector("#currentWeatherContainer");n.replaceChildren();const t=document.createElement("h3");t.textContent="Current Weather",n.appendChild(t);const r=document.createElement("p");r.textContent=e.currentConditions.condition,n.appendChild(r);const o=document.createElement("p");o.textContent="Temperature: "+e.currentConditions.temp+"°C",n.appendChild(o);const a=document.createElement("p");a.textContent="Precipitation: "+e.currentConditions.precip+"mm",n.appendChild(a);const i=document.createElement("p");i.textContent=e.location,n.appendChild(i);const c=document.createElement("p");c.textContent="Last Updated: "+e.currentConditions.time,n.appendChild(c)}function b(e){const n=document.querySelector("#todaysWeatherContainer");n.replaceChildren();const t=document.createElement("h3");t.textContent="Today's Forecast",n.appendChild(t);const r=document.createElement("h4");r.textContent=e.location,n.appendChild(r);const o=document.createElement("div");o.setAttribute("id","gridContainer"),n.appendChild(o);const a=document.createElement("p");a.textContent=e.today.desc,o.appendChild(a);const i=document.createElement("p");i.textContent="Temperature: "+e.today.temp+"°C",o.appendChild(i);const c=document.createElement("p");c.textContent="Precipitation: "+e.today.precip+"mm",o.appendChild(c);const s=document.createElement("p");s.textContent="Feels Like: "+e.today.feelsLike+"°C",o.appendChild(s);const d=document.createElement("p");d.textContent="Minimum Temperature: "+e.today.tempMin+"°C",o.appendChild(d);const l=document.createElement("p");l.textContent="Maximum Temperature: "+e.today.tempMax+"°C",o.appendChild(l)}g.addEventListener("submit",(e=>{e.preventDefault();const n=new FormData(g);y(Object.fromEntries(n).location).then((e=>{console.log(e),C(e),b(e)})),g.reset()})),y("Stockholm").then((e=>{console.log(e),C(e),b(e)}))})();