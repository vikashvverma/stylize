(this["webpackJsonpstylised-frontend"]=this["webpackJsonpstylised-frontend"]||[]).push([[0],{135:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(0),i=a.n(c),o=a(13),s=a.n(o),r=(a(90),a(74)),l=a(16),d=a(77),j=a.p+"static/media/logo.6ce24c58.svg",u=(a(91),a(169)),g=a(167),p=a(170),b=a(172),f=a(75),m=a.n(f),h=a(168),O=a(171),x=a(177),y=a(176),v=a(55),C=a(173),S=a(174),k=m()((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"},media:{maxWidth:600,height:600}}}));function w(e){return Object(n.jsx)(x.a,Object(d.a)({elevation:6,variant:"filled"},e))}var F=function(){var e=k(),t=i.a.useState(!1),a=Object(l.a)(t,2),o=a[0],s=a[1],d=i.a.useState(""),f=Object(l.a)(d,2),m=f[0],x=f[1],F=i.a.useState(""),I=Object(l.a)(F,2),N=I[0],B=I[1],P=Object(c.useState)(""),T=Object(l.a)(P,2),A=T[0],D=T[1],E=Object(c.useState)({}),J=Object(l.a)(E,2),L=J[0],M=J[1],W=Object(c.useState)({}),z=Object(l.a)(W,2),H=z[0],U=z[1],q=Object(c.useState)(""),G=Object(l.a)(q,2),K=G[0],Q=G[1],R=Object(c.useState)(""),V=Object(l.a)(R,2),X=V[0],Y=V[1],Z=0,$=function(e,t){"clickaway"!==t&&s(!1)},_=function(){v.get("https://etest.programminggeek.in/v1/v1/files").then((function(e){if(e&&e.data&&e.data.data&&e.data.data.images){var t,a=Object(r.a)(e.data.data.images);try{for(a.s();!(t=a.n()).done;){var n=t.value;n.uuid==m&&n.stylised&&(Y("https://etest.programminggeek.in/v1/".concat(m,"/stylised-output.png")),clearInterval(Z))}}catch(c){a.e(c)}finally{a.f()}}}))},ee=function(e,t,a){var n=new FormData;n.append("file",e,t),console.log(e);var c={headers:{"Content-Type":"multipart/form-data",uuid:m,name:t,type:a}};v.post("https://etest.programminggeek.in/v1/v1/upload",n,c).then((function(e){console.log(e),x(e.data.data),"style"==a&&(_(),Z=setInterval(_,5e3))})).catch((function(e){console.log(e)}))};return Object(c.useEffect)((function(){H&&K&&ee(H,K,"style")}),[m]),Object(n.jsx)(u.a,{maxWidth:"xl",className:"App",children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(n.jsx)(p.a,{variant:"h4",component:"h1",gutterBottom:!0,children:"Stylize your image"}),Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)("input",{accept:"image/*",className:e.input,id:"icon-content-file",type:"file",onChange:function(e){e.target&&e.target.files&&e.target.files[0]&&(D(e.target.files[0].name),M(e.target.files[0]))}}),Object(n.jsxs)("label",{htmlFor:"icon-content-file",children:[Object(n.jsx)(h.a,{color:"primary","aria-label":"upload picture",component:"span",children:Object(n.jsx)(O.a,{})}),A||"Select Content Image"]})]}),Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)("input",{accept:"image/*",className:e.input,id:"icon-style-file",type:"file",onChange:function(e){e.target&&e.target.files&&e.target.files[0]&&(Q(e.target.files[0].name),U(e.target.files[0]))}}),Object(n.jsxs)("label",{htmlFor:"icon-style-file",children:[Object(n.jsx)(h.a,{color:"primary","aria-label":"upload picture",component:"span",children:Object(n.jsx)(O.a,{})}),K||"Select Style Image"]})]}),m?"":Object(n.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(e){if(!K||!A)return B("Please select content and style files!"),void s(!0);ee(L,A,"content")},hidden:m,children:"Upload"}),Object(n.jsx)(y.a,{open:o,autoHideDuration:6e3,onClose:$,children:Object(n.jsx)(w,{onClose:$,severity:"success",children:N})}),Object(n.jsx)(C.a,{}),m&&!X?Object(n.jsx)(S.a,{color:"secondary",hidden:!0}):"",m&&!X&&"Converting Image",X&&Object(n.jsx)("img",{src:X,width:"50%",alt:"logo"}),X&&Object(n.jsx)(b.a,{onClick:function(){window.location.reload()},children:"Try again"})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,178)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),i(e),o(e)}))},N=a(175),B=a(166),P=a(48),T=a(76),A=Object(T.a)({palette:{type:"light",primary:{main:"#61dafb",light:"#61dafb",dark:"#21a1c4"},secondary:{main:"#b5ecfb",light:"#61dafb",dark:"#21a1c4"},error:{main:P.a.A400},background:{default:"#282c34"}},overrides:{MuiPaper:{root:{padding:"20px 10px",margin:"10px",backgroundColor:"#fff"}},MuiButton:{root:{margin:"5px"}}}});s.a.render(Object(n.jsxs)(B.a,{theme:A,children:[Object(n.jsx)(N.a,{}),Object(n.jsx)(F,{})]}),document.getElementById("root")),I()},90:function(e,t,a){},91:function(e,t,a){}},[[135,1,2]]]);
//# sourceMappingURL=main.e9f9a01a.chunk.js.map