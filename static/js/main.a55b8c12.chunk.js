(this.webpackJsonpportfolio_site=this.webpackJsonpportfolio_site||[]).push([[0],{51:function(e,t,a){e.exports=a(82)},56:function(e,t,a){},57:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),i=(a(56),a(20)),s=a(21),o=a(26),m=a(24),u=a(29),h=a(5),d=a(15),E=a(18),b=a(50),g=(a(57),a(45)),p=a(22),f=a(16);var v=function(e){return l.a.createElement(g.a,{className:"bg-transparent jumbotron-fluid"},l.a.createElement(d.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center "},l.a.createElement(f.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-4 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))};var C=function(e){return l.a.createElement(d.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center"},l.a.createElement(f.a,{md:8},e.children)))};var N=function(e){return l.a.createElement("div",null,l.a.createElement(v,{title:e.title}),l.a.createElement(C,null,l.a.createElement("p",null,"Hi there, my name is Charlotte."),l.a.createElement("p",null,"I'm constantly learning new things. Currently I am learning React"),l.a.createElement("p",null,"When I'm not learning something ")))},S=a(46),y=a(10),k=a(48),j=a(47),w=a.n(j),O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(S.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),console.log(e.target),n.setState({disabled:!0}),w.a.post("http://localhost:3030/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,{title:this.props.title}),l.a.createElement(C,null,l.a.createElement(y.a,{onSubmit:this.handleSubmit},l.a.createElement(y.a.Group,null,l.a.createElement(y.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(y.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(y.a.Group,null,l.a.createElement(y.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(y.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(y.a.Group,null,l.a.createElement(y.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(y.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(k.a,{className:"d-inline-block",variant:"light",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component),x=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={title:"Garrett Love",headerLinks:[{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Be Relentless",subTitle:"Projects the make a difference",text:"Checkout my projects below"},about:{title:"About Me"},contact:{title:"Let's Talk"}},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"p-0",fluid:!0},l.a.createElement("div",{className:"bg"},l.a.createElement(E.a,{className:"border-bottom",bg:"semi-transparent",expand:"lg"},l.a.createElement(E.a.Brand,null,"Charlotte Zhu"),l.a.createElement(E.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(E.a.Collapse,null,l.a.createElement(b.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/portfolio"},"About"),l.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(h.a,{path:"/portfolio",render:function(){return l.a.createElement(N,{title:e.state.about.title})}}),l.a.createElement(h.a,{path:"/contact",render:function(){return l.a.createElement(O,{title:e.state.contact.title})}}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(81);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.a55b8c12.chunk.js.map