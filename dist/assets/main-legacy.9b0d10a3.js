System.register([],(function(e,t){"use strict";return{execute:function(){const e=function(e,t,r){return e()};String.prototype.toKebabCase=function(){return String(this).replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()},String.prototype.toCamelCase=function(e=" "){return this.split(e).map(((e,t)=>t>0?e.charAt(0).toUpperCase()+e.slice(1):e)).join("")};const r={"m-1":4,"m-2":8,"m-3":16,"m-4":24,"m-5":32,"m-6":64,"m-7":96,"m-8":128};((e,t)=>{globalThis.Watcher=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.getAttribute("data-rendered")&&e.target.setAttribute("data-opaque","true")}))}),e),Array.from(document.querySelectorAll(t)).forEach((e=>globalThis.Watcher.observe(e)))})({threshold:.1,rootMargin:`${2*r["m-3"]}px ${r["m-4"]/2*2}px`},".cc-load"),new Promise((async r=>{const o=[];document.getElementById("toggle-theme")&&await e((()=>t.import("./ToggleDarkMode-legacy.1ed5b8d8.js"))).then((e=>{(0,e.default)(document.getElementById("toggle-theme"))})),document.querySelectorAll("cc-card-basic").length&&await e((()=>t.import("./CardBasic-legacy.29c65dd6.js"))).then((e=>{o.push(e.default)})),document.querySelectorAll("cc-dropdown").length&&await e((()=>t.import("./Dropdown-legacy.c224d926.js"))).then((e=>{o.push(e.default)})),r(o)})).then((e=>{e.forEach((e=>{customElements.get(`cc-${e.name.toKebabCase()}`)||customElements.define(`cc-${e.name.toKebabCase()}`,e)}))}))}}}));