"use strict";var isSmallScreen=window.innerWidth<500;function getPoem(t,n){var e=document.querySelector(t),a=document.querySelector(n),o=new XMLHttpRequest;function i(){e.innerHTML="晚来天欲雪，".concat(isSmallScreen?"<br/>":"","能饮一杯无？"),a.innerHTML="【唐代】白居易《问刘十九》"}o.open("get","https://v2.jinrishici.com/one.json"),o.withCredentials=!0,o.timeout=3e3,o.onreadystatechange=function(){var t;4===o.readyState&&(200<=o.status&&o.status<300||304===o.status?(t=JSON.parse(o.responseText),isSmallScreen?(e.innerHTML=t.data.content.replace(/，/g,"，<br/>"),a.innerHTML="《".concat(t.data.origin.title,"》<br/>【").concat(t.data.origin.dynasty,"】").concat(t.data.origin.author)):(e.innerHTML=t.data.content,a.innerHTML="《".concat(t.data.origin.title,"》【").concat(t.data.origin.dynasty,"】").concat(t.data.origin.author))):i())},o.ontimeout=i,o.onerror=i,o.send()}getPoem("#poem","#info");