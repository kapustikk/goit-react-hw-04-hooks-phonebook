(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{1:function(e,t,n){e.exports={form:"phonebook_form__1luIf",label:"phonebook_label__ibrek",input:"phonebook_input__31tJF",button:"phonebook_button__2qKOI",contactList:"phonebook_contactList__Cujnr",allContacts:"phonebook_allContacts__1oK5N"}},16:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),o=n.n(a),r=n(9),s=n.n(r),u=(n(16),n(5)),l=n(3),i=n(10),b=n.n(i),j=n(1),m=n.n(j);function f(e){var t=e.contacts,n=e.onSubmit,o=Object(a.useState)(""),r=Object(l.a)(o,2),s=r[0],i=r[1],b=Object(a.useState)(""),j=Object(l.a)(b,2),f=j[0],h=j[1];return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(""),h(""),function(){var e=t.reduce((function(e,t){return[].concat(Object(u.a)(e),[t.name])}),[]),n=t.reduce((function(e,t){return[].concat(Object(u.a)(e),[t.name])}),[]);return e.includes(s)||n.includes(f)?(alert("".concat(s," or ").concat(f," is already in contacts")),!0):""===s||""===f?(alert("Please enter full number or name"),!0):void 0}()||n(s,f)},className:m.a.form,children:[Object(c.jsxs)("label",{className:m.a.label,children:["Name",Object(c.jsx)("input",{type:"text",name:"name",value:s,onChange:function(e){return i(e.currentTarget.value)},className:m.a.input})]}),Object(c.jsxs)("label",{className:m.a.label,children:["Number",Object(c.jsx)("input",{type:"tel",name:"number",value:f,onChange:function(e){return h(e.currentTarget.value)},className:m.a.input})]}),Object(c.jsx)("button",{type:"submit",className:m.a.button,children:"Add contact"})]})}var h=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(c.jsx)("ul",{className:m.a.contactList,children:t.map((function(e){var t=e.id,a=e.name,o=e.number;return Object(c.jsxs)("li",{className:m.a.allContacts,children:[Object(c.jsxs)("p",{children:[a,": ",o]}),Object(c.jsx)("button",{onClick:function(){return n(t)},children:"Delete"})]},t)}))})},O=function(e){var t=e.value,n=e.onChange;return Object(c.jsx)("form",{className:m.a.form,children:Object(c.jsxs)("label",{className:m.a.label,children:["Find contact by name",Object(c.jsx)("input",{type:"text",value:t,onChange:n,className:m.a.input})]})})},d=[];function p(){var e=Object(a.useState)(d),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),i=s[0],j=s[1],m=Object(a.useRef)(!0);Object(a.useEffect)((function(){if(m.current){var e=localStorage.getItem("contacts"),t=JSON.parse(e);return t&&o(t),void(m.current=!1)}localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var p=n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(f,{onSubmit:function(e,t){var c={id:b.a.generate(),name:e,number:t};o([c].concat(Object(u.a)(n)))},contacts:n}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(O,{value:i,onChange:function(e){var t=e.target;j(t.value)}}),Object(c.jsx)(h,{contacts:p,onDeleteContact:function(e){o(n.filter((function(t){return t.id!==e})))}})]})})}var v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),v()}},[[25,1,2]]]);
//# sourceMappingURL=main.9dda2473.chunk.js.map