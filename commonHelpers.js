import{a as c}from"./assets/vendor-bdb8a163.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();c({method:"get",url:"https://jsonplaceholder.typicode.com/users"}).then(e=>console.log(e)).catch(e=>console.log(e));c.get("https://jsonplaceholder.typicode.com/users").then(e=>console.log(e)).catch(e=>console.log(e));c.get("https://jsonplaceholder.typicode.com/users").then(e=>{console.log(e.data),console.log(e.status),console.log(e.statusText),console.log(e.headers),console.log(e.config)}).catch(e=>{console.log(e)});
//# sourceMappingURL=commonHelpers.js.map
