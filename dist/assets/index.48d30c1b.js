import{j as d,u as f,a as y,b as g,r as C,R as F,c as _,H as v,d as x,e as o}from"./vendor.e20987e3.js";const B=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=u(e);fetch(e.href,n)}};B();const N="_header_1mhoy_1",R="_action_1mhoy_17";var h={header:N,action:R};const j=[{name:"\u9996\u9875",path:"/home"},{name:"\u7B80\u5386",path:"/resume"},{name:"\u4F5C\u54C1\u96C6",path:"/product"},{name:"\u8054\u7CFB\u65B9\u5F0F",path:"/connect"}],t=d.exports.jsx,s=d.exports.jsxs,L=d.exports.Fragment,c=()=>{const l=f(),r=y(),u=g(e=>{l(e)}),a=C.exports.useCallback(e=>r.pathname.includes(e),[r.pathname]);return t("header",{className:h.header,children:j.map(e=>t("span",{className:a(e.path)?h.action:"",onClick:()=>u(e.path),children:e.name},e.path))})},b="_homeContainer_1d2rc_1",E="_content_1d2rc_12";var m={homeContainer:b,content:E};const p=()=>t(L,{children:s("div",{className:m.homeContainer,children:[t(c,{}),t("div",{className:m.content,children:"\u6211\u662F\u70ED\u7231\u8BBE\u8BA1\u7684\u80E1\u8776"})]})}),O=()=>s("div",{children:[t(c,{}),"\u7B80\u5386"]}),H=()=>s("div",{children:[t(c,{}),"\u4F5C\u54C1"]}),M=()=>s("div",{children:[t(c,{}),"\u8054\u7CFB\u65B9\u5F0F"]});F.render(t(_.StrictMode,{children:t(v,{children:s(x,{children:[t(o,{path:"/",element:t(p,{})}),t(o,{path:"/home",element:t(p,{})}),t(o,{path:"/resume",element:t(O,{})}),t(o,{path:"/product",element:t(H,{})}),t(o,{path:"/connect",element:t(M,{})}),t(o,{path:"*",element:t("main",{style:{padding:"1rem"},children:t("p",{children:"There's nothing here!"})})})]})})}),document.getElementById("root"));