var n=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var c=(a,s)=>{var t={};for(var e in a)p.call(a,e)&&s.indexOf(e)<0&&(t[e]=a[e]);if(a!=null&&n)for(var e of n(a))s.indexOf(e)<0&&v.call(a,e)&&(t[e]=a[e]);return t};import{a as _,q as m,c as f,f as b,s as g}from"./vendor.9d984cb0.js";import{c as x}from"./classnames.cb3d719b.js";import{_ as C}from"./plugin-vue_export-helper.5a098b48.js";var j=_({props:{label:String,value:String},setup(a,{slots:s}){const o=a,{label:t,value:e}=o,r=c(o,["label","value"]),i=()=>s.default?s.default():t,l=m("select-context"),u=()=>{l.isDown.value=!1,l.emit("on-change",{label:t,value:e}),l.emit("update:modelValue",e),l.selectValue.value=t},d=f(()=>({"mini-web-option":!0,active:l.selectValue.value===e}));return()=>b("div",g(r,{onClick:u,"data-label":t,"data-value":e,class:x(d.value)}),[i()])}});var y=C(j,[["__scopeId","data-v-b405d9c2"]]);export{y as default};
