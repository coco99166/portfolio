(this.webpackJsonpportfolio_site=this.webpackJsonpportfolio_site||[]).push([[0],{48:function(e,t,a){e.exports=a.p+"static/media/KZ_resume.f1209853.pdf"},54:function(e,t,a){e.exports=a(85)},59:function(e,t,a){},60:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),i=a.n(r),o=(a(59),a(21)),c=a(22),s=a(28),m=a(26),u=a(31),h=a(5),d=a(12),E=a(19),b=a(53),p=(a(60),a(17)),f=a(13);var g=a(25),v=a(47);var y=function(e){return l.a.createElement(v.a,{className:"bg-transparent jumbotron-fluid"},l.a.createElement(d.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center "},l.a.createElement(f.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-4 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-8 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))};var k=function(e){return l.a.createElement(d.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center"},l.a.createElement(f.a,{md:8},e.children)))},w=a(23),C=a(49),N=a(48),S=a.n(N);var j=function(e){return l.a.createElement("div",null,l.a.createElement(y,{title:e.title}),l.a.createElement(k,null,l.a.createElement("p",null,"Hi there, my name is Charlotte."),l.a.createElement("p",null,"I recently graduated from University of British Columbia where I studied Mathematical Sciences."),l.a.createElement("p",null,"I am also a software developer who is constantly learning new things. Currently I am learning React"),l.a.createElement("p",null,"You can read more about my experience and skills in the PDF: ",l.a.createElement("a",{href:S.a,target:"_blank"},"Resume")),l.a.createElement("p",null,"Thanks for visiting! You can find me on : ",l.a.createElement(w.a,{variant:"outline-primary",target:"_blank",href:"https://www.linkedin.com/in/kexin-zhu-910627186"},"Linkedin  ",l.a.createElement(C.a,{variant:"primary"},"in"),l.a.createElement("span",{className:"sr-only"},"unread messages")))))},x=a(50),O=a(10),T=a(51),I=a.n(T),L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(x.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),console.log(e.target),n.setState({disabled:!0}),I.a.post("http://localhost:3030/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y,{title:this.props.title}),l.a.createElement(k,null,l.a.createElement("h4",{className:"py-2"},"Interested in more information? Shoot me an email blow or to coco99166@outlook.com directly"),l.a.createElement(O.a,{onSubmit:this.handleSubmit},l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(O.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{htmlFor:"email"},"Your email"),l.a.createElement(O.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(O.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(w.a,{className:"d-inline-block",variant:"light",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={title:"Garrett Love",headerLinks:[{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Be Relentless",subTitle:"Projects the make a difference",text:"Checkout my projects below"},about:{title:"About Me"},contact:{title:"Let's Talk",subTitle:"Interested in more information? Shoot me an email blow or to coco99166@outlook.com directly!"}},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"p-0",fluid:!0},l.a.createElement("div",{className:"bg"},l.a.createElement(E.a,{className:"border-bottom",bg:"semi-transparent",expand:"lg"},l.a.createElement(E.a.Brand,null,"Charlotte Zhu"),l.a.createElement(E.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(E.a.Collapse,null,l.a.createElement(b.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/portfolio"},"About"),l.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(h.a,{path:"/portfolio",render:function(){return l.a.createElement(j,{title:e.state.about.title})}}),l.a.createElement(h.a,{path:"/contact",render:function(){return l.a.createElement(L,{title:e.state.contact.title,subTitle:e.state.contact.subTitle})}}),l.a.createElement("div",{className:"fixed-bottom"},l.a.createElement(E.a,{variant:"lighht"},l.a.createElement(d.a,null,l.a.createElement(g.a,null,"Made by Charlotte Zhu")))))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(84);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.404b2f12.chunk.js.map