(this.webpackJsonpsmart=this.webpackJsonpsmart||[]).push([[0],{10:function(e,t,a){e.exports={"nav-link":"Styles_nav-link__p-frV","active-nav-link":"Styles_active-nav-link__2kCc3","signup-form":"Styles_signup-form__3yxbf"}},15:function(e,t){t.isNotEmpty=function(e){return""!==e.trim()},t.isEmail=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},t.isValidMobileNumber=function(e){return/^\d{10}$/.test(String(e))},t.isValidPassword=function(e){return new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})").test(String(e))},t.isValidConfirmPassword=function(e,t){return e===t}},49:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(20),l=a.n(c),r=a(14),i=(a(49),a(6)),o=a(81),j=a(40),d=a(79),u=a(80),b=a(10),m=a.n(b),x=a(1),h=function(){return Object(x.jsxs)(o.a,{bg:"dark",variant:"dark",expand:"lg",sticky:"top",children:[Object(x.jsx)(j.a,{md:{span:1,offset:1},children:Object(x.jsx)(r.b,{exact:!0,to:"/",className:m.a["nav-link"],activeClassName:m.a["active-nav-link"],children:"Homepage"})}),Object(x.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(x.jsx)(d.a,{children:Object(x.jsxs)(u.a,{children:[Object(x.jsx)(j.a,{md:{span:1},children:Object(x.jsx)(r.b,{to:"/about",className:m.a["nav-link"],activeClassName:m.a["active-nav-link"],children:"About"})}),Object(x.jsx)(j.a,{md:{span:2,offset:7},children:Object(x.jsx)(r.b,{to:"/login",className:m.a["nav-link"],activeClassName:m.a["active-nav-link"],children:"Login"})}),Object(x.jsx)(j.a,{md:{span:2},children:Object(x.jsx)(r.b,{to:"/signup",className:m.a["nav-link"],activeClassName:m.a["active-nav-link"],children:"Signup"})})]})})})]})},O=function(e){return Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)(h,{}),Object(x.jsx)("main",{children:e.children})]})},f=function(){return Object(x.jsx)(d.a,{children:Object(x.jsx)("div",{className:"row justify-content-center pt-4 pb-4",children:Object(x.jsx)("div",{className:"col-4",children:Object(x.jsx)("h1",{children:"Home Page"})})})})},p=function(){return Object(x.jsx)(d.a,{children:Object(x.jsx)("div",{className:"row justify-content-center pt-4 pb-4",children:Object(x.jsx)("div",{className:"col-4",children:Object(x.jsx)("h1",{children:"About Page"})})})})},v=a(16),g=function(e){var t=Object(n.useState)(""),a=Object(v.a)(t,2),s=a[0],c=a[1],l=Object(n.useState)(!1),r=Object(v.a)(l,2),i=r[0],o=r[1],j=e(s);return{value:s,isValid:j,hasError:!j&&i,valueChangeHandler:function(e){c(e.target.value)},inputBlurHandler:function(e){o(!0)},reset:function(){c(""),o(!1)}}},N=a(82),w=a(42),y=a(43),C=a(83),k=a(15),S=function(e){var t=g(k.isEmail),a=t.value,s=t.isValid,c=t.hasError,l=t.valueChangeHandler,r=t.inputBlurHandler,o=t.reset,j=g(k.isNotEmpty),b=j.value,h=j.isValid,O=j.hasError,f=j.valueChangeHandler,p=j.inputBlurHandler,S=j.reset,E=!1,P=Object(n.useState)(!1),H=Object(v.a)(P,2),B=H[0],V=H[1];s&&h&&(E=!0);return Object(x.jsxs)(d.a,{children:[Object(x.jsx)(i.a,{when:B,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),Object(x.jsxs)(N.a,{onSubmit:function(e){e.preventDefault(),console.log(E),E&&(console.log("Submitted!"),console.log(a),o(),S())},className:m.a["signup-form"],onFocus:function(){V(!0)},children:[Object(x.jsx)(w.a,{className:"mb-4",children:Object(x.jsxs)(u.a,{className:"mb-5",children:[Object(x.jsx)(y.a,{type:"text",id:"email",value:a,onChange:l,onBlur:r,placeholder:"Email"}),Object(x.jsx)("small",{className:"text-danger d-flex justify-content-between d-flex justify-content-between",children:c&&Object(x.jsx)("p",{className:"error-text",children:"Please enter a valid email address."})})]})}),Object(x.jsx)(w.a,{className:"mb-4",children:Object(x.jsxs)(u.a,{className:"mb-5",children:[Object(x.jsx)(y.a,{type:"password",id:"password",value:b,onChange:f,onBlur:p,placeholder:"Password"}),Object(x.jsx)("small",{className:"text-danger d-flex justify-content-between d-flex justify-content-between",children:O&&Object(x.jsx)("p",{className:"error-text",children:"Please enter a password"})})]})}),Object(x.jsx)(u.a,{children:Object(x.jsx)(C.a,{disabled:!E,type:"submit",onClick:function(){V(!1)},children:"Submit"})})]})]})},E=function(){return Object(x.jsxs)(d.a,{children:[Object(x.jsx)("div",{className:"row justify-content-center pt-4 pb-4",children:Object(x.jsx)("div",{className:"col-4",children:Object(x.jsx)("h1",{children:"Login Page"})})}),Object(x.jsx)(S,{})]})},P=a(57),H=function(e){var t=g(k.isNotEmpty),a=t.value,s=t.isValid,c=t.hasError,l=t.valueChangeHandler,r=t.inputBlurHandler,o=t.reset,j=g(k.isNotEmpty),b=j.value,h=j.isValid,O=j.hasError,f=j.valueChangeHandler,p=j.inputBlurHandler,S=j.reset,E=g(k.isEmail),H=E.value,B=E.isValid,V=E.hasError,I=E.valueChangeHandler,_=E.inputBlurHandler,T=E.reset,A=g(k.isValidMobileNumber),L=A.value,D=A.isValid,F=A.hasError,M=A.valueChangeHandler,z=A.inputBlurHandler,Z=A.reset,J=g(k.isValidPassword),$=J.value,R=J.isValid,q=J.hasError,G=J.valueChangeHandler,K=J.inputBlurHandler,Q=J.reset,U=g(k.isValidConfirmPassword.bind(null,$)),W=U.value,X=U.isValid,Y=U.hasError,ee=U.valueChangeHandler,te=U.inputBlurHandler,ae=U.reset,ne=!1,se=Object(n.useState)(!1),ce=Object(v.a)(se,2),le=ce[0],re=ce[1];s&&h&&B&&D&&R&&X&&(ne=!0);return Object(x.jsxs)(d.a,{children:[Object(x.jsx)(i.a,{when:le,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),Object(x.jsxs)(N.a,{onSubmit:function(e){e.preventDefault(),console.log(ne),ne&&P({method:"put",url:"http://localhost:8080/signup",data:{firstname:a,lastname:b,email:H,mobile_number:L,password:$}}).then((function(e){o(),S(),T(),Z(),Q(),ae(),console.log(e)})).catch((function(e){console.log(e)}))},className:m.a["signup-form"],onFocus:function(){re(!0)},children:[Object(x.jsx)(w.a,{className:"mb-4",children:Object(x.jsxs)(u.a,{className:"mb-5",children:[Object(x.jsx)(y.a,{type:"text",id:"firstname",value:a,onChange:l,onBlur:r,placeholder:"First Name"}),Object(x.jsx)("small",{className:"text-danger d-flex justify-content-between d-flex justify-content-between",children:c&&Object(x.jsx)("p",{className:"error-text",children:"Please enter a first name."})})]})}),Object(x.jsx)(w.a,{className:"mb-4",children:Object(x.jsxs)(u.a,{className:"mb-5",children:[Object(x.jsx)(y.a,{type:"text",id:"lastname",value:b,onChange:f,onBlur:p,placeholder:"Last Name"}),Object(x.jsx)("small",{className:"text-danger d-flex justify-content-between d-flex justify-content-between",children:O&&Object(x.jsx)("p",{className:"error-text",children:"Please enter a last name."})})]})}),Object(x.jsx)(w.a,{className:"mb-4",children:Object(x.jsxs)(u.a,{className:"mb-5",children:[Object(x.jsx)(y.a,{type:"text",id:"email",value:H,onChange:I,onBlur:_,placeholder:"Email"}),Object(x.jsx)("small",{className:"text-danger d-flex justify-content-between d-flex justify-content-between",children:V&&Object(x.jsx)("p",{className:"error-text",children:"Please enter a valid email address."})})]})}),Object(x.jsx)(w.a,{className:"mb-4",children:Object(x.jsxs)(u.a,{className:"mb-5",children:[Object(x.jsx)(y.a,{type:"text",id:"mobile_number",value:L,onChange:M,onBlur:z,placeholder:"Mobile Number"}),Object(x.jsx)("small",{className:"text-danger d-flex justify-content-between d-flex justify-content-between",children:F&&Object(x.jsx)("p",{className:"error-text",children:"Please enter a valid mobile number."})})]})}),Object(x.jsx)(w.a,{className:"mb-4",children:Object(x.jsxs)(u.a,{className:"mb-5",children:[Object(x.jsx)(y.a,{type:"password",id:"password",value:$,onChange:G,onBlur:K,placeholder:"Password"}),Object(x.jsx)("small",{className:"text-danger d-flex justify-content-between d-flex justify-content-between",children:q&&Object(x.jsx)("p",{className:"error-text",children:"Password should contain lowercase, uppercase, numerical character. Minimum length is 8 characters."})})]})}),Object(x.jsx)(w.a,{className:"mb-4",children:Object(x.jsxs)(u.a,{className:"mb-5",children:[Object(x.jsx)(y.a,{type:"password",id:"confirmPassword",value:W,onChange:ee,onBlur:te,placeholder:"Confirm Password"}),Object(x.jsx)("small",{className:"text-danger d-flex justify-content-between d-flex justify-content-between",children:Y&&Object(x.jsx)("p",{className:"error-text",children:"Passwords does not match"})})]})}),Object(x.jsx)(u.a,{children:Object(x.jsx)(C.a,{disabled:!ne,type:"submit",onClick:function(){re(!1)},children:"Submit"})})]})]})},B=function(){return Object(x.jsxs)(d.a,{children:[Object(x.jsx)("div",{className:"row justify-content-center pt-4 pb-4",children:Object(x.jsx)("div",{className:"col-4",children:Object(x.jsx)("h1",{children:"Signup Page"})})}),Object(x.jsx)(H,{})]})};var V,I=function(){return Object(x.jsx)(O,{children:Object(x.jsxs)(i.e,{children:[Object(x.jsx)(i.c,{path:"/",exact:!0,children:Object(x.jsx)(f,{})}),Object(x.jsx)(i.c,{path:"/about",exact:!0,children:Object(x.jsx)(p,{})}),Object(x.jsx)(i.c,{path:"/login",exact:!0,children:Object(x.jsx)(E,{})}),Object(x.jsx)(i.c,{path:"/signup",exact:!0,children:Object(x.jsx)(B,{})}),Object(x.jsx)(i.c,{path:"*",children:Object(x.jsx)(i.b,{to:"/"})})]})})},_=s.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){}}),T=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t},A=function(e){var t,a=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("expirationTime"),a=T(t);return a<=36e5?(localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),null):{token:e,duration:a}}();a&&(t=a.token);var s=Object(n.useState)(t),c=Object(v.a)(s,2),l=c[0],r=c[1],i=!!l,o=Object(n.useCallback)((function(){r(null),localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),V&&clearTimeout(V)}),[]);Object(n.useEffect)((function(){a&&(V=setTimeout(o,a.duration))}),[a,o]);var j={token:l,isLoggedIn:i,login:function(e,t){r(e),localStorage.setItem("token",e),localStorage.setItem("expirationTime",t);var a=T(t);V=setTimeout(o,a)},logout:o};return Object(x.jsx)(_.Provider,{value:j,children:e.children})};a(76);l.a.render(Object(x.jsx)(A,{children:Object(x.jsx)(r.a,{children:Object(x.jsx)(I,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.53d8cd1c.chunk.js.map