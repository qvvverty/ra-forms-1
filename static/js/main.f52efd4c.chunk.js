(this["webpackJsonpra-forms-1"]=this["webpackJsonpra-forms-1"]||[]).push([[0],{10:function(t,n,e){},12:function(t,n,e){"use strict";e.r(n);var r=e(1),c=e.n(r),a=e(3),s=e.n(a),o=(e(9),e(10),e(4)),u=e(0);function i(t){var n=t.color;return Object(u.jsx)("div",{className:"background",style:{backgroundColor:n}})}function b(t){var n=t.onInputChange;return Object(u.jsx)("input",{onChange:n,className:"input",type:"text",name:"hex",placeholder:"HEX"})}function j(t){var n=t.rgb;return Object(u.jsx)("input",{className:"input",type:"text",name:"rgb",value:n,placeholder:"RGB"})}function g(){var t=Object(r.useState)(""),n=Object(o.a)(t,2),e=n[0],c=n[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsx)(b,{onInputChange:function(t){var n=t.target.value;7===n.length&&(/#[\d|a-f|A-F]{6}$/.test(n)?c(function(t){var n="";return n="rgb(",n+=parseInt(t.substring(1,3),16)+", ",(n+=parseInt(t.substring(3,5),16)+", ")+parseInt(t.substring(5,7),16)+")"}(n)):c("\u041e\u0448\u0438\u0431\u043a\u0430!"))}}),Object(u.jsx)(j,{rgb:e})]}),Object(u.jsx)(i,{color:e})]})}var l=function(){return Object(u.jsx)(g,{})},p=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,13)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,s=n.getTTFB;e(t),r(t),c(t),a(t),s(t)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),p()},9:function(t,n,e){}},[[12,1,2]]]);
//# sourceMappingURL=main.f52efd4c.chunk.js.map