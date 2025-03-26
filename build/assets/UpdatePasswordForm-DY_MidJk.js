import{r as i,m as h,j as s}from"./app-BOXftbEd.js";import{I as n,e as d,g as c,z as v}from"./TextInput-COZ-DgJ0.js";import{P as g}from"./PrimaryButton-5xrHidI_.js";function P({className:m=""}){const p=i.useRef(),l=i.useRef(),{data:e,setData:a,errors:t,put:w,reset:o,processing:x,recentlySuccessful:f}=h({current_password:"",password:"",password_confirmation:""}),j=r=>{r.preventDefault(),w(route("password.update"),{preserveScroll:!0,onSuccess:()=>o(),onError:u=>{u.password&&(o("password","password_confirmation"),p.current.focus()),u.current_password&&(o("current_password"),l.current.focus())}})};return s.jsxs("section",{className:m,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Update Password"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsxs("form",{onSubmit:j,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(n,{htmlFor:"current_password",value:"Current Password"}),s.jsx(d,{id:"current_password",ref:l,value:e.current_password,onChange:r=>a("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(c,{message:t.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(n,{htmlFor:"password",value:"New Password"}),s.jsx(d,{id:"password",ref:p,value:e.password,onChange:r=>a("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(c,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(n,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(d,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>a("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(c,{message:t.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(g,{disabled:x,children:"Save"}),s.jsx(v,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{P as default};
