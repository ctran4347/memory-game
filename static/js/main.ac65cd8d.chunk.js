(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(6),s=c.n(a),i=(c(12),c(13),c.p,c(0));function l(){return Object(i.jsx)("header",{children:"Animal Crossing Memory Game"})}var o=c(7),j=c(2),b=c.p+"static/media/animal-crossing-loading.7404a483.gif";var u=function(e){var t=e.id,c=function(e,t){var c=Object(n.useState)(!0),r=Object(j.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(null),l=Object(j.a)(i,2),o=l[0],b=l[1];return Object(n.useEffect)((function(){s(!0),fetch(e).then((function(e){return e.json()})).then((function(e){b(e),s(!1)}))}),[t]),[a,o]}("https://acnhapi.com/v1/villagers/".concat(t),t),r=Object(j.a)(c,2),a=r[0],s=r[1],l={color:a?"unset":s["text-color"],backgroundColor:a?"unset":s["bubble-color"]};return Object(i.jsx)(i.Fragment,{children:a?Object(i.jsxs)("div",{className:"villager",children:[Object(i.jsx)("img",{className:"villager-loading-image",src:b}),Object(i.jsx)("div",{className:"villager-loading-text",children:"Loading"})]}):Object(i.jsxs)("div",{className:"villager",onClick:function(t){t.preventDefault(),e.handleScore(s.id)},children:[Object(i.jsx)("img",{className:"villager-image",alt:s.name["name-USen"],src:s.image_uri}),Object(i.jsx)("p",{className:"villager-name",style:l,children:s.name["name-USen"]}),Object(i.jsx)("p",{className:"villager-saying",children:s.saying})]})})};function d(e){var t=e.villagerIDs;return Object(i.jsx)("div",{class:"villager-grid",children:t.map((function(t){return Object(i.jsx)(u,{id:t,handleScore:e.handleScore})}))})}var g=function(e){return Object(i.jsxs)("div",{className:"score-board",children:[Object(i.jsxs)("div",{className:"current-score",children:["Score : ",e.score]}),Object(i.jsxs)("div",{className:"best-score",children:["Best Score : ",e.bestScore]})]})};function m(){var e=Object(n.useState)(0),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),s=Object(j.a)(a,2),l=s[0],b=s[1],u=Object(n.useState)(null!=localStorage.getItem("best-score")?localStorage.getItem("best-score"):0),m=Object(j.a)(u,2),h=m[0],O=m[1],v=Object(n.useState)([]),f=Object(j.a)(v,2),x=f[0],S=f[1],p=function(e,t,c){for(var n=[];n.length<e;){var r=Math.floor(Math.random()*c)+t;n.includes(r)||n.push(r)}return n}(5*(c+1),1,391);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(g,{score:l,bestScore:h}),Object(i.jsx)(d,{villagerIDs:p,handleScore:function(e){x.includes(e)?(l>h&&(O(l),localStorage.setItem("best-score",l)),b(0),S([])):(b(l+1),S([].concat(Object(o.a)(x),[e]))),r(Math.floor(l/10)%10)}})]})}var h=c.p+"static/media/github-icon.04ed74f3.svg";function O(){return Object(i.jsxs)("footer",{children:["Copyright 2021 \xa9 ctran4347",Object(i.jsx)("a",{href:"https://github.com/ctran4347",target:"_blank",rel:"norefererr",children:Object(i.jsx)("img",{className:"github-logo",src:h})})]})}var v=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(m,{}),Object(i.jsx)(O,{})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.ac65cd8d.chunk.js.map