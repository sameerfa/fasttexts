(this.webpackJsonpfasttxts=this.webpackJsonpfasttxts||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(12),s=n.n(a),i=(n(41),n(72)),c=n(69),r=n(70),l=n(71),d=(n(42),n(14)),h=n(68),u=n(31),f=(n(44),n(30)),j=n(4);var b=function(){var e=Object(o.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(u.a)().country;return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"fasttext__form",children:[Object(j.jsx)("p",{children:"Send Whatsapp messages without saving the number."}),Object(j.jsx)(f.a,{defaultCountry:s,value:n,placeholder:"Phone Number",onChange:a,autoComplete:"none"}),Object(j.jsxs)(i.a,{type:"submit",className:"fasttext__button",onClick:function(e){e.preventDefault();var t=n.split("+")[1];t&&window.open("https://api.whatsapp.com/send?phone="+t)},children:[Object(j.jsx)(h.a,{})," Send"]})]})})};var p=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{children:"FastTexts"}),Object(j.jsx)(c.a,{})]}),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("a",{href:"https://github.com/sameerfa/fasttexts/tree/master",children:Object(j.jsx)(i.a,{children:Object(j.jsx)(r.a,{})})}),Object(j.jsx)("a",{href:"mailto:write2sameerfa@gmail.com",children:Object(j.jsx)(i.a,{children:Object(j.jsx)(l.a,{})})})]})]})]})},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(j.jsx)(p,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/fasttexts",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/fasttexts","/worker.js");v?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):m(t,e)}))}}()}},[[50,1,2]]]);
//# sourceMappingURL=main.65c92eb4.chunk.js.map