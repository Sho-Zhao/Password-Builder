(this["webpackJsonppass-builder"]=this["webpackJsonppass-builder"]||[]).push([[0],{61:function(e,a,n){},85:function(e,a,n){},87:function(e,a,n){},96:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),s=n(25),i=n.n(s),l=(n(85),n(13)),r=n(15),o=(n(61),n(48),n(2));function d(e){var a=e.message;return Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-1"}),Object(o.jsx)("div",{className:"col-sm-10",children:Object(o.jsx)("h1",{className:"display",children:a})}),Object(o.jsx)("div",{className:"col-sm-1"})]})}n(87);var j=n(142),u=n(148),m=n(138),h=n(141);function b(e){var a=e.isCapital,n=void 0!==a&&a,t=e.isSymbol,c=void 0!==t&&t,s=e.checkChange,i=void 0===s?function(e){return e}:s,l=e.textSize,r=void 0===l?12:l,d=e.sizeChange,b=void 0===d?function(e){return e}:d;return Object(o.jsx)("div",{className:"controller",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-7",children:Object(o.jsx)(m.a,{id:"outlined-basic",label:"\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u30b5\u30a4\u30ba",variant:"outlined",select:!0,helperText:"\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u30b5\u30a4\u30ba(\u6587\u5b57\u6570)\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",value:r,onChange:function(e){return b(e.target.value)},children:[8,12,16,24,30,40,50].map((function(e,a){return Object(o.jsx)(h.a,{value:e,children:e},a)}))})}),Object(o.jsxs)("div",{className:"col-sm-5",children:[Object(o.jsx)(u.a,{control:Object(o.jsx)(j.a,{checked:n,onChange:function(e){return i(e.target.name)},color:"primary",name:"isCapital"}),label:"\u5927\u6587\u5b57\u3092\u4f7f\u7528"}),Object(o.jsx)(u.a,{control:Object(o.jsx)(j.a,{checked:c,onChange:function(e){return i(e.target.name)},color:"primary",name:"isSymbol"}),label:"\u8a18\u53f7\u3092\u4f7f\u7528"})]})]})})}var v=n(144),x=n(139),p=n(150),O=n(145),g=n(68),f={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function C(e){var a=e.msg,n=t.useState(!1),c=Object(l.a)(n,2),s=c[0],i=c[1];return Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-3"}),Object(o.jsx)("div",{className:"col-sm-6",id:"copyButton",children:Object(o.jsx)(g.CopyToClipboard,{text:a,children:Object(o.jsx)(v.a,{variant:"contained",size:"large",onClick:function(){return i(!0)},children:"Copy"})})}),Object(o.jsx)("div",{className:"col-sm-3",children:Object(o.jsx)(x.a,{open:s,onClose:function(){return i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(o.jsxs)(p.a,{sx:f,children:[Object(o.jsx)(O.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Password\u306f\u30b3\u30d4\u30fc\u3055\u308c\u307e\u3057\u305f\uff01"}),Object(o.jsx)(O.a,{id:"modal-modal-description",sx:{mt:2},children:"\u51fa\u6765\u305fPassword\u3092\u304a\u4f7f\u3044\u304f\u3060\u3055\u3044\u3002"})]})})})]})}var y=n(146),N=n(147);function w(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,t="!#$%&()",c="ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=e&&a?"abcdefghijklmnopqrstuvwxyz0123456789"+t+c:e?"abcdefghijklmnopqrstuvwxyz0123456789"+c:a?"abcdefghijklmnopqrstuvwxyz0123456789"+t:"abcdefghijklmnopqrstuvwxyz0123456789",i=t[Math.floor(Math.random()*t.length)],l=c[Math.floor(Math.random()*c.length)],o=Object(r.a)(Array(n)).map((function(){return s[Math.floor(Math.random()*s.length)]})).join("");return e&&a?o.includes(l)&&o.includes(i)?o:w(e,a,n):e?o.includes(l)?o:w(e,a,n):a?o.includes(i)?o:w(e,a,n):o}var k=function(){var e=Object(t.useState)([{name:"isCapital",value:!0},{name:"isSymbol",value:!0},{name:"passLength",value:12}]),a=Object(l.a)(e,2),n=a[0],c=a[1],s=w(n[0].value,n[1].value,n[2].value);return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:Object(o.jsx)(y.a,{position:"static",children:Object(o.jsx)(N.a,{children:Object(o.jsx)(O.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Password Builder"})})})}),Object(o.jsxs)("div",{className:"App-main",children:[Object(o.jsx)(d,{message:s}),Object(o.jsx)(C,{msg:s})]}),Object(o.jsx)(b,{isCapital:n[0].value,isSymbol:n[1].value,textSize:n[2].value,checkChange:function(e){var a=n.map((function(a){return a.name===e?{name:e,value:!a.value}:a}));c(a)},sizeChange:function(e){var a=n.map((function(a){return"passLength"===a.name?{name:"passLength",value:e}:a}));c(a)}})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(a){var n=a.getCLS,t=a.getFID,c=a.getFCP,s=a.getLCP,i=a.getTTFB;n(e),t(e),c(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),S()}},[[96,1,2]]]);
//# sourceMappingURL=main.437a1e49.chunk.js.map