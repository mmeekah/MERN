(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,c){},28:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),r=c(17),l=c.n(r),i=(c(25),c(26),c(27),c(28),c(3)),o=c(2),j=c(5),b=c.n(j),u=function(e){var t=Object(s.useState)(""),c=Object(o.a)(t,2),a=c[0],r=c[1],l=Object(s.useState)(""),j=Object(o.a)(l,2),u=j[0],d=j[1],O=Object(s.useState)(""),p=Object(o.a)(O,2),h=p[0],m=p[1],x=Object(s.useState)(""),f=Object(o.a)(x,2),g=f[0],v=f[1],N=Object(s.useState)(""),y=Object(o.a)(N,2),k=y[0],S=y[1],T=Object(s.useState)(""),C=Object(o.a)(T,2),w=C[0],P=C[1],D=Object(s.useState)({}),E=Object(o.a)(D,2),F=E[0],_=E[1];return Object(n.jsx)("div",{className:"col-sm-3 ",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:a,petType:u,description:h,skillOne:g,skillTwo:k,skillThree:w};b.a.post("http://localhost:8000/api/pets",t).then((function(e){console.log(e),e.data.errors?_(e.data.errors):Object(i.c)("/")})).catch((function(e){return console.log(e)}))},children:[Object(n.jsxs)("div",{className:"form-group",children:[F.name?Object(n.jsx)("p",{className:"text-danger",children:F.name.message}):"",Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Pet Name...",onChange:function(e){return r(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[F.petType?Object(n.jsx)("p",{className:"text-danger",children:F.petType.message}):"",Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Pet Type...",onChange:function(e){return d(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[F.description?Object(n.jsx)("p",{style:{color:"red"},children:F.description.message}):"",Object(n.jsx)("textarea",{rows:"4",cols:"30",className:"form-control",placeholder:"Pet Decription...",onChange:function(e){return m(e.target.value)}})]}),Object(n.jsx)("p",{children:"Skills (optional)"}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Skill 1...",onChange:function(e){return v(e.target.value)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Skill 2...",onChange:function(e){return S(e.target.value)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Skill 3...",onChange:function(e){return P(e.target.value)}})}),Object(n.jsx)("input",{type:"submit",className:"btn btn-warning btn-block",value:"Add Pet"})]})})},d=function(e){var t=Object(s.useState)(e.pets),c=Object(o.a)(t,2),a=c[0],r=c[1],l=Object(s.useState)([]),j=Object(o.a)(l,2),b=(j[0],j[1],e.filterPets);e.petType;return Object(s.useEffect)((function(){r(e.pets)}),[e.pets]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"These pets are looking for a new home"}),Object(n.jsx)("button",{value:"fish",className:"btn btn-sm btn-info",onClick:function(){return b("Fish")},children:"Fish"}),Object(n.jsx)("button",{value:"cat",className:"btn btn-sm btn-info",onClick:function(){return b("Kitty")},children:"Cat"}),Object(n.jsx)("button",{value:"bird",className:"btn btn-sm btn-info",onClick:function(){return b("Bird")},children:"Bird"}),Object(n.jsxs)("table",{className:"table table-striped",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Type"}),Object(n.jsx)("th",{children:"Actions"})]})}),Object(n.jsx)("tbody",{children:a.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.petType}),Object(n.jsxs)("td",{children:[Object(n.jsx)(i.a,{to:"/pets/".concat(e._id),children:Object(n.jsx)("button",{className:"btn btn-success",children:"Details"})})," ",Object(n.jsx)(i.a,{to:"/pets/".concat(e._id,"/edit"),children:Object(n.jsx)("button",{className:"btn btn-warning",children:"Edit"})})]})]},e._id)}))})]})]})},O=function(e){var t=Object(s.useState)([]),c=Object(o.a)(t,2),a=c[0],r=c[1],l=Object(s.useState)([]),i=Object(o.a)(l,2),j=i[0],u=(i[1],new Set(a.map((function(e){return e.petType}))));console.log(u);return Object(s.useEffect)((function(){b.a.get("http://localhost:8000/api/pets").then((function(e){return r(e.data)}))}),[]),Object(n.jsx)("div",{children:Object(n.jsx)(d,{pets:a,petType:j,filterPets:function(e){var t=a.filter((function(t){return t.petType===e}));console.log(e),r(t)}})})},p=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(n.jsxs)("ul",{className:"nav",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.a,{className:"nav-link",to:"/",style:{color:"white"},children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.a,{className:"nav-link",to:"/new",style:{color:"white"},children:"Add"})})]})})})},h=c(19),m=function(e){var t=Object(s.useState)([]),c=Object(o.a)(t,2),a=c[0],r=c[1],l=Object(s.useState)({}),j=Object(o.a)(l,2),u=j[0],d=j[1];Object(s.useEffect)((function(){b.a.get("http://localhost:8000/api/pets/".concat(e.id)).then((function(e){d(Object(h.a)({},e.data))}))}),[e]);var O=function(e){b.a.delete("http://localhost:8000/api/pets/".concat(e)).then((function(t){console.log(t),function(e){r(a.filter((function(t){return t._id!==e})))}(e),Object(i.c)("/")})).catch((function(e){return console.log(e)}))};return Object(n.jsx)("div",{className:"col-sm-4 mb-3",children:Object(n.jsxs)("div",{className:"card text-white bg-secondary mb-3",children:[Object(n.jsxs)("div",{className:"card-header",children:["Details about: ",u.name]}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("p",{className:"card-text",children:Object(n.jsxs)("em",{children:["Type: ",u.petType]})}),Object(n.jsxs)("p",{className:"card-text",children:["Description: ",u.description]}),Object(n.jsx)("p",{className:"card-text",children:"Skills:"}),Object(n.jsxs)("ul",{className:"card-text",children:[Object(n.jsx)("li",{children:u.skillOne}),Object(n.jsx)("li",{children:u.skillTwo}),Object(n.jsx)("li",{children:u.skillThree})]})]}),Object(n.jsx)("div",{className:"card-footer",children:Object(n.jsx)("button",{className:"btn btn-info",onClick:function(e){O(u._id)},children:"Adopt"})})]})})},x=function(e){var t=e.id,c=Object(s.useState)(""),a=Object(o.a)(c,2),r=a[0],l=a[1],j=Object(s.useState)(""),u=Object(o.a)(j,2),d=u[0],O=u[1],p=Object(s.useState)(""),h=Object(o.a)(p,2),m=h[0],x=h[1],f=Object(s.useState)(""),g=Object(o.a)(f,2),v=g[0],N=g[1],y=Object(s.useState)(""),k=Object(o.a)(y,2),S=k[0],T=k[1],C=Object(s.useState)(""),w=Object(o.a)(C,2),P=w[0],D=w[1],E=Object(s.useState)({}),F=Object(o.a)(E,2),_=F[0],A=F[1];Object(s.useEffect)((function(){b.a.get("http://localhost:8000/api/pets/".concat(t)).then((function(e){l(e.data.name),x(e.data.description),O(e.data.petType),N(e.data.skillOne),T(e.data.skillTwo),D(e.data.skillThree)}))}),[e]);return Object(n.jsx)("div",{className:"col-sm-3 ",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={name:r,petType:d,description:m,skillOne:v,skillTwo:S,skillThree:P};b.a.put("http://localhost:8000/api/pets/".concat(t),c).then((function(e){console.log(e),e.data.errors?A(e.data.errors):Object(i.c)("/pets/".concat(t))})).catch((function(e){return console.log(e)}))},children:[Object(n.jsxs)("div",{className:"form-group",children:[_.name?Object(n.jsx)("p",{className:"text-danger",children:_.name.message}):"",Object(n.jsx)("input",{type:"text",className:"form-control",value:r,onChange:function(e){return l(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[_.petType?Object(n.jsx)("p",{className:"text-danger",children:_.petType.message}):"",Object(n.jsx)("input",{type:"text",className:"form-control",value:d,onChange:function(e){return O(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[_.description?Object(n.jsx)("p",{style:{color:"red"},children:_.description.message}):"",Object(n.jsx)("textarea",{rows:"4",cols:"30",className:"form-control",value:m,onChange:function(e){return x(e.target.value)}})]}),Object(n.jsx)("p",{children:"Skills (optional)"}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control",value:v,onChange:function(e){return N(e.target.value)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control",value:S,onChange:function(e){return T(e.target.value)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control",value:P,onChange:function(e){return D(e.target.value)}})}),Object(n.jsx)("input",{type:"submit",className:"btn btn-warning btn-block",value:"Update"})]})})};var f=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(p,{}),Object(n.jsxs)(i.b,{children:[Object(n.jsx)(O,{path:"/"}),Object(n.jsx)(u,{path:"/new"}),Object(n.jsx)(m,{path:"/pets/:id"}),Object(n.jsx)(x,{path:"/pets/:id/edit"})]})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};l.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),g()}},[[52,1,2]]]);
//# sourceMappingURL=main.eebec5e6.chunk.js.map