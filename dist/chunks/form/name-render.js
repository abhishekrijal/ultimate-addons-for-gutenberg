(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[39],{296:function(e,t,a){"use strict";var n=a(15),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,'.uagb-columns__wrap::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border: 1px dashed #03ddff;\n  content: ""; }\n',""]),t.a=r},535:function(e,t,a){"use strict";a.r(t);var n,r=a(4),u=a.n(r),o=a(0),l=a.n(o),s=a(1),i=a(14),c=a.n(i),d=a(296),m=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=d.a.locals||{},g.use=function(){return m++||(n=c()(d.a,b)),g},g.unuse=function(){m>0&&!--m&&(n(),n=null)};var f=g,p=a(7),_=a(5);const h=e=>{Object(o.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]),e=e.parentProps;const{attributes:t,setAttributes:a,isSelected:n}=e,{block_id:r,nameRequired:i,name:c,placeholder:d}=t,m=i?Object(s.__)("required","ultimate-addons-for-gutenberg"):"";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:u()("uagb-forms-name-wrap","uagb-forms-field-set","uagb-block-"+r)},n&&l.a.createElement("div",{className:"uagb-forms-required-wrap"},l.a.createElement(p.ToggleControl,{label:Object(s.__)("Required","ultimate-addons-for-gutenberg"),checked:i,onChange:()=>a({nameRequired:!i})})),l.a.createElement(_.RichText,{tagName:"div",placeholder:Object(s.__)("Name","ultimate-addons-for-gutenberg"),value:c,onChange:e=>a({name:e}),className:`uagb-forms-name-label ${m} uagb-forms-input-label`,multiline:!1,id:r}),l.a.createElement("input",{type:"text",placeholder:d,required:i,className:"uagb-forms-name-input uagb-forms-input",name:r})))};t.default=l.a.memo(h)}}]);